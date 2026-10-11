import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="notFoundPage">
      <header className="successHeader">
        <Link className="successBrand" to="/" aria-label="Akshat Restaurant home">
          <span className="successBrandMark" aria-hidden="true">
            A
          </span>
          <span className="successBrandName">
            Akshat
            <small>Restaurant</small>
          </span>
        </Link>
        <span className="successHeaderNote">Good food. Good company.</span>
      </header>

      <section className="notFoundCard" aria-labelledby="not-found-title">
        <div className="notFoundArt" aria-hidden="true">
          <span className="notFoundFour">4</span>
          <span className="notFoundDish">
            <span>0</span>
          </span>
          <span className="notFoundFour">4</span>
        </div>
        <p className="successEyebrow">A little detour</p>
        <h1 id="not-found-title">This page isn’t on the menu.</h1>
        <p className="notFoundMessage">
          Looks like this page wandered off. Let’s get you back to the good
          stuff: fresh food, warm welcomes, and a table saved just for you.
        </p>
        <div className="successActions">
          <Link className="successPrimaryAction" to="/">
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link className="successSecondaryAction" to="/#reservation">
            Make a reservation
          </Link>
        </div>
        <div className="notFoundFooter">
          <span>AKSHAT RESTAURANT</span>
          <span>Nayapura · Kolar Road · Bhopal</span>
        </div>
      </section>

      <p className="successPageNote">
        We’ll keep your seat warm while you find your way back.
      </p>
    </main>
  );
};

export default NotFound;
