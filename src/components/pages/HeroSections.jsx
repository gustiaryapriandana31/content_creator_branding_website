import Button from "../elements/Button";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { IoMdCloudUpload } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CC from "../../assets/cc-shandy-luo.png";

const HeroSection = () => {
    return (
      <main className="md:px-32 md:py-16 md:h-screen bg-gray-950">
        {/* Biodata */}
        <section className="flex md:flex-row flex-col">
          {/* Text */}
          <div className="text-center md:text-start order-2 md:order-1 opacity-90 md:basis-3/5 px-10 font-poppins">
            <h2 className="text-base text-white font-semibold hidden md:block">
              Shandy
            </h2>
            <h3 className="text-lg text-white font-semibold mt-10 md:mt-16 mb-2 font-audiowide md:block">
              Digital Creator
            </h3>
            <h3 className="text-4xl md:text-5xl tracking-tighter text-white font-semibold font-ibm-plex-mono md:block">
              WHATS UP GUYS
            </h3>
            <h3 className="text-3xl md:text-5xl tracking-tighter text-white font-semibold font-ibm-plex-mono md:block">
              Here <span className="text-green-400 font-bold">SHANDY LUO</span>
            </h3>
            <p className="text-sm text-white mt-4">
              I am Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod, blanditiis.
            </p>
            <p className="text-sm text-white">
              I am Lorem ipt consectetur adipisicing elit. Quod, blanditiis.
            </p>

            <div>
              <Button addedClassname="mt-8 mr-6 border border-green-400 hover:bg-green-500 hover:border-none rounded-full md:mb-0 mb-4">
                Ayo Main {">>"}
              </Button>
              <br className="md:hidden" />
              <Link to={"https://instagram.com"} target="_blank">
                <FaInstagram className="inline-block text-xl opacity-65 hover:opacity-100 mr-4 text-slate-500 hover:text-green-500" />
              </Link>
              <Link to={"https://twitter.com"} target="_blank">
                <FaTwitter className="inline-block text-xl opacity-65 hover:opacity-100 mr-4 text-slate-400 hover:text-green-400" />
              </Link>
              <Link to={"https://facebook.com"} target="_blank">
                <FaFacebook className="inline-block text-xl opacity-65 hover:opacity-100 mr-4 text-slate-500 hover:text-green-500" />
              </Link>
              <Link to={"https://tiktok.com"} target="_blank">
                <FaTiktok className="inline-block text-xl opacity-65 hover:opacity-100 mr-4 text-slate-400 hover:text-green-400" />
              </Link>
              <Link to={"http://www.youtube.com/@shandyluo"} target="_blank">
                <FaYoutube className="inline-block text-xl opacity-65 hover:opacity-100 mr-4 text-slate-400 hover:text-green-400" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity:1, transition:{delay:1.4, duration:0.2, ease:"easeInOut"}, }} className="md:order-2 order-1 md:basis-2/5 group rounded-full mix-blend-lighten pt-16">
            <img
              src={CC}
              alt="Shandy Luo Image"
              className="cc-image inline-block opacity-90 group-hover:opacity-100 mix-blend-darken"
            />
            <motion.svg className="absolute top-30 right-2 w-1/2 h-1/2" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], }} transition={{ duration: 40, repeat: Infinity, repeatType:"reverse" }} />
            </motion.svg>
          </motion.div>

        </section>

        <section className="opacity-70 text-sm md:text-lg mt-10 text-slate-500 font-bold px-10 grid grid-cols-2 md:grid-cols-4 gap-7">
          <div className="md:text-center">
            <h5>
              <FaInstagram className="inline-block -mt-1 mr-1 text-pink-500" />{" "}
              Instagram Follower
            </h5>
            <p className="mt-4 font-ibm-plex-mono text-lg md:text-2xl text-pink-500 font-semibold">
              482K
            </p>
          </div>
          <div className="text-end md:text-center">
            <h5>
              <FaYoutube className="inline-block -mt-1 mr-1 text-red-500" />{" "}
              Youtube Subscriber
            </h5>
            <p className="mt-4 font-ibm-plex-mono text-lg md:text-2xl text-red-500 font-semibold">
              1.15Jt
            </p>
          </div>
          <div className="md:text-center">
            <h5>
              <GiStarsStack className="inline-block -mt-1 mr-1 text-yellow-500" />{" "}
              Event's Guest Star
            </h5>
            <p className="mt-4 font-ibm-plex-mono text-lg md:text-2xl text-yellow-500 font-semibold">
              200+
            </p>
          </div>
          <div className="text-end md:text-center">
            <h5>
              <IoMdCloudUpload className="inline-block -mt-1 mr-2 text-blue-500" />
              Instagram Posts
            </h5>
            <p className="mt-4 font-ibm-plex-mono text-lg md:text-2xl text-blue-500 font-semibold">
              1.084
            </p>
          </div>
        </section>
      </main>
    );
};

export default HeroSection;
