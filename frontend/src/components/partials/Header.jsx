import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1f2937", // Tailwind's gray-800
        color: "#fff",
        padding: "1.5rem 0",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        🧙‍♂️ LOTR Fan Club
      </h1>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.25rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                color: isActive ? "#fde68a" : "#fff",
                textDecoration: "none",
                fontWeight: 500,
              })}
            >
              {" 𖣂 "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#fde68a" : "#fff",
                textDecoration: "none",
                fontWeight: 500,
              })}
            >
              {" 𖣂 "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#fde68a" : "#fff",
                textDecoration: "none",
                fontWeight: 500,
              })}
            >
              {" 𖣂  "}
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
