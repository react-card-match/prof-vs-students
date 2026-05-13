import { css } from "@emotion/react";

// export const back = css`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     width: 100%;
//     height: 100%;
    

// `;
// export const prdofile = css`
    
//     box-sizing: border-box;
//     margin-bottom: 10%;

//     width: 60%;
//     height: 40%;
    
//     border-radius: 50%;
//     background-color: aliceblue;

// `;
// export const attackBox = css`
//     width: 80%;
//     height: 40%;
//     margin-bottom: 10%;
    
//     border-radius: 20px;
//     background-color: aliceblue;
// `

export const layout = css`

`

export const statusBar = css`
    box-sizing: border-box;
    border: 2px solid #222;
    width: 100%;
    height: 10%;
`

export const hp = (hp) => css`
    flex-grow: 1;
    transition: all 1s ease-in-out;
    border: 2px solid #222;
    width: ${hp}%;
    height: 70%;
    background-color: rgb(255, 28, 28);

`
export const tired = (tired) => css`
    border: 2px solid #222;
    width: ${tired}%;
    height: 30%;
    background-color: rgb(196, 51, 240);

`