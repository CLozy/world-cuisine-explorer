import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CuisinePage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CuisinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
