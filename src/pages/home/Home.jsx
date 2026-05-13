import { useState } from "react";
import * as s from "./styles";
import { useNavigate } from "react-router";

function Home() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleStartOnClick = () => {

        if (!inputValue.trim()) {
            setInputValue("");
            return;
        }

        navigate(`/game/${inputValue}`)
        
    }

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