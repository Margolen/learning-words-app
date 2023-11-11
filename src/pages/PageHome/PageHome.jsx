import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img src="img/flag.png" alt="flag of the UK" />
      <button onClick={() => navigate('game')}>Get started</button>
    </div>
  );
}

export default Home;
