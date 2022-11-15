import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import jwt from 'jwt-decode';

const name = 'flexpaApi';

const flexpaApi = createApi({
  reducerPath: name,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLEXPA_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint !== 'getAccessToken') {
        const state = getState();
        handleHeaders(headers, state);
      }
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE && action.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAccessToken: builder.query({
      query: ({ public_token }) => {
        return {
          url: `/link/exchange`,
          method: 'POST',
          body: {
            public_token,
            secret_key: process.env.REACT_APP_FLEXPA_SECRET,
          },
        };
      },
      transformResponse: (response) => {
        const user = jwt(response.access_token);
        const id = user.sub.replace('Patient/', '');
        return { ...response, user: { ...user, id } };
      },
    }),
    getEoB: builder.query({
      query: (patient) => ({
        url: `/fhir/ExplanationOfBenefit`,
        params: { patient },
      }),
    }),
  }),
});

const handleHeaders = (headers, state) => {
  const result = flexpaApi.endpoints.getAccessToken.select()(state);
  if (!result.isUninitialized) {
    const { data } = result;
    if (data.access_token) {
      headers.set('authorization', `Bearer ${data.access_token}`);
    }
  }
};

export const { getAccessToken } = flexpaApi.endpoints;
export const { useGetAccessTokenQuery, useGetEoBQuery } = flexpaApi;

export default flexpaApi;
