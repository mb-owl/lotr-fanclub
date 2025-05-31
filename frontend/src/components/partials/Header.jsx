import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-sage-100 via-slate-100 to-stone-100 text-slate-800 py-6 shadow-md border-b border-slate-200">
      <div className="w-full max-w-xl flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-serif font-normal mb-2 text-gray-900 tracking-wide drop-shadow-sm">
          🧙‍♂️ The Society of the One Ring:
        </h1>
        <h2 className="text-lg md:text-xl font-serif font-normal mb-4 text-gray-800 tracking-wide drop-shadow-sm">
          A Lord of the Rings Fan Club
        </h2>
        <nav className="w-full">
          <ul className="flex flex-row justify-center items-center gap-6 list-none p-0 m-0">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors font-normal px-3 py-1 rounded-md ${
                    isActive
                      ? "bg-sage-200 text-sage-900 shadow"
                      : "text-slate-700 hover:bg-sage-100 hover:text-sage-900"
                  }`
                }
              >
                {" 𖣂 "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors font-normal px-3 py-1 rounded-md ${
                    isActive
                      ? "bg-sage-200 text-sage-900 shadow"
                      : "text-slate-700 hover:bg-sage-100 hover:text-sage-900"
                  }`
                }
              >
                {" 𖣂 "}
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors font-normal px-3 py-1 rounded-md ${
                    isActive
                      ? "bg-sage-200 text-sage-900 shadow"
                      : "text-slate-700 hover:bg-sage-100 hover:text-sage-900"
                  }`
                }
              >
                {" 𖣂 "}
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
