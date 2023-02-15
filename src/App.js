import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import words from "./words.json";
import FlashCard from "./components/FlashCard/FlashCard";
import WordList from "./components/WordList/WordList";

export default function App() {
  console.log(words);

  return (
    <div className="App">
      <Header />
      <Home />
      <WordList words={words} />
      {words.map((word) => {
        return <FlashCard {...word} />;
      })}
    </div>
  );
}
