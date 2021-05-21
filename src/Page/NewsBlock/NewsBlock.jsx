/*Компонент с блоком новостей*/

import Adv from './Adv'
import News from './News/News'

const NewsBlock = ({newsList}) => {

    return (
        <div className="row">
                <div className="col-2"></div>
                <div className="col-7">
                    <News newsList={newsList} />
                </div>

                <Adv/>
            </div>
    )
}

export default NewsBlock;