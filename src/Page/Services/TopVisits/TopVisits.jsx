/*Компонент с популярными сервисами*/
import TopVisitItem from "./TopVisitItem/TopVisitItem"

const TopVisits = ({topVisitList}) => {
    return (
        <div className="cards mt-3 pb-5">
            <h4 className='text-info'>Посещаемое</h4>
            {topVisitList.map(item => {
                return (
                    <TopVisitItem item={item} key={item.id}/>
                )
            })}
           

        </div>
    )
}

export default TopVisits;