import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuth } from 'store/slices/flexpa';
import useFlexpaLogin from 'features/useFlexpaLogin';

const FlexpaLogin = () => {
  const dispatch = useDispatch();

  const handleLink = (token) => {
    dispatch(fetchAuth(token));
  };

  const FlexpaLink = useFlexpaLogin(handleLink);

  const handleClick = () => {
    FlexpaLink.open();
  };

  return <button onClick={handleClick}>Open</button>;
};

export default FlexpaLogin;
