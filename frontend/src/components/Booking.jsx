import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [passengers, setPassengers] = useState(1);

  if (!state) {
    return <p>No destination selected. <a href="/destination">Go back</a></p>;
  }

  const total = state.fare * passengers;

  const handlePay = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { name, passengers, total, city: state.city } });
  };

  return (
    <div className="page">
      <h2>Booking - {state.city}</h2>
      <p>Fare per person: {state.fare} INR</p>
      <form onSubmit={handlePay}>
        <div>
          <label>Passenger Name</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Passengers</label><br />
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            required
          />
        </div>
        <p>Total: {total} INR</p>
        <button type="submit">Proceed to Pay</button>
      </form>
    </div>
  );
}
export default Booking;
