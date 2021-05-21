/*Компонент с эфирами*/
import AetherItem from "./AetherItem/AetherItem";

const Aether = ({aetherList}) => {
    return (
        <div className="cards mt-3">
            <h4 className='text-info'>Эфир</h4>
            {aetherList.map(item => {
                return (
                    <AetherItem item={item} key={item.id}/>
                )
            })}
            </div>
    )
}

export default Aether;