import { css } from "@emotion/react"
import image from "../../img/backgroundDown.png"

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #000000;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: #111;
    overflow: hidden;
`

export const top = css`
    flex: 7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;

    background-image: url(${image});
    background-size : contain;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        margin: 0 10px 30px;
        width: 25%;
        height: 100%;
        /* background-color: #940202; */
    }
`;

export const VSmark = css`
    font-size: 100px;
    font-weight: 900;
    background: linear-gradient(
        to bottom,
        #fff,
        #ffcc00 40%,
        #aa5500 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px 8px rgba(0,0,0,0.8));
    letter-spacing: 5px;
`

export const part = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    
`;

export const back = css`
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: inset 0 0 5px #000000, 0 0 10px #000000;


    width: 280px;
    height: 380px;
    background-color: #ecc953;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        background-color: white;
        border-radius: 6px;
        width: 90%;
        height: 90%;
        box-shadow: inset 0 0 5px #000000, 0 0 10px #000000;
        text-align: center;
    }
`

export const bottom = css`
    flex: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 5px;
    background-color: #555;

    & > div {
        box-sizing: border-box;
        margin: 0;
        height: 100%;
    }
`

export const battleLog = css`
    padding: 20px;
    overflow-y: auto;
    color: white;
    width: 40%;
    background-color: #222;
`

export const userButtons = css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    background-color: red;
`

export const turn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 20%;
    background-color: #00000000;
`

export const turnNumb = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d6d6d6;
    font-size: 25px;
    font-weight: 500;
    text-shadow: 0 0 10px #d6d6d6;
    width: 100%;
    height: 80px;
    background-color: #00000000;
`

export const gameimg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
`