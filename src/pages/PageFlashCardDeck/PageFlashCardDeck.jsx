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
    <>
      <div styleName="desk">
        <button styleName="switch" onClick={handlePrev}>
          prev
        </button>
        <FlashCard onFlip={handleFlip} word={props.words[count]} key={count} />
        <button styleName="switch" onClick={handleNext}>
          next
        </button>
      </div>
      <div styleName="counter">Выучено слов: {flipCount}</div>
    </>
  );
}

export default CSSModules(FlashCardDesk, styles);
