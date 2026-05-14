import * as s from "./styles"

function Lobby() {
    // let level = 1;//username 조회해서 데이터들 받아오기
    // const name = "";//username받아와서 넣기
    const user = {
        name : "",
        level: 1,
        cash: 10,
    }
    return (
        <>
        {/* <div css={s.back}> */}
        <body css={s.back}>
            <header>
                <div>
                    <nav>이름: {user.name}</nav>    
                    <nav>레벨: {user.level} lv</nav>
                </div>
                <div>소지금액: {user.cash}골드</div>

            </header>
            <main>
                <div css={s.infoPlayStor}>
                    <div css={s.information}></div>
                    <div css={s.plySto}>
                        <div css={s.play}></div>
                        <div css={s.store}></div>
                    </div>
                </div>
            </main>
        </body>
        {/* </div> */}
        </>
    )
}

export default Lobby;