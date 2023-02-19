import words from './words.json';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FlashCard from './components/FlashCard/FlashCard';
import WordList from './components/WordList/WordList';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* <Home /> */}
        <WordList words={words} />
        {words.map(word => {
          return (
            <FlashCard
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              key={word.id}
            />
          );
        })}
      </div>
    </div>
  );
}
