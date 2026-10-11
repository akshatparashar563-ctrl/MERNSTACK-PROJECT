const footerLinks = [
  { label: "Home", href: "#heroSection" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Reservation", href: "#reservation" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="footerContainer">
        <div className="footerMain">
          <a className="footerBrand" href="#heroSection" aria-label="Akshat Restaurant home">
            <span className="footerBrandMark" aria-hidden="true">
              A
            </span>
            <span>
              <strong>Akshat</strong>
              <small>Restaurant</small>
            </span>
          </a>

          <div className="footerDetails">
            <div className="footerDetail">
              <h2>Find us</h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nayapura%2C+Kolar+Road%2C+Bhopal"
                target="_blank"
                rel="noreferrer"
              >
                Nayapura, Kolar Road, Bhopal
              </a>
            </div>
            <div className="footerDetail">
              <h2>Opening hours</h2>
              <p>Daily, 10:00 AM–11:30 PM</p>
            </div>
          </div>

          <nav className="footerNav" aria-label="Footer navigation">
            {footerLinks.map(({ label, href }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footerBottom">
          <p>© {currentYear} Akshat Restaurant. All rights reserved.</p>
          <p>
            Website developed by <span>AKSHAT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
