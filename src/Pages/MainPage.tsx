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

      <div className="calender-container">
        <Calendar />
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
