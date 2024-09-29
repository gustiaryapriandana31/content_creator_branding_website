import {useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdEventNote, MdLocationPin } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FcIdea } from "react-icons/fc";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import CC from "../../assets/poster.png";
 
const NextAgenda = () => {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <main className="mt-12 overflow-hidden">
        <Accordion open={open === 1} className="mb-2 rounded-3xl border border-blue-gray-100 px-4">
            <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors`}>
                <div className={`flex flex-row items-center w-full ${open === 1 ? "text-green-600" : "text-white"}`}>
                    <h2 className="flex-auto text-start"><span className="text-sm mr-4">Wed, 02 Oct '24</span>Next Seminar and Talkshow IT Festival Polsri</h2>
                    <MdEventNote className="block text-2xl flex-initial text-end w-32 "/>
                </div>
            </AccordionHeader>
            <AccordionBody className={`text-base font-normal ${open === 1 ? "visible" : "invisible"}`}>
                <main className="flex flex-col md:flex-row items-center gap-10 group">
                    <div className="order-2 md:order-1 space-y-2 text-white/90 border-t border-gray-400">
                        <p className="">Today, I will be hosting an event with the theme <strong className="text-yellow-400">"Optimizing Digital Content for Effective Learning"</strong>. This event will discuss the challenges and opportunities for us to have the chance to become digital creators who contribute to the field of education and, of course, influence many people to stay motivated in learning and creating.
                        </p>

                        <ul className="list-inside">
                            <li><strong><FaCalendarDays className="inline -mt-1 mr-2 text-orange-400"/> Day : </strong>Sunday</li>
                            <li><strong><IoMdTime className="inline -mt-1 mr-2 text-blue-400"/> Time : </strong>13:00 PM - finished</li>
                            <li><strong><FcIdea className="inline -mt-1 mr-2 text-yellow-400"/> Topic : </strong>Digital Educational Contents</li>
                            <li><strong><MdLocationPin className="inline -mt-1 mr-3 text-red-400"/>Location : </strong>Graha Pendidikan Politeknik Universitas Sriwijaya</li>
                        </ul>
                        <p className="italic font-poppins text-sm">
                        Don't miss this opportunity to learn directly from experts in the field and gain the latest insights on how to build and maintain a loyal audience.
                        </p>
                        <Link target="blank" to="https://www.instagram.com/p/C-sz2EDTpVg/?igsh=MWtndW9rdnpnZ2phdw==" className="text-white block border border-green-400 hover:font-bold hover:bg-green-600 hover:border-none p-1 text-sm w-36 text-center rounded-xl">See the poster <LuArrowUpRight className="inline -mt-1 ml-1 text-white"/></Link>
                    </div>
                    <img src={CC} alt="Event's Poster" className="order-1 md:order-2 block h-80 rounded-xl group-hover:shadow-lg group-hover:shadow-green-300 group-hover:-translate-y-2 group-hover:-translate-x-2"/>
                </main>
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} className="mb-2 rounded-3xl border border-blue-gray-100 px-4">
            <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors`}>
                <div className={`flex flex-row items-center w-full ${open === 2 ? "text-green-600" : "text-white"}`}>
                    <h2 className="flex-auto text-start"><span className="text-sm mr-4">Mon, 16 Sep '24</span>Seminar and Talkshow IT Festival Polsri</h2>
                    <MdEventNote className="block text-2xl flex-initial text-end w-32 "/>
                </div>
            </AccordionHeader>
            <AccordionBody className={`text-base font-normal ${open === 2 ? "visible" : "invisible"}`}>
                <main className="flex flex-col md:flex-row items-center gap-10 group">
                    <div className="order-2 md:order-1 space-y-2 text-white/90 border-t border-gray-400">
                        <p className="">Today, I will be hosting an event with the theme <strong className="text-yellow-400">"Optimizing Digital Content for Effective Learning"</strong>. This event will discuss the challenges and opportunities for us to have the chance to become digital creators who contribute to the field of education and, of course, influence many people to stay motivated in learning and creating.
                        </p>

                        <ul className="list-inside">
                            <li><strong><FaCalendarDays className="inline -mt-1 mr-2 text-orange-400"/> Day : </strong>Sunday</li>
                            <li><strong><IoMdTime className="inline -mt-1 mr-2 text-blue-400"/> Time : </strong>13:00 PM - finished</li>
                            <li><strong><FcIdea className="inline -mt-1 mr-2 text-yellow-400"/> Topic : </strong>Digital Educational Contents</li>
                            <li><strong><MdLocationPin className="inline -mt-1 mr-3 text-red-400"/>Location : </strong>Graha Pendidikan Politeknik Universitas Sriwijaya</li>
                        </ul>
                        <p className="italic font-poppins text-sm">
                        Don't miss this opportunity to learn directly from experts in the field and gain the latest insights on how to build and maintain a loyal audience.
                        </p>
                        <Link target="blank" to="https://www.instagram.com/p/C-sz2EDTpVg/?igsh=MWtndW9rdnpnZ2phdw==" className="text-white block border border-green-400 hover:font-bold hover:bg-green-600 hover:border-none p-1 text-sm w-36 text-center rounded-xl">See the poster <LuArrowUpRight className="inline -mt-1 ml-1 text-white"/></Link>
                    </div>
                    <img src={CC} alt="Event's Poster" className="order-1 md:order-2 block h-80 rounded-xl group-hover:shadow-lg group-hover:shadow-green-300 group-hover:-translate-y-2 group-hover:-translate-x-2"/>
                </main>
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} className="mb-2 rounded-3xl border border-blue-gray-100 px-4">
            <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors`}>
                <div className={`flex flex-row items-center w-full ${open === 3 ? "text-green-600" : "text-white"}`}>
                    <h2 className="flex-auto text-start"><span className="text-sm mr-4">Mon, 16 Sep '24</span>Seminar and Talkshow IT Festival Polsri</h2>
                    <MdEventNote className="block text-2xl flex-initial text-end w-32 "/>
                </div>
            </AccordionHeader>
            <AccordionBody className={`text-base font-normal ${open === 3 ? "visible" : "invisible"}`}>
                <main className="flex flex-col md:flex-row items-center gap-10 group">
                    <div className="order-2 md:order-1 space-y-2 text-white/90 border-t border-gray-400">
                        <p className="">Today, I will be hosting an event with the theme <strong className="text-yellow-400">"Optimizing Digital Content for Effective Learning"</strong>. This event will discuss the challenges and opportunities for us to have the chance to become digital creators who contribute to the field of education and, of course, influence many people to stay motivated in learning and creating.
                        </p>

                        <ul className="list-inside">
                            <li><strong><FaCalendarDays className="inline -mt-1 mr-2 text-orange-400"/> Day : </strong>Sunday</li>
                            <li><strong><IoMdTime className="inline -mt-1 mr-2 text-blue-400"/> Time : </strong>13:00 PM - finished</li>
                            <li><strong><FcIdea className="inline -mt-1 mr-2 text-yellow-400"/> Topic : </strong>Digital Educational Contents</li>
                            <li><strong><MdLocationPin className="inline -mt-1 mr-3 text-red-400"/>Location : </strong>Graha Pendidikan Politeknik Universitas Sriwijaya</li>
                        </ul>
                        <p className="italic font-poppins text-sm">
                        Don't miss this opportunity to learn directly from experts in the field and gain the latest insights on how to build and maintain a loyal audience.
                        </p>
                        <Link target="blank" to="https://www.instagram.com/p/C-sz2EDTpVg/?igsh=MWtndW9rdnpnZ2phdw==" className="text-white block border border-green-400 hover:font-bold hover:bg-green-600 hover:border-none p-1 text-sm w-36 text-center rounded-xl">See the poster <LuArrowUpRight className="inline -mt-1 ml-1 text-white"/></Link>
                    </div>
                    <img src={CC} alt="Event's Poster" className="order-1 md:order-2 block h-80 rounded-xl group-hover:shadow-lg group-hover:shadow-green-300 group-hover:-translate-y-2 group-hover:-translate-x-2"/>
                </main>
            </AccordionBody>
        </Accordion>
    </main>
  );
}

export default NextAgenda;