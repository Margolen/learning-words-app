import { useState, useReducer } from 'react';
import {
  PencilSquare,
  Trash3,
  CheckSquare,
  XSquare,
} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

const EDIT_ACTIONS = {
  setEnglish: 'SET_ENG',
  setRussian: 'SET_RUS',
  setTranscription: 'SET_TRANS',
  setWord: 'SET_WORD',
};

function TableRow({
  english,
  transcription,
  russian,
  id,
  onRemoveWord,
  isFieldValid,
}) {
  const [editMode, setEditMode] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case EDIT_ACTIONS.setEnglish:
        return { ...state, english: action.payload };
      case EDIT_ACTIONS.setTranscription:
        return { ...state, transcription: action.payload };
      case EDIT_ACTIONS.setRussian:
        return { ...state, russian: action.payload };
      case EDIT_ACTIONS.setWord:
        return { ...action.payload };
      default:
        return state;
    }
  };

  const initialWord = {
    english: english,
    russian: russian,
    transcription: transcription,
  };

  const [word, setWord] = useState(initialWord);
  const [editedWord, dispatch] = useReducer(reducer, word);

  const handleInputChangeEnglish = event =>
    dispatch({
      type: EDIT_ACTIONS.setEnglish,
      payload: event.target.value,
    });

  const handleInputChangeRussian = event =>
    dispatch({
      type: EDIT_ACTIONS.setRussian,
      payload: event.target.value,
    });

  const handleInputChangeTranscription = event =>
    dispatch({
      type: EDIT_ACTIONS.setTranscription,
      payload: event.target.value,
    });

  const handleSave = () => {
    if (!isFieldValid(editedWord.english)) {
      alert('Invalid English value');
      return;
    }

    if (!isFieldValid(editedWord.russian)) {
      alert('Invalid Russian value');
      return;
    }

    if (!isFieldValid(editedWord.transcription)) {
      alert('Invalid transcription value');
      return;
    }

    setWord(editedWord);
    setEditMode(false);
  };

  const handleCancel = () => {
    dispatch({
      type: EDIT_ACTIONS.setWord,
      payload: word,
    });
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
              value={editedWord.english}
              isInvalid={!isFieldValid(editedWord.english)}
              onChange={handleInputChangeEnglish}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="transciption"
              value={editedWord.transcription}
              isInvalid={!isFieldValid(editedWord.transcription)}
              onChange={handleInputChangeTranscription}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="russian"
              value={editedWord.russian}
              isInvalid={!isFieldValid(editedWord.russian)}
              onChange={handleInputChangeRussian}
            />
          </td>
        </>
      ) : (
        <>
          <td>{word.english}</td>
          <td>{word.transcription}</td>
          <td>{word.russian}</td>
        </>
      )}

      <td>
        {editMode ? (
          <>
            <XSquare
              size={32}
              onClick={handleCancel}
              className="px-1 cursor-pointer hover-effect"
            />
            <CheckSquare
              size={32}
              onClick={handleSave}
              className="px-1 cursor-pointer hover-effect"
            />
          </>
        ) : (
          <>
            <PencilSquare
              size={32}
              onClick={() => setEditMode(true)}
              className="px-1  cursor-pointer hover-effect"
            />
            <Trash3
              size={32}
              onClick={() => onRemoveWord(id)}
              className="px-1 cursor-pointer hover-effect"
            />
          </>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
