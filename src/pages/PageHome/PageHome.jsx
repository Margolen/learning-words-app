import { useNavigate } from 'react-router-dom';

import { Button, Container, Image } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  return (
    <Container className="home text-center d-flex flex-column align-items-center justify-content-center mt-4">
      <Image
        src="img/flag.svg"
        alt="UK flag"
        fluid
        rounded
        style={{ width: '850px', height: 'auto' }}
      />
      <Button
        variant="success"
        onClick={() => navigate('game')}
        className="mt-3"
        size="lg"
      >
        Get started
      </Button>
    </Container>
  );
}

export default Home;
