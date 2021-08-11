import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const Home: React.FC = () => {
  const [isBlocking, setIsBlocking] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsBlocking(false);
        }}
      >
        <Prompt when={isBlocking} message="정말 빠져나가시겠습니까?" />
        <input
          type="text"
          placeholder="입력하세요"
          onChange={(e) => setIsBlocking(e.target.value.length > 0)}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Home;
