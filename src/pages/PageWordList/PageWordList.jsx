import { useContext } from 'react';
import Table from 'react-bootstrap/Table';

import TableRow from '../../components/TableRow/TableRow';
import AddWord from '../../components/AddWord/AddWord';

import { ThemeContext } from '../../context/ThemeContext';

function WordList({ words, addNewWord, removeWord, updateWord }) {
  const { darkMode } = useContext(ThemeContext);

  const handleRemoveWord = wordId => {
    // setWords(words.filter(word => word.id !== id));
    removeWord(wordId);
  };

  const isFieldValid = field => {
    const pattern = /\d+/g; // регулярное выражение для поиска цифр в строке
    const hasDigits = pattern.test(field); // проверяем наличие цифр в строке
    return !hasDigits;
  };

  return (
    <div
      className="container mt-4"
      bg={darkMode ? 'dark' : 'light'}
      data-bs-theme={darkMode ? 'dark' : 'light'}
    >
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>English Word</th>
            <th>Transcrption</th>
            <th>Russian Word</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <AddWord
            isFieldValid={isFieldValid}
            words={words}
            addNewWord={addNewWord}
          />
          {words.map(word => {
            return (
              <TableRow
                {...word}
                key={word.wordId}
                onRemoveWord={handleRemoveWord}
                updateWord={updateWord}
                isFieldValid={isFieldValid}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default WordList;
