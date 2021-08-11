import React, { useContext, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

const ProtectedPage: React.FC = () => {
  return <div>ProtectedPage</div>;
};

export default ProtectedPage;
