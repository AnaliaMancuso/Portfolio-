import { useEffect, useRef } from "react";
import "./homeComponent.css";

import Typed from "typed.js";

const HomeComponent = () => {
  const el = useRef(null);
  const typed = useRef(Typed);
  useEffect(() => {
    const options = {
      strings: [
        "<p>Hi, Welcome to my Portfolio!</p> ",
        "<p>I am Analía Mancuso Negreira, Front-End Software Engineer in React</p>",
      ],
      typeSpeed: 70,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="home__container" id="top">
      <div className="home__text">
        <div ref={el}></div>
      </div>
      <div className="home-img__bg">
        <div className="home__img"></div>
      </div>
    </div>
  );
};
export default HomeComponent;
