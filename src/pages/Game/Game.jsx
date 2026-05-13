import { useParams } from "react-router";
import * as s from "./styles";
import IngameLayout from "../../components/IngameLayout/IngameLayout";

function Game() {
    const params = useParams();


    return (
        <>
            <IngameLayout />
        </>
    )
}

export default Game;