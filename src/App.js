import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./elements";
// import { Login } from "./pages";
// import { Register } from "./pages";
// import { PostBox } from "./pages";
// import { Letter } from "./pages";
// import { ErrorPage } from "./pages";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppRoutes } from "./app-routes";
import "./App.css";
// import { Auth } from "./elements/Auth";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
