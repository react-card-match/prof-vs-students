import { Route, Routes } from "react-router";
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";


function MainRoutes() {
    
    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby/:username" element={<Lobby />} />
            <Route path="/game/:username" element={<Game />} />
            <Route path="*" element={"404 에러"} />
        </Routes>
    </>)
}

export default MainRoutes;