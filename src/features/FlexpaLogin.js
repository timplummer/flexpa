import React from 'react';
import useFlexpaLogin from 'store/slices/flexpa/useFlexpaLogin';

const FlexpaLogin = () => {
  const FlexpaLink = useFlexpaLogin();
  const handleClick = () => {
    FlexpaLink.open();
  };
  return <button onClick={handleClick}>Open</button>;
};

export default FlexpaLogin;
