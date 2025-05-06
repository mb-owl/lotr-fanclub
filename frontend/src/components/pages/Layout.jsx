import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Content Outlet */}
      <main className="flex-grow p-6 bg-gray-50">
        {/* placeholder - Outlet  */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
