import style from './bg.css';
import HomeComponent from '../homeComponent/HomeComponent';
import ProyectsContainer from '../proyectsContainer/ProyectsContainer';

const BackgroundComponent = () => {
    return (
        <div className="bg-component__container">
            <div className="bg-circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <div className="circle-5"></div>
                <div className="circle-6"></div>
                <div className="circle-7"></div>
            </div>
            <HomeComponent/> 
            <ProyectsContainer/>
        </div>
    )
}
export default BackgroundComponent;