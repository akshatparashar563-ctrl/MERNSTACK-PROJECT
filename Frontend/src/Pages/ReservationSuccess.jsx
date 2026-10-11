import { Link, useLocation } from "react-router-dom";

const formatReservationDate = (date) => {
  if (!date) return "Date to be confirmed";

  const parsedDate = new Date(`${date.slice(0, 10)}T12:00:00`);
  if (Number.isNaN(parsedDate.getTime())) return "Date to be confirmed";

  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const formatReservationTime = (time) => {
  if (!time) return "Time to be confirmed";

  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) {
    return "Time to be confirmed";
  }

  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
};

const ReservationSuccess = () => {
  const { state } = useLocation();
  const reservation = state?.reservation;
  const isConfirmed = Boolean(reservation);

  return (
    <main className="successPage">
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

      <section
        className={`successCard${isConfirmed ? " isConfirmed" : " isUnconfirmed"}`}
        aria-labelledby="success-title"
      >
        <div className="successCardAccent" aria-hidden="true" />
        <div className="successCardContent">
          <div className="successMark" aria-hidden="true">
            {isConfirmed ? (
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="m8.5 16.5 5 5 10-11"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
              </svg>
            ) : (
              <span> A </span>
            )}
          </div>
          <p className="successEyebrow">
            {isConfirmed ? "Reservation confirmed" : "Your table is waiting"}
          </p>
          <h1 id="success-title">
            {isConfirmed ? (
              <>
                You&apos;re on
                <br />
                our guest list.
              </>
            ) : (
              <>
                Let&apos;s get
                <br />
                you a table.
              </>
            )}
          </h1>
          <p className="successMessage">
            {isConfirmed
              ? `We can’t wait to welcome you${reservation.firstName ? `, ${reservation.firstName}` : ""}. Your table details are ready below.`
              : "There isn’t a completed reservation to show yet. Choose a date and time and we’ll save you a seat."}
          </p>

          {isConfirmed ? (
            <>
              <div className="successDetails" aria-label="Reservation details">
                <div className="successDetail">
                  <span className="successDetailLabel">Your date</span>
                  <strong>
                    {formatReservationDate(reservation.reservationDate)}
                  </strong>
                </div>
                <div className="successDetail">
                  <span className="successDetailLabel">Your time</span>
                  <strong>
                    {formatReservationTime(reservation.reservationTime)}
                  </strong>
                </div>
                <div className="successDetail">
                  <span className="successDetailLabel">Your party</span>
                  <strong>
                    {reservation.partySize}{" "}
                    {Number(reservation.partySize) === 1 ? "guest" : "guests"}
                  </strong>
                </div>
              </div>
              {reservation.email && (
                <p className="successEmail">
                  Reservation made with <strong>{reservation.email}</strong>
                </p>
              )}
            </>
          ) : (
            <div className="successEmptyNote">
              Your booking details will appear here after your reservation is
              successfully submitted.
            </div>
          )}

          <div className="successActions">
            <Link
              className="successPrimaryAction"
              to={isConfirmed ? "/" : "/#reservation"}
            >
              {isConfirmed ? "Back to the restaurant" : "Make a reservation"}
              <span aria-hidden="true">→</span>
            </Link>
            {isConfirmed && (
              <Link className="successSecondaryAction" to="/#reservation">
                Book another table
              </Link>
            )}
          </div>
        </div>
        <div className="successCardFooter">
          <span>AKSHAT RESTAURANT</span>
          <span>Nayapura · Kolar Road · Bhopal</span>
        </div>
      </section>

      <p className="successPageNote">
        Made for sharing, served with a little extra love.
      </p>
    </main>
  );
};

export default ReservationSuccess;
