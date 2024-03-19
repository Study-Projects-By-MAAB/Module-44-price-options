import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/contact", name: "Contact", id: 3 },
    { path: "/login", name: "Login", id: 4 },
    { path: "/dashboard", name: "Dashboard", id: 5 },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open === true ? <RxCross2 /> : <RiMenu2Line className="" />}
      </div>
      <ul
        className={`md:flex md:static duration-1000 absolute 
      ${open ? "top-16" : "-top-60"}
        bg-yellow-200 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
