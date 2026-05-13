import { css } from "@emotion/react"

export const layout = css`
    display: flex;
    flex-direction: column;

    border: 4px solid #000000;
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
    background-color: #111;
    overflow: hidden;


`

export const top = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65%;
    border-bottom: 3px solid #311111;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        width: 50%;
        height: 100%;
        /* background-color: #940202; */
    }
`;

// export const student = css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 300px;
//     height: 100%;
//     background-color: #940202;
// `;

// export const teacher = css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 300px;
//     height: 300px;
//     background-color: #00503c;

// `;


export const bottom = css`
    display: flex;
    justify-content: baseline;
    border: 2px solid #555;
    gap: 10px;
    height: 35%;
    background-color: #ffffff;
`

export const battleLog = css`
    padding: 20px;
    border-right: 2px solid #555;
    width: 30%;
    overflow-y: auto;
    color: white;
    background-color: #222;
`

export const battleStatus = css`
    padding: 20px;
    width: 40%;
    border-right: 2px solid #555;
    background-color: blue;
`

export const userButtons = css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 30%;
    background-color: red;
`