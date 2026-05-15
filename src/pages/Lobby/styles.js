
import { css } from "@emotion/react";
export const layout = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #dbdbdb;
    
    & > header {
        flex: 0 0 20%;

    }

    & > main {
        flex: 1;
        border: 1px solid #dbdbdb;
        display: flex;
        flex-direction: column;
    }
    
`
export const infoPlayStor = css`

    height: 100%;
    width: 100%;
    background-color: white;
    
    & > div {
         display: flex;
            flex-direction: row;
            border: 1px solid #dbdbdb;

        & > div {
            display: flex;
            flex-direction: column;
            border: 1px solid #dbdbdb;
        }
    }
`
export const information = css`

`
export const plySto = css`
`
export const play = css`
`
export const store = css`
`