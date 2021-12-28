import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ color: "red", backgroundColor: "white", paddingTop: 50 }}>
          lorem lorem lorem lorem lorem lorem
        </div>
        <div className="alert alert-primary">A Simple Primary Alert</div>
        <br />
        <br />
        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
