import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Dictionary />
      </div>
      <footer className="link">
        Coded by Milla,{" "}
        <a href="https://github.com/milske/dictionary-project">
          found in GitHub
        </a>
      </footer>
    </div>
  );
}
