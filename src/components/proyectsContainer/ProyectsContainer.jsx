import data from '../../data/proyects.json';
import ProyectCard from '../proyectCard/ProyectCard';
import { useState } from 'react';
import './proyectContainer.css';

const ProyectsContainer = () => {
    const dataTen = data.slice(0, 9);
    const [proyects, setProyects]= useState(dataTen)
    const seeMore=()=>{
        setProyects(data)
    }
    const seeLess=()=>{
        setProyects(dataTen)
    }
    console.log(data)
    
    return (
        <div id="proyects">
            <div className="container-title">
                <h2 className="container__title">Proyects</h2>
            </div>
            
            <div className="proyect-container__container">
                {proyects.map((index)=> {
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
            <div className='proyect-container-button'>
               {proyects!== data? (<button className="proyect-container__button" onClick={seeMore}>See more</button>):
            (<button className="proyect-container__button" onClick={seeLess}>See less</button>)} 
            </div>
            
            
        </div>
        
    )
}
export default ProyectsContainer;
