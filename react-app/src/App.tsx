import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CuisinePage } from "./components";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<CuisinePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
