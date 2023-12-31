import Banner from "./components/Banner";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="banner-wrapper">
        <Banner color="mtg-color-white" />
        <Banner color="mtg-color-blue" />
        <Banner color="mtg-color-black" />
        <Banner color="mtg-color-red" />
        <Banner color="mtg-color-green" />
      </div>

      <div className="calender-container">
        <Calendar />
      </div>

      <Footer />
    </div>
  );
}
