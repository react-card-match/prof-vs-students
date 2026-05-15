
import { css } from "@emotion/react";
export const back = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
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
    

    width: 100%;
    
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