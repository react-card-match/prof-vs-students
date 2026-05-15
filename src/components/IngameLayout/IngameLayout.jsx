
import { useEffect, useState } from "react";
import StatusBar from "../StatusBar/StatusBar";
import * as s from "./styles"
import UserController from "../UserController/UserController";
import ModalLayout from "../ModalLayout/ModalLayout";
import ReactModal from "react-modal";
import { useParams } from "react-router";


function IngameLayout() {
    const [turnNum, setTurnNum] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);
    
    const [userActions, setUserActions] = useState({
        action: ["공격", "스킬", "포션", "조퇴"],
        skillOn: false,
        skills: ["질문한다", "수강생", "집중한다", "대답한다"],
        potionOn: false,
        potions: ["커피", "핫식스", "몬스터"],
    });

    const [enemyStatusBar, setEnemySatausBar] = useState({
        id: "강사님",
        hp: 100,
        tired: 0,
    });

    const userStat = JSON.parse(localStorage.getItem("userStat"))

    const userStatus = {
        id: userStat.username,
        hp: Math.floor((userStat.nowhp / userStat.maxhp) * 100),
        tired: 0,
    }


    const handleOnClick = () => {
        console.log("클릭됨");
        setIsClick(true);
        setTimeout(() => {
            setIsClick(false);
        },[400])
    }

            <ReactModal>
                

                <div>반장카드</div>
                <div>동기카드</div>

            </ReactModal>




    return (<>
        <div css={s.layout}>
            <ModalLayout modalOpen={modalOpen} setModalOpen={setModalOpen} userActions={userActions} setUserActions={setUserActions} />
            <div css={s.top} >
                <div css={s.part}>
                    <div css={s.back} >
                        <div>{userStat.username}</div>
                    </div>
                    <StatusBar status={userStatus}/>
                </div>

                <p css={s.VSmark}>vs</p>

                <div css={s.part}>
                    <div css={s.back}>
                        <div>{enemyStatusBar.id}</div>
                    </div>
                    <StatusBar status={enemyStatusBar} />
                </div>
            </div>
            <div css={s.bottom}>
                <div css={s.battleLog}>
                    ${name}
                </div>
                <div css={s.turn}>
                    <div css={s.turnNumb}>
                        <div>{turnNum}</div>
                        TURN
                    </div>
                    <div css={s.gameimg}>
                        <div css={s.card(isClick)} onClick={handleOnClick}></div>
                    </div>
                </div>
                <div css={s.userButtons}>
                    <UserController turnNum={turnNum} setTurnNum={setTurnNum} modalOpen={modalOpen} setModalOpen={setModalOpen} userActions={userActions} setUserActions={setUserActions} />
                </div>
            </div>
        </div>
    </>

    )
}

export default IngameLayout;