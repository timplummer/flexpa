import React, { useState } from 'react';
import { useGetAccessTokenQuery, useGetEoBQuery } from 'store/slices/flexpa';
import useFlexpaLogin from 'store/slices/flexpa/useFlexpaLogin';

const FlexpaLogin = () => {
  // Something is broken with the selectors so this is a little hacky
  const [public_token, setToken] = useState();

  const { data: login } = useGetAccessTokenQuery(
    { public_token },
    { skip: !public_token }
  );

  const { data: user } = useGetEoBQuery(login?.user?.id, { skip: !login });

  console.log(login, user);
  const FlexpaLink = useFlexpaLogin(setToken);

  const handleClick = () => {
    FlexpaLink.open();
  };

  const handleEoB = () => {};
  return (
    <div>
      {login ? (
        <div>
          <button onClick={handleEoB}>Get EoB</button>
          <pre>{JSON.stringify(user)}</pre>
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>Open</button>
        </div>
      )}
    </div>
  );
};

export default FlexpaLogin;
