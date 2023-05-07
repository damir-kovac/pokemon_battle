import { correctId } from "./utility";

const Pokemon = ({p}) =>{

    const id=correctId(p.id);

    return (
        <div className="pokemon">
            <h3>{p.name.toUpperCase()}</h3>
            <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
                alt="Pokemon"
            />
            <h4>Stats</h4>
            <div className="text_container">
                <p>HP: {p.stats[0].base_stat}</p>
                <p>Attack: {p.stats[1].base_stat}</p>
                <p>Defense: {p.stats[2].base_stat}</p>
                <p>Speed: {p.stats[5].base_stat}</p>
            </div>
        </div>
    )
}

export default Pokemon;