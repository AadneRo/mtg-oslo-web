import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "../styles.css";

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="banner-wrapper">
        <Banner color="mtg-color-white" />
        <Banner color="mtg-color-blue" />
        <Banner color="mtg-color-black" />
        <Banner color="mtg-color-red" />
        <Banner color="mtg-color-green" />
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
     </div>

      <Footer />
    </div>
  );
}

export default MainPage;
