
import StatusBar from "../StatusBar/StatusBar";
import StudentAtteck from "../StudentAtteck/StudentAtteck";
import * as s from "./styles"


function IngameLayout() {

    return (<>
        <div css={s.layout}>
            <div css={s.top}>
                <div>
                    <StatusBar />
                </div>
                <div>
                    <StatusBar />
                </div>
            </div>
            <div css={s.bottom}>
                <div css={s.battleLog}>

                </div>
                <div css={s.turn}>
                    <div css={s.turnNum}>
                        <div>1</div>
                        TURN
                    </div>
                    <div css={s.gameimg}>1</div>
                </div>
                <div css={s.userButtons}>
                    {/* <StudentAtteck /> */}
                </div>
            </div>
        </div>
    </>

    )
}

export default IngameLayout;