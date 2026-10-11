const About = () => {
  return (
    <section className="aboutSection" id="about" aria-labelledby="about-title">
      <div className="aboutImageWrap">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
          alt="A beautifully served meal at a warmly lit restaurant"
          loading="lazy"
        />
        <span className="aboutImageNote">Good food. Good company.</span>
      </div>
      <div className="aboutCopy">
        <p className="sectionEyebrow">A place to gather</p>
        <h2 id="about-title">Come for the food. Stay for the feeling.</h2>
        <p>
          We believe the best meals are the ones shared. Settle in for generous
          favorites, freshly prepared food, and an easygoing welcome every time
          you visit.
        </p>
        <a className="textLink" href="#services">
          What makes us special <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default About;
