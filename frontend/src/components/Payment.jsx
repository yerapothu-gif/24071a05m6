import { useLocation } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const { state } = useLocation();
  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [upi, setUpi] = useState("");
  const [paid, setPaid] = useState(false);

  if (!state) {
    return <p>No booking found. <a href="/destination">Go back</a></p>;
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  if (paid) {
    return (
      <div className="page">
        <h2>Payment Successful</h2>
        <p>Destination: {state.city}</p>
        <p>Passenger: {state.name}</p>
        <p>Passengers: {state.passengers}</p>
        <p>Amount Paid: {state.total} INR</p>
        <a href="/">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Payment</h2>
      <p>Destination: {state.city}</p>
      <p>Passenger: {state.name}</p>
      <p>Total Amount: {state.total} INR</p>

      <form onSubmit={handlePayment}>
        <div>
          <label>Payment Method</label><br />
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {method === "card" && (
          <div>
            <label>Card Number</label><br />
            <input
              type="text"
              maxLength="16"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
        )}

        {method === "upi" && (
          <div>
            <label>UPI ID</label><br />
            <input
              type="text"
              placeholder="example@upi"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
export default Payment;
