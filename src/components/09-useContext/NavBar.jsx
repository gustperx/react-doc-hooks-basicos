import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "text-violet-700" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "text-violet-700" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "text-violet-700" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
