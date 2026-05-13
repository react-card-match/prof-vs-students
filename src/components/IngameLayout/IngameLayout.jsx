import StudentAtteck from "../components/StudentAtteck/StudentAtteck";
import StudentPart from "../components/StudentPart/StudentPart";
import TeacherPart from "../components/TeacherPart/TeacherPart";
import * as s from "./styles"


function IngameLayout({ children }) {

    return (

        <>
            <div css={s.layout}>
                <div css={s.top}>
                    <div>
                        <StudentPart />
                    </div>
                    <div>
                        <TeacherPart />
                    </div>
                </div>
                <div css={s.bottom}>
                    <div css={s.battleLog}>

                    </div>
                    <div css={s.battleStatus}>

                    </div>
                    <div css={s.userButtons}>
                        <StudentAtteck />
                    </div>
                </div>
            </div>
        </>

    )
}

export default IngameLayout;