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
      default:
        return state;
    }
  };

  const initialWord = {
    english: english,
    russian: russian,
    transcription: transcription,
  };

  const [word, dispatch] = useReducer(reducer, initialWord);

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
    if (!isFieldValid(word.english)) {
      alert('Invalid English value');
      return;
    }

    if (!isFieldValid(word.russian)) {
      alert('Invalid Russian value');
      return;
    }

    if (!isFieldValid(word.transcription)) {
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
              value={word.english}
              isInvalid={!isFieldValid(word.english)}
              onChange={handleInputChangeEnglish}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="transciption"
              value={word.transcription}
              C
              onChange={handleInputChangeTranscription}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              name="russian"
              value={word.russian}
              isInvalid={!isFieldValid(word.russian)}
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
