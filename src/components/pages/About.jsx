import Header from "../layouts/Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";

const About = () => {
    return (
      <>
        <Header />
        <StairTransition />
        <PageTransition>
          <h1>About page</h1>
        </PageTransition>
      </>
    );
}

export default About;