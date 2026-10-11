import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:4000/api/v1/reservation";

const Reservation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date();
  const minimumReservationDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60_000,
  )
    .toISOString()
    .slice(0, 10);
  const [reservation, setReservation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
    partySize: "2",
    specialRequest: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((currentReservation) => ({
      ...currentReservation,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const reservationDetails = {
        ...reservation,
        partySize: Number(reservation.partySize),
      };
      const response = await axios.post(API_URL, reservationDetails);
      toast.success("Reservation created successfully.");
      navigate("/success", {
        state: {
          reservation: response.data.reservation ?? reservationDetails,
        },
      });
    } catch (error) {
      const message =
        error.response?.data?.message ??
        "We could not create your reservation. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="reservationSection" id="reservation">
      <div className="reservationVideoWrap" aria-hidden="true">
        <video
          className="reservationVideo"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/videos/7008577/pexels-photo-7008577.jpeg"
        >
          <source
            src="https://videos.pexels.com/video-files/7008577/7008577-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="sectionEyebrow">Your table is waiting</p>
      <h2>Make room for something delicious.</h2>
      <p>Share your details and we’ll save you a seat.</p>

      <form className="reservationForm" onSubmit={handleSubmit}>
        <div className="reservationFields">
          <label className="reservationField">
            First name
            <input
              autoComplete="given-name"
              maxLength={50}
              name="firstName"
              onChange={handleChange}
              required
              value={reservation.firstName}
            />
          </label>
          <label className="reservationField">
            Last name
            <input
              autoComplete="family-name"
              maxLength={50}
              name="lastName"
              onChange={handleChange}
              required
              value={reservation.lastName}
            />
          </label>
          <label className="reservationField">
            Email
            <input
              autoComplete="email"
              name="email"
              onChange={handleChange}
              required
              type="email"
              value={reservation.email}
            />
          </label>
          <label className="reservationField">
            Phone
            <input
              autoComplete="tel"
              name="phone"
              onChange={handleChange}
              required
              type="tel"
              value={reservation.phone}
            />
          </label>
          <label className="reservationField">
            Date
            <input
              min={minimumReservationDate}
              name="reservationDate"
              onChange={handleChange}
              required
              type="date"
              value={reservation.reservationDate}
            />
          </label>
          <label className="reservationField">
            Time
            <input
              name="reservationTime"
              onChange={handleChange}
              required
              type="time"
              value={reservation.reservationTime}
            />
          </label>
          <label className="reservationField">
            Party size
            <input
              min="1"
              name="partySize"
              onChange={handleChange}
              required
              step="1"
              type="number"
              value={reservation.partySize}
            />
          </label>
          <label className="reservationField reservationFieldWide">
            Special request <span>(optional)</span>
            <textarea
              name="specialRequest"
              onChange={handleChange}
              rows="3"
              value={reservation.specialRequest}
            />
          </label>
        </div>
        <button
          className="heroButton heroButtonLight reservationSubmit"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Reserve a table"}
          <HiOutlineArrowNarrowRight aria-hidden="true" />
        </button>
      </form>
    </section>
  );
};

export default Reservation;
