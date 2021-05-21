/*Компонент с блоком поиска*/
import Logo from './Logo/Logo';
import Search from './Search/Search';

const SearchBlock = () => {

    return (
        <div className="row">
                <Logo/>
                <Search/>
                <div className="col-1"></div>
            </div>
    )
}

export default SearchBlock;