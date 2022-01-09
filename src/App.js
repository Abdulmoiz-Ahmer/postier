import { BrowserRouter } from "react-router-dom";
import { Layout } from "./elements";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppRoutes } from "./app-routes";
import "./App.css";

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
