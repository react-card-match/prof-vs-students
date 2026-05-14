import { useState } from "react";
import * as s from "./styles"
import ReactModal from "react-modal";

function UserController({turnNum, setTurnNum, setModalOpen, userStatus, setUserStatus}) {
    const {id, hp, tired, action, skillOn, skills} = userStatus;
    


    const handleOnClick = (e) => {
        setTurnNum(turnNum + 1)
        if (e.target.value === "스킬") {
            setModalOpen(true);
            setUserStatus({
                ...userStatus,
                skillOn: true,
            });
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