import { useState, useContext, useEffect } from 'react';
import { PageHome, PageFlashCardDeck, PageWordList, PageError } from '../index';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import { database } from '../../firebase';
import { ref, onValue, child, push, update } from 'firebase/database';

export default function App() {
  const [user, setUser] = useState(null);
  const [words, setWords] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  const onWordsChange = () => {
    const wordsRef = ref(database, `user/${user.uid}/words/`);
    onValue(wordsRef, words => {
      const data = words.val();
      if (data) {
        const requestedWords = Object.entries(data).map(([wordId, word]) => {
          return { ...word, wordId };
        });

        setWords(requestedWords);
      } else {
        setWords([]);
      }
    });
  };

  useEffect(() => {
    if (user) {
      onWordsChange(user);
    }
  }, [user]);

  const addNewWord = word => {
    if (!user) {
      return;
    }

    const databaseRef = ref(database);
    const newWordId = push(child(databaseRef, `user/${user.uid}/words/`)).key;

    const updates = {};
    updates[`user/${user.uid}/words/` + newWordId] = word;

    return update(databaseRef, updates);
  };

  const removeWord = wordId => {
    if (!user) {
      return;
    }

    const databaseRef = ref(database);
    const updates = {};
    updates[`user/${user.uid}/words/` + wordId] = null;

    return update(databaseRef, updates);
  };

  const updateWord = (word, wordId) => {
    const databaseRef = ref(database);
    const updates = {};
    updates[`user/${user.uid}/words/` + wordId] = word;

    return update(databaseRef, updates);
  };

  return (
    <Router>
      <div
        className="h-100"
        style={{ backgroundColor: darkMode ? '#444444' : 'white' }}
      >
        <header>
          <Header user={user} setUser={setUser} />
        </header>
        <main style={{ backgroundColor: darkMode ? '#444444' : 'white' }}>
          <Routes>
            <Route path="/" element={<PageHome words={words} />}></Route>
            <Route
              path="/game"
              element={
                user && words ? (
                  <PageFlashCardDeck words={words} />
                ) : (
                  <h1>Sign in please to see your cards</h1>
                )
              }
            ></Route>
            <Route
              path="/wordlist"
              element={
                user ? (
                  <PageWordList
                    words={words}
                    addNewWord={addNewWord}
                    removeWord={removeWord}
                    updateWord={updateWord}
                  />
                ) : (
                  <h1>Sign in please to see your words</h1>
                )
              }
            ></Route>
            <Route path="*" element={<PageError />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
