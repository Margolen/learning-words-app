import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';
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
    <div styleName="desk">
      <button onClick={handlePrev}>prev</button>
      <FlashCard onFlip={handleFlip} word={props.words[count]} key={count} />
      <button onClick={handleNext}>next</button>
      <div>Выучено слов: {flipCount}</div>
    </div>
  );
}

export default CSSModules(FlashCardDesk, styles);
