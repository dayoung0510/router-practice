import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

type Props = {
  id: number;
  name: string;
  friends: number[];
};

type PeepsProps = Props[];

const PEEPS: PeepsProps = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] },
];

const find = (id: number) => {
  return PEEPS.find((p) => p.id === id);
};

const Person = () => {
  const { url } = useRouteMatch();
  const params = useParams();
  const { id } = params as { id: string };
  const person = find(Number(id));
  if (!person) return null;

  return (
    <div>
      <div style={{ borderBottom: '1px solid gray', paddingBottom: '1rem' }}>
        <h3 style={{ fontWeight: 800 }}>{person && person.name}의 친구</h3>
        <ul>
          {person.friends.map((f) => {
            return (
              <li key={f}>
                <Link to={`${url}/${f}`}>{find(f)?.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </div>
  );
};

const Recursive: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/recursive/:id">
            <Person />
          </Route>
          <Route path="/recursive">
            <Redirect to="/recursive/0" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Recursive;
