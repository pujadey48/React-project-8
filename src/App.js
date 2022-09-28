import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  const handleAddToActivity = (product) => {
    console.log("clicked", product);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9 bg-light">
          <Header></Header>
          <Cards handleAddToActivity={handleAddToActivity}></Cards>
        </div>
        <div className="col-3">
          <RightPanel></RightPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
