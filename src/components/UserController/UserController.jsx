import { useState } from "react";
import * as s from "./styles"
import ReactModal from "react-modal";
import { useNavigate } from "react-router";

function UserController({turnNum, setTurnNum, setModalOpen, userActions, setUserActions}) {
    const {action, skillOn, skills, potionOn, potions } = userActions;
    
    const navigate = useNavigate();
    const userStat = JSON.parse(localStorage.getItem("userStat"))

    const handleOnClick = (e) => {
        setTurnNum(turnNum + 1)

        if (e.target.value === action[0]) {

        }

        if (e.target.value === action[1]) {
            setModalOpen(true);
            setUserActions(prev => ({
                ...prev,
                skillOn: true,
            }));
        }

        if (e.target.value === action[2]) {
            setModalOpen(true);
            setUserActions(prev => ({
                ...prev,
                potionOn: true,
            }));
        }

        if (e.target.value === action[3]) {
            navigate(`/lobby/${userStat.username}`)
            userStat.cash = userStat.cash + 10;
            localStorage.setItem("userStat", JSON.stringify(userStat))
        }
    }

    return (
        <>
        <div css={s.buttons}>
            {action.map(a => <button onClick={handleOnClick} key={a} value={a} css={s.button} >{a}</button>)}
        </div>
        
        
        </>
    )
}

export default UserController;