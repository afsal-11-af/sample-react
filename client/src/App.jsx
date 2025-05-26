// src/App.jsx
import { useState } from 'react';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <>
      {userEmail ? (
        <SignOut onSignOut={() => setUserEmail(null)} />
      ) : (
        <SignIn onSignIn={(email) => setUserEmail(email)} />
      )}
    </>
  );
}

export default App;
