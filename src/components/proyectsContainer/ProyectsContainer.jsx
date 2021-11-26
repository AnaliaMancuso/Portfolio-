import data from '../../data/proyects.json';
import ProyectCard from '../proyectCard/ProyectCard';

const ProyectsContainer = () => {
    return (
        <div>
            <h2 className="proyect-container__title">Welcome to my Portfolio</h2>
            <div className="proyect-container__container">
                {data.map((index)=> {
                    return (
                        <ProyectCard
                            classes={index.proyect.classes}
                            title={index.proyect.name}
                            repository={index.proyect.repository}
                            deploy={index.proyect.deploy}
                        />
                    )
                })}
            </div>
        </div>
        
    )
}
export default ProyectsContainer;
