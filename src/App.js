import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./elements";
import { Login } from "./pages";
import { Register } from "./pages";
import { PostBox } from "./pages";
import { Letter } from "./pages";
import "./App.css";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PostBox />} />
          <Route path="/register" element={<Register />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
