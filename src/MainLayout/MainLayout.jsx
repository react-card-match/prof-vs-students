import StudentPart from "../components/StudentPart/StudentPart";
import TeacherPart from "../components/TeacherPart/TeacherPart";
import * as s from "./styles"


function MainLayout({children}) {

    return (
        
        <>
            <div css={s.back}>
                <div css={s.student}>
                    <StudentPart/>
                </div>
                <div css={s.teacher}>
                    <TeacherPart />
                </div>
            </div>
        </>
        
    )
}

export default MainLayout;