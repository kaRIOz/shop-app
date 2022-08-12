import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavbarHeader from "./components/navbar/NavbarHeader";
import SinglePage from "./pages/SinglePage/SinglePage";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
