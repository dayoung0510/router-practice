import React, { useState, ChangeEvent } from 'react';
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
        <h3>{isBlocking ? '블로킹 되고 있습니다' : '블로킹 해제'}</h3>
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
