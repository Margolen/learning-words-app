import { useState } from 'react';
import {
  PencilSquare,
  Trash3,
  CheckSquare,
  XSquare,
} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

function TableRow({ english, transcription, russian, id, onRemoveWord }) {
  const [editMode, setEditMode] = useState(false);

  const [inputValueEnglish, setInputValueEnglish] = useState(english);
  const [inputValueRussian, setInputValueRussian] = useState(russian);
  const [inputValueTranscription, setInputValueTranscription] =
    useState(transcription);

  const handleInputChangeEnglish = event => {
    setInputValueEnglish(event.target.value);
  };

  const handleInputChangeRussian = event => {
    setInputValueRussian(event.target.value);
  };

  const handleInputChangeTranscription = event => {
    setInputValueTranscription(event.target.value);
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
              isInvalid={!isFieldValid(inputValueEnglish)}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="transciption"
              value={inputValueTranscription}
              onChange={handleInputChangeTranscription}
              isInvalid={!isFieldValid(inputValueTranscription)}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="russian"
              value={inputValueRussian}
              onChange={handleInputChangeRussian}
              isInvalid={!isFieldValid(inputValueRussian)}
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
            <Trash3 size={24} onClick={() => onRemoveWord(id)} />
          </>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
