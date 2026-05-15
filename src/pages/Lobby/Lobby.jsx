import { useNavigate, useParams } from "react-router";
import * as s from "./styles"
import { useEffect, useState } from "react";

function Lobby() {
    // let level = 1;//username 조회해서 데이터들 받아오기
    // const name = "";//username받아와서 넣기
    const navigate = useNavigate();
    
    const user = JSON.parse(localStorage.getItem("userStat")); // 사용자 정보 localstorage 에서 가져오기



    const handleOnClick = () => {
        navigate(`/game/${user.username}`, {
            replace: true,
        })
    };

    const handleDeleteOnClick = () => {
        localStorage.removeItem("userStat");

        navigate(`/`, {
            replace: true,
        })

    }

    return (
        <>
            {/* <div css={s.back}> */}
            <div css={s.layout}>
                <header>
                    <div>
                        <nav>이름: {user.username}</nav>
                        <nav>레벨: {user.level} lv</nav>
                    </div>
                    <div>소지금액: {user.cash}골드</div>

                </header>
                <main css={s.infoPlayStor}>
                    <div>
                        <div css={s.information}></div>
                        <div css={s.plySto}>
                            <div css={s.play}></div>
                            <div css={s.store}></div>
                        </div>
                        <button onClick={handleOnClick}>인게임화면</button>
                        <button onClick={handleDeleteOnClick}>게임 탈퇴</button>
                    </div>
                </main>
            </div>
            {/* </div> */}
        </>
    )
}

export default Lobby;