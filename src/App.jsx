import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BattlePage from "./pages/BattlePage";
import { useState, useEffect } from "react";
import { getPokemon, getRandomNumber } from "./utility";

function App() {

	const [num1, setRandomNumber1] = useState(getRandomNumber());
	const [num2, setRandomNumber2] = useState(getRandomNumber());

	const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);

	const [p1, setP1] = useState();
	const [p2, setP2] = useState();

	const newGame = () => {
		setRandomNumber1(getRandomNumber());
		setRandomNumber2(getRandomNumber());
		setLoading1(true);
		setLoading2(true);
	}

	const newOpponent = (health1) =>{
		if(health1){
			setRandomNumber2(getRandomNumber());
		} else{
			setRandomNumber1(getRandomNumber());
		}
	}

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
		{(loading1 || loading2) 
			? <h1>App Loading...</h1>
			: (
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/BattlePage" element={<BattlePage p1={p1} p2={p2} newGame={newGame} newOpponent={newOpponent}/>} />
				</Routes>
			)}
		</>
	)

}

export default App;
