import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FlashCard from '../../components/FlashCard/FlashCard';

function FlashCardDesk(props) {
  const [count, setCount] = useState(0);
  const [flipCount, setFlipCount] = useState(0);

  function handlePrev() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    if (count < props.words.length - 1) {
      setCount(count + 1);
    }
  }

  function handleFlip() {
    setFlipCount(flipCount + 1);
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="mb-3 justify-content-center">
        <Col lg={4}>
          <FlashCard
            onFlip={handleFlip}
            word={props.words[count]}
            key={count}
          />
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col lg={2}>
          <Button
            className="w-100 h-100"
            size="sm"
            variant="outline-success"
            onClick={handlePrev}
          >
            prev
          </Button>
        </Col>
        <Col lg={2}>
          <Button
            className="w-100 h-100"
            size="sm"
            variant="outline-success"
            onClick={handleNext}
          >
            next
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>Выучено слов: {flipCount}</Col>
      </Row>
    </Container>
  );
}

export default FlashCardDesk;
