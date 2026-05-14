
import { useEffect, useState } from "react";
import StatusBar from "../StatusBar/StatusBar";
import * as s from "./styles"
import UserController from "../UserController/UserController";


function IngameLayout() {

    const [studentStatusBar, setStudentSatausBar] = useState({
        id: "student",
        hp: 100,
        tired: 0,
    });
    const [teacherStatusBar, setTeacherSatausBar] =useState({
        id: "teacher",
        hp: 100,
        tired: 0,
    });



    const [num, setNum] = useState(0);
    

    return (<>
        <div css={s.layout}>
            <div css={s.top} >
                <div css={s.part}>
                    <div css={s.back} >
                        <div css={s.profile} >
                        </div>
                    </div>
                    <StatusBar status={studentStatusBar}/>
                </div>
                <div css={s.part}>
                    <div css={s.back}>
                        <div css={s.profile} />
                    </div>
                    <StatusBar status={teacherStatusBar} />
                </div>
            </div>
            <div css={s.bottom}>
                <div css={s.battleLog}>
                    fds
                </div>
                <div css={s.turn}>
                    <div css={s.turnNum}>
                        <div>{num}</div>
                        TURN
                    </div>
                    <div css={s.gameimg}>1</div>
                </div>
                <div css={s.userButtons}>
                    <UserController num={num} setNum={setNum}/>
                </div>
            </div>
        </div>
    </>

    )
}

export default IngameLayout;