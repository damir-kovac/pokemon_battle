import { Link } from "react-router-dom";
import pokemonLogo from "../assets/Pokemon-logo.png"

const HomePage = () =>{
    return (
        <div id="homePage">
            <img src={pokemonLogo} alt="pokemon-logo" />
            <p>This App is intended strictly for personal, non-comercial use. I created it during my process of learning ReactJs for purely educational purposes. </p>
            <p>I have no intention of selling it, building further on it or publishing it anywhere except as a part of my portfolio. </p>
            <Link to="/BattlePage" className="button">BattlePage</Link>
        </div>
    )
}

export default HomePage;