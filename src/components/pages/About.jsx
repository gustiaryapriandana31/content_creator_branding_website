import Header from "../layouts/Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";
import CC from "../../assets/cc-shandy-luo4.png";
import CC2 from "../../assets/cc-shandy-luo3.png";


const About = () => {
    return (
      <>
        <Header />
        <StairTransition />
        <PageTransition>
          <section className="md:pt-5 p-4 bg-gray-950 min-h-screen text-white">
            <div className="md:p-12 p-3">
              <h2 className="mt-7 md:mb-6 mb-3 text-center md:text-6xl text-3xl font-bold text-green-600">
                About Shandy Luo
              </h2>
              {/* Paragraph 1 */}
              <div className="mt-20 md:mt-10 transition-all duration-100 md:p-3 md:mb-0 mb-7 flex md:flex-row items-center flex-col md:gap-20">
                <img
                  src={CC2}
                  alt="Shandy Luo Image"
                  className="md:w-1/2 w-3/4 rounded-b-full shadow-lg shadow-orange-300 mb-8 md:mb-0"
                />
                <p className="text-start p-3 md:p-0">
                  Shandy Luo is a popular content creator and influencer known
                  for her vibrant personality and engaging presence on social
                  media platforms like TikTok and Instagram. She shares a
                  diverse range of content, including fashion, beauty tips,
                  lifestyle vlogs, and travel adventures, which resonate with
                  her audience and showcase her unique style. With her
                  creativity and authenticity, Shandy has cultivated a loyal
                  following, making her a prominent figure in the influencer
                  community.
                </p>
              </div>
              {/* Paragraph 2 */}
              <div className="transition-all duration-100 md:p-3 md:mb-0 mb-7 flex md:flex-row items-center flex-col md:gap-7">
                <iframe
                  className="basis-1/2 order-2 md:p-0 px-30"
                  src="https://www.youtube.com/embed/mnnTH2xc5dU"
                  width="560"
                  height="315"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <p className="order-1 basis-1/2 text-start md:text-end p-3 md:p-0">
                  Shandy Luo began her career as a digital creator and
                  influencer, gaining popularity through engaging content on
                  platforms like TikTok and Instagram. Known for her relatable
                  and entertaining videos focused on lifestyle themes, humor,
                  and daily tips, she quickly attracted a large following. Her
                  consistency and creativity led to collaborations with various
                  brands, solidifying her position in the digital content
                  industry and making her a recognizable figure among Indonesian
                  youth
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="transition-all duration-100 md:p-3 md:mt-12 mb-7 mx-auto md:gap-7">
                <img
                  src={CC}
                  alt="Shandy Luo Image"
                  className="block mx-auto md:w-1/2 w-3/4 rounded-t-full shadow-lg shadow-yellow-300 mb-8 md:mb-0"
                />
                <p className="italic font-poppins text-lg md:text-xl capitalize shadow-sm shadow-gray-600 p-4 rounded-md text-center text-yellow-400 font-bold mt-3">
                  "Stay true to yourself"
                  <span className="block ml-3 not-italic text-slate-400 font-ibm-plex-mono text-sm">
                    Shandy Luo
                  </span>
                </p>
              </div>
            </div>
          </section>
        </PageTransition>
      </>
    );
}

export default About;