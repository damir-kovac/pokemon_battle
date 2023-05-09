import { Link } from "react-router-dom"

const Menu = ({newGame, isDone, handleNewOpponent}) => {
    return (
        <div className="menu_container">
            <h4>Menu</h4>
            <div className="buttons_container">
                <Link to="/" className="button" onClick={newGame}> Home </Link>
                <button type="button" className="button" onClick={newGame}> New Game </button>
                {isDone 
                    ? <button type="button" className="button" onClick={handleNewOpponent}> New opponent </button>
                    : <button type="button" className="button blured"> New opponent </button>
                }
            </div>
        </div>
    )   
}

export default Menu