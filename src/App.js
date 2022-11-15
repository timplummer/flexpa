import React from 'react';
import { useSelector } from 'react-redux';
import FlexpaLogin from 'features/FlexpaLogin';
import EOB from 'features/EOB';

function App() {
  const auth = useSelector((state) => state.flexpa.auth);
  const isAuth = 'access_token' in auth;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, there!</h1>
      </header>
      {isAuth ? <EOB /> : <FlexpaLogin />}
    </div>
  );
}

export default App;
