import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";


function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
