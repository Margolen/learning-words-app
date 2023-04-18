import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function TableRow(props) {
  const { english, transcription, russian } = props.word;
  const [editMode, setEditMode] = useState(false);

  const [inputValueEnglish, setInputValueEnglish] = useState(english);
  const [inputValueRussian, setInputValueRussian] = useState(russian);
  const [inputValueTranscription, setInputValueTranscription] =
    useState(transcription);

  const [isCorrectEnglish, setIsCorrectEnglish] = useState(
    english.trim() !== ''
  );
  const [isCorrectRussian, setIsCorrectRussian] = useState(
    russian.trim() !== ''
  );
  const [isCorrectTranscription, setIsCorrectTranscription] = useState(
    transcription.trim() !== ''
  );

  function handleInputChangeEnglish(event) {
    setInputValueEnglish(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectEnglish(false);
    } else {
      setIsCorrectEnglish(true);
    }
  }

  function handleInputChangeRussian(event) {
    setInputValueRussian(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectRussian(false);
    } else {
      setIsCorrectRussian(true);
    }
  }

  function handleInputChangeTranscription(event) {
    setInputValueTranscription(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectTranscription(false);
    } else {
      setIsCorrectTranscription(true);
    }
  }

  return (
    <tr>
      {editMode ? (
        <>
          <td>
            <input
              defaultValue={inputValueEnglish}
              onChange={handleInputChangeEnglish}
              styleName={!isCorrectEnglish && 'incorrect'}
            ></input>
          </td>
          <td>
            <input
              defaultValue={inputValueTranscription}
              onChange={handleInputChangeTranscription}
              styleName={!isCorrectTranscription && 'incorrect'}
            ></input>
          </td>
          <td>
            <input
              defaultValue={inputValueRussian}
              onChange={handleInputChangeRussian}
              styleName={!isCorrectRussian && 'incorrect'}
            ></input>
          </td>
        </>
      ) : (
        <>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
        </>
      )}

      <td>
        {editMode ? (
          <>
            <img
              onClick={() => setEditMode(false)}
              styleName="img-row"
              src="./img/cancel.png"
              alt=""
            />
            <img
              styleName={
                isCorrectEnglish && isCorrectRussian && isCorrectTranscription
                  ? 'img-row'
                  : 'img-row disabled'
              }
              src="./img/save.png"
              alt=""
            />
          </>
        ) : (
          <>
            <img
              onClick={() => setEditMode(true)}
              styleName="img-row"
              src="./img/edit.png"
              alt=""
            />
            <img styleName="img-row" src="./img/delete.png" alt="" />
          </>
        )}
      </td>
    </tr>
  );
}

export default CSSModules(TableRow, styles, {
  allowMultiple: true,
});
