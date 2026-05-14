
import { useEffect, useState } from "react";
import StatusBar from "../StatusBar/StatusBar";
import * as s from "./styles"
import UserController from "../UserController/UserController";
import ReactModal from "react-modal";


function IngameLayout() {

    const [userStatusBar, setUserSatausBar] = useState({
        id: "user",
        hp: 100,
        tired: 0,
    });
    const [enemyStatusBar, setEnemySatausBar] = useState({
        id: "enemy",
        hp: 100,
        tired: 0,
    });



    const [turnNum, setTurnNum] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);


    return (<>
        <div css={s.layout}>
            <div css={s.top} >
                <div css={s.part}>
                    <div css={s.back} >
                        <div>가나다</div>
                    </div>
                    <StatusBar status={userStatusBar} />
                </div>

                <p css={s.VSmark}>vs</p>

                <div css={s.part}>
                    <div css={s.back}>
                        <div>가나다</div>
                    </div>
                    <StatusBar status={enemyStatusBar} />
                </div>
            </div>
            <div css={s.bottom}>
                <div css={s.battleLog}>
                    fds
                </div>
                <div css={s.turn}>
                    <div css={s.turnNumb}>
                        <div>{turnNum}</div>
                        TURN
                    </div>
                    <div css={s.gameimg}>1</div>
                </div>
                <div css={s.userButtons}>
                    <UserController turnNum={turnNum} setTurnNum={setTurnNum} modalOpen={modalOpen} setModalOpen={setModalOpen} />
                </div>
            </div>
        </div>
    </>

    )
}

export default IngameLayout;