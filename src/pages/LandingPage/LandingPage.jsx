import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Hero/>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
