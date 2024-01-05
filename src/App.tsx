import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/schedule">
          <div className="calender-container">
            <Calendar />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
}
