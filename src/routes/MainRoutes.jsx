import { Route, Routes } from "react-router";
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";


function MainRoutes() {
    
    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:username" element={<Game />} />
            <Route path="*" element={"404 에러"} />
        </Routes>
    </>)
}

export default MainRoutes;