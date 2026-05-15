import { useState } from "react";
import * as s from "./styles"

function StatusBar({status}) {
    const {id, hp, tired} = status;

    return (
        <>
            <div css={s.statusBar}>
                <div css={s.hpBackBar}>
                    <div css={s.hp(hp)} />
                </div>
                {
                    id === "enemy" &&
                    (<div css={s.tiredBackBar}>
                        <div css={s.tired(tired)} />
                    </div>) 
                }
                
            </div>
        </>
    )
}

export default StatusBar;