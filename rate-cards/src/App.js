import "./App.css";
import data from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {data.map((rate) => {
        return <Card props={rate} />;
      })}
    </div>
  );
}

export default App;
