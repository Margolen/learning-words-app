import { useState } from 'react';
import {
  PencilSquare,
  Trash3,
  CheckSquare,
  XSquare,
} from 'react-bootstrap-icons';

function TableRow(props) {
  const { english, transcription, russian, id } = props.word;
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

  const handleInputChangeEnglish = event => {
    setInputValueEnglish(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectEnglish(false);
    } else {
      setIsCorrectEnglish(true);
    }
  };

  const handleInputChangeRussian = event => {
    setInputValueRussian(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectRussian(false);
    } else {
      setIsCorrectRussian(true);
    }
  };

  const handleInputChangeTranscription = event => {
    setInputValueTranscription(event.target.value);
    if (event.target.value.trim() === '') {
      setIsCorrectTranscription(false);
    } else {
      setIsCorrectTranscription(true);
    }
  };

  const isFieldValid = field => {
    const pattern = /\d+/g; // регулярное выражение для поиска цифр в строке
    const hasDigits = pattern.test(field); // проверяем наличие цифр в строке
    return !hasDigits;
  };

  const handleSave = () => {
    if (isFieldValid(inputValueEnglish)) {
      console.log('English field is correct');
    } else {
      alert('Invalid English value');
      return;
    }

    if (isFieldValid(inputValueRussian)) {
      console.log('Russian field is correct');
    } else {
      alert('Invalid Russian value');
      return;
    }

    if (isFieldValid(inputValueTranscription)) {
      console.log('Transcription field is correct');
    } else {
      alert('Invalid transcription value');
      return;
    }

    setEditMode(false);
  };

  return (
    <tr>
      {editMode ? (
        <>
          <td>
            <input
              value={inputValueEnglish}
              onChange={handleInputChangeEnglish}
              // styleName={!isCorrectEnglish && 'incorrect'}
            ></input>
          </td>
          <td>
            <input
              value={inputValueTranscription}
              onChange={handleInputChangeTranscription}
              // styleName={!isCorrectTranscription && 'incorrect'}
            ></input>
          </td>
          <td>
            <input
              value={inputValueRussian}
              onChange={handleInputChangeRussian}
              // styleName={!isCorrectRussian && 'incorrect'}
            ></input>
          </td>
        </>
      ) : (
        <>
          <td>{inputValueEnglish}</td>
          <td>{inputValueTranscription}</td>
          <td>{inputValueRussian}</td>
        </>
      )}

      <td>
        {editMode ? (
          <>
            <XSquare size={24} onClick={() => setEditMode(false)} />
            <CheckSquare size={24} onClick={handleSave} />
          </>
        ) : (
          <>
            <PencilSquare size={24} onClick={() => setEditMode(true)} />
            <Trash3 size={24} onClick={() => props.onRemoveWord(id)} />
          </>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
