import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BattlePage from "./pages/BattlePage";

function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/BattlePage" element={<BattlePage/>}/>
    </Routes>
  )
    
}

export default App;
