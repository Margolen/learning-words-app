import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FlashCard from '../../components/FlashCard/FlashCard';
import { ThemeContext } from '../../context/ThemeContext';

function FlashCardDeck({ words }) {
  const { darkMode } = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [flipCount, setFlipCount] = useState(0);

  const [checkedWordIds, setCheckedWordIds] = useState([]);

  function handlePrev() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    if (count < words.length - 1) {
      setCount(count + 1);
    }
  }

  function handleFlip(wordId) {
    const foundWordId = checkedWordIds.find(id => id === wordId);
    if (!foundWordId) {
      setFlipCount(flipCount + 1);
      setCheckedWordIds([...checkedWordIds, wordId]);
    }
  }

  const word = words[count];

  return word ? (
    <Container
      className="mt-5 text-center container__table"
      bg={darkMode ? 'dark' : 'light'}
      data-bs-theme={darkMode ? 'dark' : 'light'}
    >
      <Row className="justify-content-center">
        <Col lg={4}>
          <FlashCard
            onFlip={() => handleFlip(word.id)}
            word={word}
            key={count}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={2} className="pt-3">
          <Button
            className="w-100 h-100"
            size="sm"
            variant="success"
            onClick={handlePrev}
          >
            PREV
          </Button>
        </Col>
        <Col lg={2} className="pt-3">
          <Button
            className="w-100 h-100"
            size="sm"
            variant="success"
            onClick={handleNext}
          >
            NEXT
          </Button>
        </Col>
      </Row>
      <Row className="pt-3" style={{ color: darkMode ? 'white' : 'black' }}>
        <Col>Words checked: {flipCount}</Col>
      </Row>
    </Container>
  ) : (
    <h1>Please add words in your word list</h1>
  );
}

export default FlashCardDeck;
