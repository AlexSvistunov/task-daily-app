import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__info">
            <h1 className="hero__title">
              Do your tasks <br></br> <span>quickly</span> and <span>easy</span>
            </h1>
            <span className="hero__subtitle">
              Your tasks, your rules, our support.
            </span>
            <Link className="hero__link">Get started</Link>
          </div>
          <div className="hero__images">
            <img
              className="hero__img"
              src="/src/assets/images/hero-img.png"
            ></img>
          </div>
        </div>

        <ul className="hero__cards list-reset">
          <li className="hero__card">
            <h3 className="hero__card-title">Easy to use</h3>

            <p className="hero__card-text">
              Simplified chore lists with intuitive layout for seamless daily
              planning
            </p>
          </li>

          <li className="hero__card">
            <h3 className="hero__card-title">Full Support</h3>

            <p className="hero__card-text">
              Empower your productivity with personalized task management guided
              by your rules
            </p>
          </li>

          <li className="hero__card">
            <h3 className="hero__card-title">Never feel lost</h3>

            <p className="hero__card-text">
              Stay seamlessly connected to your tasks anytime, anywhere with our
              sync mobile app
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
