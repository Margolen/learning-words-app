import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function FlashCard(props) {
  const [flipped, setFlipped] = useState(false);

  function flip() {
    setFlipped(true);
  }

  return (
    <div styleName="flash-card">
      <div styleName="main">
        <div styleName="english">{props.english}</div>
        <div styleName="transcription">{props.transcription}</div>
      </div>
      <div styleName="action">
        {flipped ? (
          <div styleName="russian">{props.russian}</div>
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
