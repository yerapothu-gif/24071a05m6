import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/contact">Contact</Link><br />
      <Link to="/login">Login</Link>
    </nav>
  );
}
export default Navbar;