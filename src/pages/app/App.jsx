import words from '../../words.json';
import { PageHome, PageFlashCardDeck, PageWordList, PageError } from '../index';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<PageHome words={words} />}></Route>
            <Route
              path="/game"
              element={<PageFlashCardDeck words={words} />}
            ></Route>
            <Route
              path="/wordlist"
              element={<PageWordList words={words} />}
            ></Route>
            <Route path="*" element={<PageError />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
