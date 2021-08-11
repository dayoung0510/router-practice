import React from 'react';
import { useLocation } from 'react-router-dom';

const Auth: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <h3>{location.pathname}</h3>
      <div>해당 주소는 매치되지 않습니다</div>
    </>
  );
};

export default Auth;
