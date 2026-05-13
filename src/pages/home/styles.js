import { css } from "@emotion/react";


export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const header = css`
    
    & > h1 {
        font-size: 100px;
        font-weight: 800;
    }

    & > p {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }
`