import { useNavigate } from 'react-router-dom';

function PageError() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Page Error </h1>
      <button onClick={() => navigate('')} className="link_404">
        Go to Home
      </button>
    </div>
  );
}

export default PageError;
