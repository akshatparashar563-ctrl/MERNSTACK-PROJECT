import { useState } from "react";

const navigationLinks = [
  { label: "Home", target: "heroSection" },
  { label: "About Us", target: "about" },
  { label: "Services", target: "services" },
  { label: "Team", target: "team" },
  { label: "Reservation", target: "reservation" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="siteNav"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="navContainer">
        <a className="navBrand" href="#heroSection" onClick={closeMenu}>
          <span className="navBrandMark" aria-hidden="true">
            A
          </span>
          <span className="navBrandText">
            <span className="navBrandName">Akshat</span>
            <span className="navBrandCaption">Restaurant</span>
          </span>
        </a>

        <a className="navCta" href="#menu" onClick={closeMenu}>
          Our Menu
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="navToggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navMenu${menuOpen ? " isOpen" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, target }) => (
            <a
              className="navLink"
              href={`#${target}`}
              key={target}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
