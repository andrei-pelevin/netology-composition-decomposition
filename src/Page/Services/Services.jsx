/*Компонент с сервисами*/

import Aether from "./Aether/Aether";
import MapOf from "./MapOf/MapOf";
import TopVisits from "./TopVisits/TopVisits";
import TVProgram from "./TVProgram/TVProgram";
import Weather from "./Weather/Weather";

const Services = ({ topVisitList, tvList, aetherList, watherList }) => {
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="row">

                    <div className="col-4">
                        <Weather watherList={watherList}/> {/*Компонент с погодой*/}
                        <TopVisits topVisitList={topVisitList} /> {/*Компонент с поп. сервисами*/}
                    </div>

                    <div className="col-4">
                        <MapOf /> {/*Компонент с картой*/}
                        <TVProgram tvList={tvList} /> {/*Компонент с тв программой*/}
                    </div>

                    <div className="col-4">
                        <Aether aetherList={aetherList}/> {/*Компонент с эфирами*/}

                    </div>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    )
}

export default Services;