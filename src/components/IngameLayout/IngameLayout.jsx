
import { useEffect, useState } from "react";
import StatusBar from "../StatusBar/StatusBar";
import * as s from "./styles"
import UserController from "../UserController/UserController";
import ModalLayout from "../UserController/ModalLayout/ModalLayout";


function IngameLayout() {

    const enemy = "강사님";
    const [userStatus, setUserStatus] = useState({
        id: "user",
        hp: 100,
        tired: 0,
        action: ["공격", "스킬", "포션", "조퇴"],
        skillOn: false,
        skills: ["질문한다", "수강생", "집중한다", "대답한다"],
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
            <ModalLayout modalOpen={modalOpen} setModalOpen={setModalOpen} userStatus={userStatus} setUserStatus={setUserStatus} />
            <div css={s.top} >
                <div css={s.part}>
                    <div css={s.back} >
                        <div>가나다</div>
                    </div>
                    <StatusBar status={userStatus} />
                </div>

                <p css={s.VSmark}>vs</p>

                <div css={s.part}>
                    <div css={s.back}>
                        <div>{enemy}</div>
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
                    <div css={s.gameimg}>
                        <div></div>
                    </div>
                </div>
                <div css={s.userButtons}>
                    <UserController turnNum={turnNum} setTurnNum={setTurnNum} modalOpen={modalOpen} setModalOpen={setModalOpen} userStatus={userStatus} setUserStatus={setUserStatus} />
                </div>
            </div>
        </div>
    </>

    )
}

export default IngameLayout;