import * as s from "./styles"

function UserController() {
    const UserControll = ["질문한다", "수강생", "집중한다", "대답한다"];
    return (
        <>
        <div css={s.buttons}>

            {UserControll.map(a => <button css={s.button} >{a}</button>)}
        </div>
            
        </>
    )
}

export default UserController;