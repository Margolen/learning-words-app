import './App.css';
import words from './words.json';
import FlashCard from './components/FlashCard/FlashCard';

export default function App () {
  console.log(words);

  return (
    <div className="App">
      {words.map((word) => {
        return <FlashCard {...word} />;
      })}
    </div>
  );
}
