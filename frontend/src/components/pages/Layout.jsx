import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sage-100 via-slate-100 to-stone-100">
      <Header />

      {/* Content Outlet */}
      <main className="flex-grow flex items-center justify-center">
        {/* placeholder - Outlet  */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
