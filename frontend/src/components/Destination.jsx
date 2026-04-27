import { useNavigate } from "react-router-dom";

const destinations = [
  { id: 1, city: "Hyderabad", fare: 3500, description: "City of Nizams" },
  { id: 2, city: "Mumbai", fare: 4200, description: "City of Dreams" },
  { id: 3, city: "Chennai", fare: 3800, description: "Gateway of South India" },
];

function Destination() {
  const navigate = useNavigate();

  const handleSelect = (dest) => {
    navigate("/booking", { state: dest });
  };

  return (
    <div className="page">
      <h2>Available Destinations</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>City</th>
            <th>Description</th>
            <th>Fare (INR)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((dest) => (
            <tr key={dest.id}>
              <td>{dest.city}</td>
              <td>{dest.description}</td>
              <td>{dest.fare}</td>
              <td>
                <button onClick={() => handleSelect(dest)}>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Destination;
