import { css } from "@emotion/react";


export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > header {

        & > h1 {
            margin: 0;
            font-size: 100px;
            font-weight: 800;
        }

        & > p {
            margin: 30px 0 0 0;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
        }
    }
`

export const main = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 30px;

    & > input {
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #b4b4b4;
        border: 2px solid #22222291;
        outline: none;
        border-radius: 30px;
        width: 300px;
        height: 60px;
        box-shadow: 0 0 10px 10px #97979797;
        background-color: #313030;
    }

    & > div {
        & > button {
            font-size: 80px;
            font-weight: 900;
            width: 300px;
            height: 100px;
            border: none;
            background-color: #00000000;
            color: #dbdbdb;

            &:hover {
                color: #b4b4b4;
            }

            &:active {
                transform: scale(97%);
                color: #999999;
            }
        }
    }

`