import "./App.css";
import * as data from "./data/lessons.json";

function App() {
  const lessons = data;
  return (
    <div className="App">
      <header className="App-header">
        <h1>ConnectCraft - Programming</h1>
        <h3>Introduction</h3>
      </header>
      <main className="App-main">
        <div className="App-content">{lessons.lessons[1].body}</div>
        <div className="App-media">
          <div className="App-pic" />
        </div>
      </main>
      <footer className="App-footer">ConnectCraft - Programming - {lessons.lessons[1].title}</footer>
    </div>
  );
}

export default App;
