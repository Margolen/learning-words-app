import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
      <Row className="justify-content-center">
        <Col lg={4}>
          <FlashCard
            onFlip={handleFlip}
            word={props.words[count]}
            key={count}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={2} className="pt-3">
          <Button
            className="w-100 h-100"
            size="sm"
            variant="outline-success"
            onClick={handlePrev}
          >
            PREV
          </Button>
        </Col>
        <Col lg={2} className="pt-3">
          <Button
            className="w-100 h-100"
            size="sm"
            variant="outline-success"
            onClick={handleNext}
          >
            NEXT
          </Button>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>Words checked: {flipCount}</Col>
      </Row>
    </Container>
  );
}

export default FlashCardDesk;
