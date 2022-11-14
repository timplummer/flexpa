import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reducerPath = 'flexpaApi';

const flexpaApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLEXPA_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      console.log('prepareHeaders', endpoint);
      const state = getState();
      handleHeaders(headers, state);
    },
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query({
      query: ({ public_token }) => {
        console.log(
          'getAccessToken',
          public_token,
          process.env.REACT_APP_FLEXPA_SECRET
        );
        return {
          url: `/link/exchange`,
          method: 'POST',
          body: {
            public_token,
            secret_key: process.env.REACT_APP_FLEXPA_SECRET,
          },
        };
      },
    }),
    getEoB: () => builder.query({ query: () => ({ url: `eob` }) }),
  }),
});

const handleHeaders = (headers, state) => {
  const result = flexpaApi.endpoints.getAccessToken.select()(state);
  if (!result.isUninitialized) {
    console.log(result);
    const { data } = result;
    if (data.access_token) {
      headers.set('authorization', data.access_token);
    }
  }
};

export const { getAccessToken } = flexpaApi.endpoints;

export default flexpaApi;
