import { useState } from 'react';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}