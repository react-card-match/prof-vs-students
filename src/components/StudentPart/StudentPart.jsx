import StudentAtteck from "../StudentAtteck/StudentAtteck";
import * as s from "./styles"

function StudentPart() {
    return (
        <>
            <div css={s.layout} />
            <div css={s.statusBar}>
                <div css={s.hp} />
                <div css={s.tired} />
            </div>
        </>
    )
}

export default StudentPart;