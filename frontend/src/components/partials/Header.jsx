import { Outlet, Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <style>{`
      ul {
        list-style-type: '𖣂 ';
        list-style-position: inside;
        margin: 0;
        padding: 0;
      }
      li {
        display: inline;
        width: 100%;
      }
    `}</style>
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-2">🧙‍♂️ LOTR Fan Club</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
            >
              {" 𖣂 "}
              Home
            </NavLink>
          </li>{""}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
            >
              {" 𖣂 "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
            >{" 𖣂 "}
              Contact
              {" 𖣂 "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <br></br>
    </>
  );
}
export default Header;
