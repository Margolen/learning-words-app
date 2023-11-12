import { useState } from 'react';
import {
  PencilSquare,
  Trash3,
  CheckSquare,
  XSquare,
} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

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
    setIsCorrectEnglish(isFieldValid(event.target.value));
  };

  const handleInputChangeRussian = event => {
    setInputValueRussian(event.target.value);
    setIsCorrectRussian(isFieldValid(event.target.value));
  };

  const handleInputChangeTranscription = event => {
    setInputValueTranscription(event.target.value);
    setIsCorrectTranscription(isFieldValid(event.target.value));
  };

  const isFieldValid = field => {
    const pattern = /\d+/g; // регулярное выражение для поиска цифр в строке
    const hasDigits = pattern.test(field); // проверяем наличие цифр в строке
    return field.trim() !== '' && !hasDigits;
  };

  const handleSave = () => {
    if (!isFieldValid(inputValueEnglish)) {
      alert('Invalid English value');
      return;
    }

    if (!isFieldValid(inputValueRussian)) {
      alert('Invalid Russian value');
      return;
    }

    if (!isFieldValid(inputValueTranscription)) {
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
            <Form.Control
              type="text"
              name="english"
              value={inputValueEnglish}
              onChange={handleInputChangeEnglish}
              isInvalid={!isCorrectEnglish}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="transciption"
              value={inputValueTranscription}
              onChange={handleInputChangeTranscription}
              isInvalid={!isCorrectTranscription}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="russian"
              value={inputValueRussian}
              onChange={handleInputChangeRussian}
              isInvalid={!isCorrectRussian}
            />
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
