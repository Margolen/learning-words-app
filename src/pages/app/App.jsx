import words from '../../words.json';
import { PageHome, PageWordList, PageError } from '../index';
import './App.css';
import Header from '../../components/Header/Header';
import Home from '../PageHome/PageHome';
import WordList from '../PageWordList/PageWordList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import PageFlashCardDeck from '../PageFlashCardDeck/PageFlashCardDeck';
import FlashCard from '../../components/FlashCard/FlashCard';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<PageHome />}></Route>
            <Route
              path="/wordtraining"
              element={<PageFlashCardDeck words={words} />}
            ></Route>
            <Route
              path="/wordlist"
              element={<PageWordList words={words} />}
            ></Route>
            <Route path="*" element={<PageError />}></Route>
          </Routes>
          <div className="content">
            <Home />
            {/* <WordList words={words} /> */}
            {/* <PageFlashCardDeck words={words} /> */}
            {/* {words.map(word => {
          return (
            <FlashCard
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              key={word.id}
            />
          );
        })} */}
          </div>
        </main>
      </div>
    </Router>
  );
}
