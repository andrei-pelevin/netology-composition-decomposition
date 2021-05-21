/*Компонент с новостями*/
import NewsItem from "./NewsItem/NewsItem";

const News = ({ newsList }) => {
    return (
        <ul className="list-group">
            {newsList.map(item => <NewsItem key={item.id} note={item}/>)}
        </ul>
    )
}


export default News;