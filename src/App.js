import "./App.css";
import TicTacToe from "./components/TicTacToe/TicTacToe.js";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable.js";

function App() {
  return (
    <div className="App">
      <TicTacToe />
      <FilterableProductTable />
    </div>
  );
}

export default App;
