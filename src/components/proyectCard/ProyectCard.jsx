import "./proyectCard.css";
import { GoBrowser } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const ProyectCard = ({ title, repository, deploy, classes }) => {
  return (
    <div className="proyect-card__container">
      <div className={`bg-card ` + classes}></div>
      <h4>{title}</h4>
      <a
        className="proyect-card__container-links"
        href={repository}
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
        Repository
      </a>
      <a
        className="proyect-card__container-links"
        href={deploy}
        target="_blank"
        rel="noreferrer"
      >
        <GoBrowser />
        Live
      </a>
    </div>
  );
};
export default ProyectCard;
