import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/contact", name: "Contact", id: 3 },
        { path: "/login", name: "Login", id: 4 },
        { path: "/dashboard", name: "Dashboard", id: 5 }
    ];



    return (
        <nav>
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <RxCross2 />
                        : <RiMenu2Line className="" />
                }

            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default NavBar;