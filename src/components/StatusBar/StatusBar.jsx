import * as s from "./styles"

function StatusBar() {


    return (
        <>
            <div css={s.statusBar}>
                <div css={s.hpBackBar}>
                    <div css={s.hp()} />
                </div>
                <div css={s.tiredBackBar}>
                    <div css={s.tired()} />
                </div>
            </div>
        </>
    )
}

export default StatusBar;