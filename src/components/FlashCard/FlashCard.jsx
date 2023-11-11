import { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FlashCard(props) {
  const word = props.word;
  const [flipped, setFlipped] = useState(false);

  const flipButtonRef = useRef();
  useEffect(() => flipButtonRef.current.focus(), []);

  function flip() {
    setFlipped(true);
    props.onFlip();
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header as="h5">{word.english}</Card.Header>

        <div>
          {flipped ? (
            <Card.Title>{word.russian}</Card.Title>
          ) : (
            <Button variant="primary" onClick={flip} ref={flipButtonRef}>
              Проверить
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
