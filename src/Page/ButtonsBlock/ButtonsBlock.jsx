
import NavButtons from './NavButtons/NavButtons'

const ButtonsBlock = ({buttonsList}) => {
    return (
        <div className="row mt-3">
                <div className="col-2"></div>
                <div className="col-8">
                    <NavButtons buttonsList={buttonsList}/>
                </div>
                <div className="col-2"></div>
            </div>
    )
}

export default ButtonsBlock;