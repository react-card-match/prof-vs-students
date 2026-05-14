import { css } from "@emotion/react";

// 모달창 외곽
export const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.15)", // 게임 화면이 살짝 보이도록 어둡게
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

// 모달창 본체 (Content)
export const layout = {
    position: "relative", // fixed 해제
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    borderRadius: "20px",
    border: "2px solid rgba(68, 68, 68, 0.38)", // 테두리 추가로 입체감 부여
    backgroundColor: "#4f67b1",
    boxShadow: "inset 0 0 10px #000000, 0 0 50px rgba(0, 0, 0, 0.8)",
    outline: "none",
    width: "450px",       // 게임 화면 크기에 적절한 너비
    height: "600px",
};


export const inlayout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    height: 100%;
`

export const check = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    

    &>button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #b44b28;
        background-color: #ffd7b9;
        border-radius: 8px;
        color: #b44b28;
        font-size: 20px;
        font-weight: 600;
        width: 150px;
        height: 50px;

        &:hover {
            border: 3px solid #ffd7b9;
            color: #ffd7b9;
            background-color: #b44b28;
        }

        &:active {
            border: 3px solid #bea089;
            color: #bea089;
            background-color: #993f22;
        }
    }
`

export const modalTab = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 3px solid #b44b28;
    margin: 20px;
    width: 400px;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    color: #b44b28;
    background-color: #ffd7b9;

    &:hover {
        border: 3px solid #ffd7b9;
        color: #ffd7b9;
        background-color: #b44b28;
    }

    &:active {
        border: 3px solid #bea089;
        color: #bea089;
        background-color: #993f22;
    }
`

export const modalTabPick = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 3px solid #ffd7b9;
    margin: 20px;
    width: 400px;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    color: #ffd7b9;
    background-color: #b44b28;
    transform: scale(105%);
`