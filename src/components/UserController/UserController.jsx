import * as s from "./styles"

function UserController({num, setNum}) {
    const UserControll = ["질문한다", "수강생", "집중한다", "대답한다"];
    

    return (
        <>
        <div css={s.buttons}>
            {UserControll.map(a => <button onClick={()=> {setNum(num+1)}}key={a} css={s.button} >{a}</button>)}
        </div>
            
        </>
    )
}

export default UserController;