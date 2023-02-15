import CSSModules from "react-css-modules";
import styles from "./style.module.scss";

function WordList(props) {
  return (
    <div styleName="table">
      <div styleName="english">{props.english}</div>
      <div styleName="transcription">{props.transcription}</div>
      <div styleName="russian">{props.russian}</div>
    </div>
  );
}

export default CSSModules(WordList, styles);
