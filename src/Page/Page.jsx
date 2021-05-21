import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import Advertisement from './Advertisement/Advertisement';
import NavBlock from './NavBlock/NavBlock';
import NewsBlock from './NewsBlock/NewsBlock';
import SearchBlock from './SearchBlock/SearchBlock';
import Services from './Services/Services';

import data from '../data';


const Page = () => {
    return (
        <div className='container'>
            <NavBlock/> {/*Блок кнопок управления новостями.*/ } 
            <NewsBlock newsList={data.newsList}/> {/*Блок с новостями*/}
            <ButtonsBlock buttonsList={data.buttonsList}/> {/*Блок кнопок навигации*/}
            <SearchBlock/> {/*Блок поиска*/}
            <Advertisement advertisementUrl={data.advertisementUrl}/> {/*Блок с рекламой*/}

            <Services 
            topVisitList={data.topVisitList} 
            tvList={data.tvList} 
            aetherList={data.aetherList} 
            watherList={data.watherList}/>     {/*Блок с сервисами*/}        
        </div >
    )
}

export default Page;