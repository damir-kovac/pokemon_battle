import { Link } from "react-router-dom";
import pokemonLogo from "../assets/Pokemon-logo.png"

const HomePage = () =>{
    return (
        <div id="homePage">
            <img src={pokemonLogo} alt="pokemon-logo" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati officia voluptates minima repudiandae. Quaerat perferendis accusantium delectus unde, iure ipsa alias harum maiores voluptatibus facilis quisquam omnis quae aliquam.</p>
            <Link to="/BattlePage" className="button">BattlePage</Link>
        </div>
    )
}

export default HomePage;