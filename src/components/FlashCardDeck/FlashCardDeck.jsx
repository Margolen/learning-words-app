import { useState } from 'react';
import CSSModules from 'react-css-modules';
import FlashCard from '../FlashCard/FlashCard';
import styles from './style.module.scss';

function FlashCardDesk(props) {
  const [count, setCount] = useState(0);

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

  return (
    <div styleName="desk">
      <button onClick={handlePrev}>prev</button>
      <FlashCard word={props.words[count]} key={count} />
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default CSSModules(FlashCardDesk, styles);
