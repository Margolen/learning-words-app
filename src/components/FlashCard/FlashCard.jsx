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
    <Card className="text-center" style={{ width: '18rem', height: '10rem' }}>
      <Card.Body>
        <Card.Title as="h1">{word.english}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {word.transcription}
        </Card.Subtitle>
        <>
          {flipped ? (
            <Card.Text as="h3">{word.russian}</Card.Text>
          ) : (
            <Button variant="primary" onClick={flip} ref={flipButtonRef}>
              Проверить
            </Button>
          )}
        </>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
