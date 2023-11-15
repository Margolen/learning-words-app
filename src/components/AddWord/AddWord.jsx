import Form from 'react-bootstrap/Form';
import { PlusSquare } from 'react-bootstrap-icons';
import { useReducer } from 'react';

const EDIT_ACTIONS = {
  setEnglish: 'SET_ENG',
  setRussian: 'SET_RUS',
  setTranscription: 'SET_TRANS',
  clean: 'CLEAN',
};

function AddWord({ isFieldValid, addNewWord }) {
  const initialWord = {
    english: '',
    russian: '',
    transcription: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case EDIT_ACTIONS.setEnglish:
        return { ...state, english: action.payload };
      case EDIT_ACTIONS.setTranscription:
        return { ...state, transcription: action.payload };
      case EDIT_ACTIONS.setRussian:
        return { ...state, russian: action.payload };
      case EDIT_ACTIONS.clean:
        return { ...initialWord };
      default:
        return state;
    }
  };

  const [word, dispatch] = useReducer(reducer, initialWord);

  const onSaveWord = () => {
    addNewWord({ ...word });
    dispatch({ type: EDIT_ACTIONS.clean });
  };

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

  return (
    <>
      <tr>
        <td>
          <Form.Control
            placeholder="Type an english word"
            aria-label="English Word"
            aria-describedby="basic-addon2"
            value={word.english}
            isInvalid={!isFieldValid(word.english)}
            onChange={handleInputChangeEnglish}
          />
        </td>
        <td>
          <Form.Control
            placeholder="Type a transcrption"
            aria-label="Transcrption"
            aria-describedby="basic-addon2"
            value={word.transcription}
            isInvalid={!isFieldValid(word.transcription)}
            onChange={handleInputChangeTranscription}
          />
        </td>
        <td>
          <Form.Control
            placeholder="Type a russian word"
            aria-label="Russian Word"
            aria-describedby="basic-addon2"
            value={word.russian}
            isInvalid={!isFieldValid(word.russian)}
            onChange={handleInputChangeRussian}
          />
        </td>
        <td>
          <PlusSquare
            size={32}
            onClick={onSaveWord}
            className="px-1 cursor-pointer
            hover-effect"
          />
        </td>
      </tr>
    </>
  );
}

export default AddWord;
