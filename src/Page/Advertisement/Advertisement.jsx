/*Компонент с рекламой*/

const Advertisement = ({ advertisementUrl }) => {
    return (
        <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-8"><img
                src={advertisementUrl.url}
                alt=''
                style={{ width: '60.5vw', height: '20vh' }} />
            </div>
            <div className="col-2"></div>
        </div>
    )
}

export default Advertisement;
