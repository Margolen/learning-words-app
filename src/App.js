import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import words from "./words.json";
import FlashCard from "./components/FlashCard/FlashCard";

export default function App() {
  console.log(words);

  return (
    <div className="App">
      <Header />
      <Home />
      {words.map((word) => {
        return <FlashCard {...word} />;
      })}
    </div>
  );
}
