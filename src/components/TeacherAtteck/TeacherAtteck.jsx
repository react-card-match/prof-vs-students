import { useEffect, useState } from "react";
import * as s from "./styles"

function TeacherAtteck() {
    const atteckArr = ["코드작두", "이게 뭘까요", "엘베수리중", "전방주시", "공부는 좀 했어?"];
    const whatAnswer = ["그렇지~", "음 그거랑은 조금 다르지"];
    const random =  (Math.random()) * atteckArr.length;
    if(2 === random) {
        const answer =  (Math.random()) * whatAnswer.length;
        //랜더링 전 값이 트루 이면 
    }

    const [atteck, setAtteck] = useState("");

    return (
        <>
        <div>
            <div css={s.atteckName}>{atteck}</div>
        </div>
            {/* 랜덤으로 떠야함 */}
            
        </>
    )
}

export default TeacherAtteck;