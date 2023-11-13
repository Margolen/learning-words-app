import { useState, useContext, useEffect } from 'react';
import { PageHome, PageFlashCardDeck, PageWordList, PageError } from '../index';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import { database } from '../../firebase';
import { ref, onValue, child, push, update } from 'firebase/database';

export default function App() {
  const [words, setWords] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const wordsRef = ref(database, 'user/words/');
    onValue(wordsRef, words => {
      const data = words.val();
      const requestedWords = Object.entries(data).map(([wordId, word]) => {
        return { ...word, wordId };
      });

      setWords(requestedWords);
    });
  }, []);

  const addNewWord = word => {
    const databaseRef = ref(database);
    const newWordId = push(child(databaseRef, 'user/words/')).key;

    const updates = {};
    updates['/user/words/' + newWordId] = word;

    return update(databaseRef, updates);
  };

  const removeWord = wordId => {
    const databaseRef = ref(database);
    const updates = {};
    updates['/user/words/' + wordId] = null;

    return update(databaseRef, updates);
  };

  const updateWord = word => {
    const databaseRef = ref(database);
    const updates = {};
    updates['/user/words/' + word.wordId] = word;

    return update(databaseRef, updates);
  };

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
              element={
                <PageWordList
                  words={words}
                  addNewWord={addNewWord}
                  removeWord={removeWord}
                  updateWord={updateWord}
                />
              }
            ></Route>
            <Route path="*" element={<PageError />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
