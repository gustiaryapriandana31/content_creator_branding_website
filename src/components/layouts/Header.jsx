import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Travel",
    path: "/travels",
  },
  {
    name: "Agenda",
    path: "/agenda",
  },
  {
    name: "Games",
    path: "/games",
  },
];


const Header = () => {
  const location = useLocation().pathname;
    const [showMenu, setShowMenu] = useState(false);
    return (
      <nav className="flex flex-col md:flex-row md:items-center md:px-36 py-6 px-10 text-white bg-gray-900">
        <a href="/" className="inline-block p-4 text-xl text-green-400 font-audiowide italic capitalize font-semibold">
            Shandy
        </a>

        {showMenu ? (
          <IoCloseSharp
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-4xl absolute right-8 top-10"
          />
        ) : (
          <CgMenuHotdog
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-4xl absolute right-8 top-10"
          />
        )}
        <ul
          className={`z-10 p-4 flex flex-col md:flex-row md:justify-end justify-center md:gap-12 gap-6 items-center text-slate-800 font-semibold absolute md:static md:rounded-none bg-gray-900 rounded-tl-3xl rounded-bl-[3rem] md:w-full w-1/2 right-0 transition-all duration-400 ease-in ${
            showMenu
              ? "top-16 opacity-100"
              : "top-[-500px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`${
                link.path === location
                  ? "md:border-b-2 md:border-green-500 text-green-500 md:text-white md:rounded-xl md:p-3 md:my-0"
                  : "border-none text-white/50"
              } capitalize font-medium hover:text-green-500 md:hover:scale-110 transition-all `}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    );
}

export default Header;