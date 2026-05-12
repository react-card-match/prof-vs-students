import TeacherAtteck from "../TeacherAtteck/TeacherAtteck";
import * as s from "./styles"

function TeacherPart() {

    return (
        <>
            <>
                <div css={s.back}>
                    <div css={s.hp}></div>
                    <div css={s.tired}></div>
                    <div css={s.prdofile}>선생님</div>
                    <div css={s.attackBox}>
                        <TeacherAtteck />
                    </div>
                </div>
            </>
        </>
    )
}

export default TeacherPart;