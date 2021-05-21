/*Компонент с тв программой*/
import TVProgramItem from './TVProgramItem/TVProgramItem'

const TVProgram = ({tvList}) => {
    return (
        <div className="cards mt-3">
            <div><h4 className='text-info'>Телепрограмма</h4>
            {tvList.map(item => {
                return (
                    <TVProgramItem item={item} key={item.id}/>
                )
            })}

            </div>
        </div>

    )
}


export default TVProgram;