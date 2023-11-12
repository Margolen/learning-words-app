import { useNavigate } from 'react-router-dom';

import { Button, Container, Image } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  return (
    <Container className="home text-center mt-4">
      <Image src="img/flag.jpg" alt="UK flag" fluid rounded />
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
