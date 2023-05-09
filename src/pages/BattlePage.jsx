import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import arrow from "../assets/arrow.svg";
import Menu from "../Menu";
import Logs from "../Logs";

const BattlePage = ({p1,p2,newGame,newOpponent}) =>{

    const [health1, setHealth1] = useState(p1.stats[0].base_stat);
    const [health2, setHealth2] = useState(p2.stats[0].base_stat);

    const [leftAttacks, setLeftAttacks] = useState(p1.stats[5].base_stat > p2.stats[5].base_stat ? true : false);

    const handleAttack = () =>{
        if(leftAttacks){
            const dmg = (p1.stats[1].base_stat/2)*(1-(p2.stats[2].base_stat/2/100));
            setHealth2((health2 - dmg)>0 ? health2 - dmg : 0);
            setLeftAttacks(false);
        }
        if(!leftAttacks){
            const dmg = (p2.stats[1].base_stat/2)*(1-(p1.stats[2].base_stat/2/100));
            setHealth1((health1 - dmg)>0 ? health1 - dmg : 0);
            setLeftAttacks(true);
        }
    }

    const handleNewOpponent = () =>{
        newOpponent(health1);
    }

    useEffect (()=>{
        setHealth1(p1.stats[0].base_stat);
        setHealth2(p2.stats[0].base_stat);
        setLeftAttacks(p1.stats[5].base_stat > p2.stats[5].base_stat ? true : false);
    },[p1,p2])


    return (
        <>
            <div className="row">
                <Pokemon p={p1} hp={health1}/>
                { !health1 || !health2
                    ? (
                        <div className="attack_container">
                            <h1>Battle Over</h1>
                            {health1==0 
                                ? <div id="endgameMessage">{p2.name.toUpperCase()} WINS!</div> 
                                : <div id="endgameMessage">{p1.name.toUpperCase()} WINS!</div>
                            }
                        </div>
                    )
                    : (
                        <div className="attack_container">
                            <div>
                                {leftAttacks ? <img src={arrow} alt="Arrow" className="rotate"/> : <img src={arrow} alt="Arrow"/>}
                                <button type="button" className="button" onClick={handleAttack}> Attack! </button>
                            </div>
                        </div>
                    )
                }
                <Pokemon p={p2} hp={health2}/>
            </div>
            <div className="row">
                <Menu newGame={newGame} isDone={!health1 || !health2} handleNewOpponent={handleNewOpponent}/>
                <Logs />
            </div>  
        </>
    )
}

export default BattlePage;