import React from 'react';
import styled from 'styled-components';
import './index.css';
import 'reset-css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import About from 'components/About';
import User from 'components/User';
import Home from 'components/Home';
import Topics from 'components/Topics';
import AllUsers from 'components/AllUsers';

const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: #ca8989;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Content = styled.div`
  background-color: #ffffff;
  height: calc(100% - 3rem);
  padding: 2rem;
`;

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Router>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/topics">Topics</Link>
        </Nav>
        <Content>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users/:id">
              <User />
            </Route>
            <Route path="/users">
              <AllUsers />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
