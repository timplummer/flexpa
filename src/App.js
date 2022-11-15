import React from 'react';
import { useSelector } from 'react-redux';
import FlexpaLogin from 'features/FlexpaLogin';
import EOB from 'features/EOB';

function App() {
  const auth = useSelector((state) => state.flexpa.auth);
  const isAuth = 'access_token' in auth;
  const header = isAuth
    ? 'Explanation of Benefits'
    : 'Authenticate with FlexpaLink';
  return (
    <div className="App">
      <header className="App-header">
        <h1>{header}</h1>
      </header>
      {isAuth ? <EOB /> : <FlexpaLogin />}
    </div>
  );
}

export default App;
