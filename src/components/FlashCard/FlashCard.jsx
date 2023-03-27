import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function FlashCard(props) {
  const word = props.word;
  const [flipped, setFlipped] = useState(false);

  function flip() {
    setFlipped(true);
    props.onFlip();
  }

  return (
    <div styleName="flash-card">
      <div styleName="main">
        <div styleName="english">{word.english}</div>
        <div styleName="transcription">{word.transcription}</div>
      </div>
      <div styleName="action">
        {flipped ? (
          <div styleName="russian">{word.russian}</div>
        ) : (
          <button styleName="flip-button" onClick={flip}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}

export default CSSModules(FlashCard, styles);
