import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Topic from 'components/Topic';

const Div = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid gray;
`;

const Topics: React.FC = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
      <Div>
        <Link to={`${match.url}/components`}>Components</Link>
      </Div>
      <Div>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </Div>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <div>Please select a topic.</div>
        </Route>
      </Switch>
    </>
  );
};

export default Topics;
