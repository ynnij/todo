import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TodoMain from "./page/TodoMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
