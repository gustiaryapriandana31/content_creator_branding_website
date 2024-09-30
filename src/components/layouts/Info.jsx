import { useState } from "react";
import Vector1 from "../../assets/vector-1.png";
import Vector2 from "../../assets/vector-2.png";
import CC1 from "../../assets/cc-shandy-luo3.png";
import CC2 from "../../assets/cc-shandy-luo4.png";

const Info = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="bg-sky-800">
        <div class="container text-slate-100 bg-gradient-to-tl from-gray-950 via-gray-950 to-sky-800 max-w-full py-16 px-8 sm:px-16 lg:px-64 xl:px-84 relative">
            <div class="shadow shadow-slate-50 p-8 rounded-lg">
            <img
                src={Vector1}
                alt="Vector"
                class="absolute top-16 left-0 w-12 h-72"
            />
            <img
                src={Vector2}
                alt="Vector"
                class="absolute top-28 right-0 w-24 h-72"
            />
            <p class="text-sm md:text-lg text-slate-100 w-full mx-auto font-semibold font-roboto italic">
                “Every single person comes away and says - wow that's a really slick
                experience, that was so easy to use. I feel so much less stressed as
                I now know we’re doing everything by the book.”
            </p>
            {isHovered ? (
                <div
                className="flex mt-6 gap-5 items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <img
                    src={CC1}
                    alt="Shandy Luo Image"
                    className="rounded-full w-10 h-10 md:w-24 md:h-16"
                />
                <div>
                    <h3 className="font-bold text-sm md:text-lg text-slate-300 group-hover:text-green-400">
                    Shandy Luo
                    </h3>
                    <p className="text-sm">Digital Creator</p>
                </div>
                </div>
            ) : (
                <div
                className="flex mt-6 gap-5 items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <img
                    src={CC2}
                    alt="Shandy Luo Image"
                    className="rounded-full w-10 h-10 md:w-16 md:h-16"
                />
                <div>
                    <h3 className="font-bold text-sm md:text-lg text-slate-300 group-hover:text-green-400">
                    Shandy Luo
                    </h3>
                    <p className="text-sm">Digital Creator</p>
                </div>
                </div>
            )}
            <p class="text-sm md:text-base text-slate-100 w-full mt-14 mx-auto font-semibold font-poppins">
                I feel so much less stressed ❤️ as I now know we’re doing everything
                by the content.”
            </p>
            </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-gray-950 via-gray-950 to-sky-800 px-6 md:px-40 py-10">
            <div class="px-6 py-12 font-sans rounded-tl-2xl rounded-br-3xl bg-gradient-to-r from-blue-800/50 to-gray-900 md:flex lg:gap-x-24 relative">
                <img
                src="img/vector-4.png"
                alt="Vector"
                class="absolute top-0 right-0 w-32 h-24 opacity-15"
                />
                <div class="md:basis-2/3">
                <h2 class="text-xl font-bold text-slate-100 lg:text-2xl z-20">
                    Make your AyoMain's Question
                </h2>
                <p class="mt-3 text-slate-300 md:text-base text-sm">
                    "I’m really hoping you’ll jump in and help boost the{" "}
                    <span className="italic text-green-400 font-ibm-plex-mono text-xl font-bold mx-3">Ayo Main</span> ‘Let’s Play!’ Don’t forget to share your score
                    and let us know how you tackled those questions. I’m counting on
                    you—can’t wait to see how you did!"
                </p>
                </div>
                <a
                href="/games"
                class="text-sm inline-block text-center z-10 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 mt-8 py-3 px-4 text-white font-bold rounded-md shadow-md md:px-8 md:max-w-max md:self-start md:basis-1/3 lg:text-lg lg:-mt-px"
                >
                Send yours
                </a>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#111827" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,117.3C672,117,768,171,864,165.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </main>
  );
};

export default Info;
