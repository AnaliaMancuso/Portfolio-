import './proyectCard.css';
import {useState, useEffect} from 'react';

const ProyectCard = ({title, repository, deploy, classes}) => {
    const [clicked, setClicked] = useState(false);
    const [deployed, setDeployed] = useState(false);

    useEffect(() => {
        if (clicked) {
        window.location.assign(repository);
        }
    });
    useEffect(() => {
        if (deployed) {
        window.location.assign(deploy);
        }
    });

    return (
        <div className="proyect-card__container">
            <div className={`bg-card `+  classes}></div>
            <h3>Proyect Title: {title}</h3>
            <p  onClick={() => setClicked(true)}> GitHub</p>
            <p onClick={() => setDeployed(true)}> Site</p>
        </div>
    )
}
export default ProyectCard;