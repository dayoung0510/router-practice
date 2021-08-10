import React from 'react';
import styled from 'styled-components';
import './index.css';
import 'reset-css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from 'components/About';
import Users from 'components/Users';
import Home from 'components/Home';
import Topics from 'components/Topics';

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
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>

            {/* 왜 이게 젤 마지막에 와야 정상작동할까? */}
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
