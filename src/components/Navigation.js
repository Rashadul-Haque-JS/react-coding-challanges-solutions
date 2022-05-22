import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: "20px 40px",
        backgroundColor: "#0D0D0D",
      }}
    >
      <Link style={{ color: "#fff" }} to="/">
        Event and State
      </Link>
      <Link style={{ color: "#fff" }} to="/conditional">
        Conditional
      </Link>
      <Link style={{ color: "#fff" }} to="/props">
        Props & Life Cycle
      </Link>
      <Link style={{ color: "#fff" }} to="/products">
        Products
      </Link>
    </nav>
  );
};

export default Nav;
