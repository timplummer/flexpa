const FLEXPA_BASE_URL = process.env.REACT_APP_FLEXPA_BASE_URL;
const FLEXPA_SECRET = process.env.REACT_APP_FLEXPA_SECRET;

export const fetchAuth = async (public_token) => {
  const response = await fetch(`${FLEXPA_BASE_URL}/link/exchange`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ public_token, secret_key: FLEXPA_SECRET }),
  });
  return response.json();
};

export const fetchEob = async (auth) => {
  const headers = {
    authorization: auth.access_token,
  };
  const response = await fetch(
    `${FLEXPA_BASE_URL}/fhir/ExplanationOfBenefit?patient=${auth.user.id}`,
    {
      headers,
    }
  );
  return response.json();
};
