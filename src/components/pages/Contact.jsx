import FormContact from '../layouts/FormContact';
import CC from "../../assets/cc-shandy-luo2.png";
import { TiBusinessCard } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
    return (
      <main className="bg-gray-900 min-h-screen p-10">
        <h2 className="my-3 md:mb-10 text-center md:text-5xl text-3xl font-bold text-green-600 font-audiowide">
          Let's Connect with me
        </h2>
        <section className="relative flex flex-col md:flex-row gap-8 items-center">
          <img src={CC} alt="Shandy Luo Image" className='absolute md:top-3 top-6 md:left-56 right-0 w-36 h-36 rounded-full shadow-md shadow-green-200'/>
          <div className="basis-2/5 pt-20">
            <div className='md:float-right pt-16 p-5 md:w-3/4 shadow-md shadow-gray-800 rounded-lg grid grid-cols-1 gap-5 text-white font-poppins'>
              <aside className='flex md:flex-row'>
                <TiBusinessCard className="text-2xl mr-5 mt-2 text-green-500" />
                <div className='text-sm'>
                  <p>Business Inquire</p>
                  <p>Instagram @busynesshandy</p>
                </div>
              </aside>
              <aside className='flex md:flex-row'>
                <FaPhoneAlt className="text-2xl mr-5 mt-2 text-green-500" />
                <div className='text-sm'>
                  <p>Our Management</p>
                  <p>(+62)890 8715 6771</p>
                </div>
              </aside>
              <aside className='flex md:flex-row'>
                <MdOutlineAttachEmail className="text-2xl mr-5 mt-2 text-green-500" />
                <div className='text-sm'>
                  <p>Email</p>
                  <p>managementshandy@gmail.com</p>
                </div>
              </aside>
              <aside className='flex md:flex-row'>
                <MdLocationPin className="text-3xl mr-5 mt-2 text-green-500" />
                <div className='text-sm'>
                  <p>Address</p>
                  <p>Digital Creator Corner, CC Team 23778, Jakarta</p>
                </div>
              </aside>
            </div>
          </div>
          
          <FormContact />
        </section>
      </main>
    );
}

export default Contact;