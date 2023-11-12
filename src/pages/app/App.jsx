import wordsJson from '../../words.json';

import { useState, useContext } from 'react';
import { PageHome, PageFlashCardDeck, PageWordList, PageError } from '../index';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

export default function App() {
  const [words, setWords] = useState(wordsJson);
  const { darkMode } = useContext(ThemeContext);

  return (
    <Router>
      <div
        className="h-100"
        style={{ backgroundColor: darkMode ? '#444444' : 'white' }}
      >
        <header>
          <Header />
        </header>
        <main style={{ backgroundColor: darkMode ? '#444444' : 'white' }}>
          <Routes>
            <Route path="/" element={<PageHome words={words} />}></Route>
            <Route
              path="/game"
              element={<PageFlashCardDeck words={words} />}
            ></Route>
            <Route
              path="/wordlist"
              element={<PageWordList words={words} setWords={setWords} />}
            ></Route>
            <Route path="*" element={<PageError />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
