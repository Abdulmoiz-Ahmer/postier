import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages";
import { Register } from "./pages";
import { PostBox } from "./pages";
import { Letter } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
