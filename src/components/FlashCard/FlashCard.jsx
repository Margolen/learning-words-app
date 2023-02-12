import CSSModules from 'react-css-modules';
import styles from './style.module.scss'

function FlashCard(props) {
    return (
      <div styleName="flash-card">
          <div styleName="card-english">{props.english}</div>
          <div styleName="card-transcription">{props.transcription}</div>
          <div styleName="card-russian">{props.russian}</div>
                </div>
    )
  }
  

export default CSSModules(FlashCard, styles);