import Router from "./pages/router";
import { BrowserRouter as BRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BRouter>
        <Router />
      </BRouter>
    </div>
  );
}

export default App;
