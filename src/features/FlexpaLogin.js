import React from 'react';
import useFlexpaLogin from 'store/slices/flexpa/useFlexpaLogin';

const FlexpaLogin = () => {
  const FlexpaLink = useFlexpaLogin();
  const handleClick = () => {
    FlexpaLink.open();
  };

  return (
    <div>
      <button onClick={handleClick}>Open</button>
    </div>
  );
};

export default FlexpaLogin;
