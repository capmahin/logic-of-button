import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page from "./Pages/Page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page></Page>}></Route>
      </Routes>
    </div>
  );
}

export default App;
