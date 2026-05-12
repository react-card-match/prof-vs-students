import StudentAtteck from "../StudentAtteck/StudentAtteck";
import * as s from "./styles"

function StudentPart() {
    return (
        <>
            <div css={s.back}>
                <div css={s.hp}></div>
                <div css={s.prdofile}></div>
                <div css={s.attackBox}>
                    <StudentAtteck />
                </div>
            </div>
        </>
    )
}

export default StudentPart;