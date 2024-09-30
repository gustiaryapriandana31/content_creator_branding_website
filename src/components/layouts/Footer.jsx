import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="grid lg:grid-cols-4 gap-7 sm:grid-cols-1 p-20">
        <Link to="/" className="block">
          {/* <img src={logo} alt="Logo Image" className="w-24 h-12" /> */}
          <a
            href="/"
            className="inline-block p-4 text-2xl text-green-400 font-audiowide italic capitalize font-semibold"
          >
            Shandy
          </a>{" "}
        </Link>
        <div>
          <p className="text-xl font-bold font-roboto text-slate-600 py-2 uppercase">
            Link
          </p>
          <div className="grid grid-cols-2 gap-x-16">
            <Link to="/" className="block my-4 list-none">
              Home
            </Link>
            <Link to="/about" className="block my-4 list-none">
              About
            </Link>
            <Link to="/travels" className="block my-4 list-none">
              Travels
            </Link>
            <Link to="/agenda" className="block my-4 list-none">
              Agenda
            </Link>
            <Link to="/games" className="block my-4 list-none">
              Games !!
            </Link>
          </div>
        </div>
        <div className="mb-4 md:mx-16 md:mb-0">
          <h2 className="text-xl font-bold font-roboto text-slate-600 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">shandyluolisa@gmail.com</p>
          <Link
            to="https://api.whatsapp.com/send/?phone=6282281963857&text&type=phone_number&app_absent=0"
            className="text-[16px] my-4"
          >
            0822 8196 3857
          </Link>
        </div>
      </div>
      <div className="text-center text-sm py-4 bg-gray-950 border-t-2 border-gray-700 md:text-lg">
        <p className="md:w-full w-3/4 mx-auto font-ibm-plex-mono text-sm">
          &copy; 2024 - Shandy Luolisa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
