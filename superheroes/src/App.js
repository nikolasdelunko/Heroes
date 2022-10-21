import "./App.css";
import Main from "./Pages/Main/Main";
import Header from "./Components/Header/Header";
import Pagination from "./Components/Pagination/Pagination"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
			<Pagination />
    </div>
  );
}

export default App;
