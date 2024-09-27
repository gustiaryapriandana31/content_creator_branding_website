import FormContact from '../layouts/FormContact';
import CC from "../../assets/shandy-luo-frame.png";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
      <main className="bg-gray-900 min-h-screen p-10">
        <h2 className="my-5 md:mb-6 mb-3 text-center md:text-5xl text-3xl font-bold text-green-600 font-audiowide">
          Let's Connect with me
        </h2>
        <div className="flex flex-row gap-5 items-center ">
          <div className="basis-1/2 shadow-md rounded-lg">
            <img src={CC} alt="Shandy Luo Image" className='mx-auto w-3/4 h-1/2 rounded-full border border-green-500 p-2'/>
          </div>
          <div>
            <BiMessageRoundedDetail className="text-6xl text-green-500" />
            <FaEnvelope className="text-6xl text-green-500" />
          </div>
          <FormContact />
        </div>
      </main>
    );
}

export default Contact;