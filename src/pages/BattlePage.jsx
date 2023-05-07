import { useEffect, useState } from "react";
import { getPokemon, getRandomNumber } from "../utility";
import Pokemon from "../Pokemon";

const BattlePage = () =>{

    const [num1, setRandomNumber1] = useState(getRandomNumber());
    const [num2, setRandomNumber2] = useState(getRandomNumber());

    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    
    useEffect(()=>{
        const getData = async () =>{
            setP1(await getPokemon(num1));
            setLoading1(false);
        };
        getData();
    },[num1]);

    useEffect(()=>{
        const getData = async () =>{
            setP2(await getPokemon(num2));
            setLoading2(false);
        };
        getData();
    },[num2]);

    return (
        <>
            <div className="row">
                {loading1 ? <h2>Loading...</h2> : <Pokemon p={p1}/>}
                {loading2 ? <h2>Loading...</h2> : <Pokemon p={p2}/>}
            </div>
            <div className="row">
                
            </div>
        </>
    )
}

export default BattlePage;