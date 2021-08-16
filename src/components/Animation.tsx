import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  NavLink,
} from 'react-router-dom';
import 'components/styles/styles.css';
import { inherits } from 'util';

const StyledNavLink = styled(NavLink)`
  margin-right: 2rem;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const fill: CSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
const content: CSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: '40px',
  textAlign: 'center',
};
const nav: CSSProperties = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
};
const navItem: CSSProperties = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px',
};
const hsl: CSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};
const rgb: CSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};

const HSL = () => {
  const params = useParams();
  const { h, s, l } = params as { h: string; s: string; l: string };
  return (
    <div
      style={{
        background: `hsl(${h}, ${s}%, ${l}%)`,
        width: '100vw',
        height: '100vh',
      }}
    >
      hsl({h}, {s}%, {l}%)
    </div>
  );
};

const RGB = () => {
  const params = useParams();
  const { r, g, b } = params as { r: string; g: string; b: string };
  return (
    <div
      style={{
        background: `rgb(${r}, ${g}, ${b})`,
        width: '100vw',
        height: '100vh',
      }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
};

const AnimationApp = () => {
  const location = useLocation();
  return (
    <div style={{ position: 'relative' }}>
      <div style={fill}>
        <ul style={nav}>
          <StyledNavLink style={navItem} to="/animation/hsl/10/90/50">
            Red
          </StyledNavLink>
          <StyledNavLink style={navItem} to="/animation/hsl/120/100/40">
            Green
          </StyledNavLink>
          <StyledNavLink style={navItem} to="/animation/rgb/33/150/243">
            Blue
          </StyledNavLink>
          <StyledNavLink style={navItem} to="/animation/rgb/240/98/146">
            Pink
          </StyledNavLink>
        </ul>

        <div style={content}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route path="/animation/hsl/:h/:s/:l">
                  <HSL />
                </Route>
                <Route path="/animation/rgb/:r/:g/:b">
                  <RGB />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

const Animation: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/animation">
            <Redirect to="/animation/hsl/10/90/50" />
          </Route>
          <Route path="/animation/*">
            <AnimationApp />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Animation;
