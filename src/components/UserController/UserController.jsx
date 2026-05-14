import { useState } from "react";
import * as s from "./styles"
import ReactModal from "react-modal";

function UserController({turnNum, setTurnNum, setModalOpen}) {
    const UserControll = ["공격", "스킬", "포션", "조퇴"];
    const Skills = ["질문한다", "수강생", "집중한다", "대답한다"];
    
    const handleOnClick = (e) => {
        setTurnNum(turnNum + 1)
        if (e.target.value === "스킬") {
            setModalOpen(true);
        }
    }

    return (
        <>
        <div css={s.buttons}>
            {UserControll.map(a => <button onClick={handleOnClick} key={a} value={a} css={s.button} >{a}</button>)}
        </div>
        
        
        </>
    )
}

export default UserController;