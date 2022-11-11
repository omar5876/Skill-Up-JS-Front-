import { Provider } from "react-redux";
import AppRouter from "./Router/AppRouter";
import store from "./app/store";
import Footer from "./Components/Global/Footer/Footer";
import Header from "./Components/Global/Header/Header";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Provider store={store}>
        <Router>
          <Header />
          <div style={{ flex: 1 }}>
            <AppRouter />
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
