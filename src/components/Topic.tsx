import React from 'react';
import { useParams } from 'react-router-dom';

const Topic: React.FC = () => {
  const params = useParams();
  const { topicId } = params as { topicId: number };

  return <div>Requested topic ID : {topicId}</div>;
};

export default Topic;
