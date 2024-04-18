import "./App.css";
import zbroj from "./import/default";
import * as All from "./import/named_export";

function App() {
  return (
    <div className="App">
      <p>Broj broja 1 i 2 = {zbroj(1, 2)}</p>
      <p>ime: {All.name} </p>
      <p>Prezime: {All.surname} </p>
      <p>Oduzimanje brojeva {All.oduzimanje(5, 3)}</p>
    </div>
  );
}

export default App;
