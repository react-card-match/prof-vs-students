import { useEffect, useState } from "react";
import * as s from "./styles";
import { useNavigate } from "react-router";
import DefaultSetting from "../../DefaultSetting";

function Home() {
    

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const userStat = JSON.parse(localStorage.getItem("userStat"));  // localstorage 에서 유저정보 받아오기

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleStartOnClick = () => {

        if (!inputValue.trim()) {
            setInputValue("");
            return;
        }

        userStat.username = inputValue;
        localStorage.setItem("userStat", JSON.stringify(userStat)); // localstorage 에 username 추가

        navigate(`/lobby/${inputValue}`, {
            replace: true,
        })
        
    }

    useEffect(() => {
        if (userStat) {
            navigate(`/lobby/${userStat.username}`, {
            replace: true,
        })
        } else {
            DefaultSetting();
        }
    }, [])

    return (<>
        <div css={s.layout}>
            <header>
                <h1>게임 이름</h1>
                <p>제작자</p>
            </header>
            <main css={s.main}>
                <input type="text"
                    placeholder="플레이어 이름"
                    value={inputValue}
                    onChange={handleInputOnChange}
                />
                <div>
                    <button onClick={handleStartOnClick}>Start!!</button>
                </div>
            </main>
        </div>

    </>)

}

export default Home;