export function getRandomNumber () {
    const number = Math.floor(Math.random()*1008 + 1);
    return(number);
}

export async function getPokemon (num) {
    const url=`https://pokeapi.co/api/v2/pokemon/${num}`;
    let pokemon ={};
    await fetch(url)
            .then(res => res.json())
            .then(data => pokemon = data);
    return pokemon;
}

export function correctId (id) {
    if( id < 10 ){
       return "00"+id;
    } else if ( id > 9 && id < 100){
        return "0"+id;
    } else {
        return id;
    }
}

