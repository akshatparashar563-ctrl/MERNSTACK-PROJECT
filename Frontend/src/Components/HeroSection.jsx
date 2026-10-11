const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <div className="heroContainer">
        <div className="heroContent">
          <p className="heroEyebrow">Good food, good company</p>
          <h1 className="heroTitle">Delicious food, made for sharing.</h1>
          <p className="heroDescription">
            Big, satisfying favorites, made fresh and served with a little
            extra love. Come hungry. Leave happy.
          </p>
          <div className="heroActions">
            <a className="heroButton heroButtonPrimary" href="#menu">
              Explore our menu
              <span aria-hidden="true">↗</span>
            </a>
            <a className="heroButton heroButtonSecondary" href="#reservation">
              Book a table
            </a>
          </div>
          <p className="heroNote">Freshly prepared · Always worth sharing</p>
        </div>

        <figure className="heroArtwork">
          <img
            className="heroImage"
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=85"
            alt="Juicy cheeseburger stacked with fresh lettuce and tomato"
            fetchPriority="high"
          />
          <figcaption className="heroImageCaption">
            <span className="heroCaptionMark" aria-hidden="true">✦</span>
            <span>
              <strong>Made fresh</strong>
              <small>Good food, no shortcuts</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;