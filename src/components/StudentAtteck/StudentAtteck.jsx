import * as s from "./styles"

function StudentAtteck() {
    const atteck = ["질문한다", "수강생", "집중한다", "대답한다"];
    return (
        <>
        <div css={s.buttons}>

            {atteck.map(a => <button css={s.button} >{a}</button>)}
        </div>
            
        </>
    )
}

export default StudentAtteck;