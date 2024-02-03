import "./App.css";
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Pixel Art Generator </header>
      <p> This is under development </p>
      <div className="dropzone-section">
        <UploadFile />{" "}
      </div>
    </div>
  );
}

export default App;
