import React from 'react';
import styled from 'styled-components';
import './index.css';
import 'reset-css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import About from 'components/About';
import Home from 'components/Home';
import Topics from 'components/Topics';
import Animation from 'components/Animation';
import NoMatch from 'components/NoMatch';
import Recursive from 'components/Recursive';
import OldSchoolMenuLink from 'components/OldSchoolMenuLink';

const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: gray;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Content = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  overflow: auto;
  height: calc(100% - 3rem);
`;

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Router>
        <Nav>
          <OldSchoolMenuLink activeOnlyWhenExact to="/home" label="Home" />
          <OldSchoolMenuLink activeOnlyWhenExact to="/about" label="About" />
          <OldSchoolMenuLink
            activeOnlyWhenExact
            to="/animation"
            label="Animation"
          />
          <OldSchoolMenuLink activeOnlyWhenExact to="/topics" label="Topics" />
          <OldSchoolMenuLink
            activeOnlyWhenExact
            to="/no-match"
            label="No match"
          />

          <OldSchoolMenuLink
            activeOnlyWhenExact
            to="/recursive"
            label="Recursive"
          />
        </Nav>
        <Content>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/animation">
              <Animation />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/recursive">
              <Recursive />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            {/* <Route path="/">
              <Redirect to="/home" />
            </Route> */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
