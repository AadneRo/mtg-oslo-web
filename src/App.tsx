import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}
