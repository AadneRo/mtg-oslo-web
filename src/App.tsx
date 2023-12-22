import Banner from "./components/Banner";
import Header from "./components/Header";
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

      <div className="calender-placeholder"></div>
    </div>
  );
}
