import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

type Props = {
  label: string;
  to: string;
  activeOnlyWhenExact: boolean;
};

const OldSchoolMenuLink: React.FC<Props> = ({
  label,
  to,
  activeOnlyWhenExact,
}) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className={match ? 'active' : ''}>
      {match && '>> '}
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default OldSchoolMenuLink;
