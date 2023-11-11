import { useState } from 'react';

import FlashCard from '../../components/FlashCard/FlashCard';

function FlashCardDesk(props) {
  const [count, setCount] = useState(0);
  const [flipCount, setFlipCount] = useState(0);

  function handlePrev() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    if (count < props.words.length - 1) {
      setCount(count + 1);
    }
  }

  function handleFlip() {
    setFlipCount(flipCount + 1);
  }

  return (
    <>
      <div>
        <button onClick={handlePrev}>prev</button>
        <FlashCard onFlip={handleFlip} word={props.words[count]} key={count} />
        <button onClick={handleNext}>next</button>
      </div>
      <div>Выучено слов: {flipCount}</div>
    </>
  );
}

export default FlashCardDesk;
