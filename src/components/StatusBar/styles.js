import { css } from "@emotion/react";

export const statusBar = css`
    display: flex;
    flex-direction: column;
    background-color: #222;
    border-radius: 8px;
    padding: 1px;
    gap:3px;
    width: 100%;
    height: 10%;
    box-shadow: 0 0 15px 5px rgb(51, 51, 51);

    & > div {
        box-sizing: border-box;
        border: 2px solid #222;
        border-radius: 8px;
        width: 100%;
        overflow: hidden;
        background-image: linear-gradient(to right, #929292 0%, #666666 100%);

        & > div {
            box-sizing: border-box;
        }
    }
`

export const hpBackBar = css`
    flex: 7;
`

export const tiredBackBar = css`
    flex: 3;
`

export const hp = (hp) => css`
    transition: all 1s ease-in-out;
    width: ${hp}%;
    height: 100%;
    background-image: linear-gradient(to right, #ff0000 0%, #920000 100%);

`
export const tired = (tired) => css`
    width: ${tired}%;
    height: 100%;
    background-image: linear-gradient(to right, #7600ad 0%, #3c0058 100%);

`
