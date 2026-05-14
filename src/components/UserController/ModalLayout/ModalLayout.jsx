import ReactModal from "react-modal";
import * as s from "./styles";
import { useState } from "react";


function ModalLayout({ modalOpen, setModalOpen, userStatus, setUserStatus }) {

    const { id, hp, tired, action, skillOn, skills } = userStatus;

    const [getPick, setGetPick] = useState();

    const handlePickOnClick = (e) => {
        setGetPick(e.target.id);
        console.log(e.target.id);
    }

    const handleCheckOnClick = (e) => {
        if (e.target.value === "check" && !!getPick) {
            console.log(getPick + "스킬 발동");
        } else if (e.target.value === "cancle") {

        } else {
            console.log("스킬 미선택");
            return;
        }

        setGetPick();
        setModalOpen(false)
        setUserStatus({
            ...userStatus,
            skillOn: false,
        })
    }

    return (
        <>
            <ReactModal
                isOpen={modalOpen}
                overlayClassName="_" // 기본 스타일 무효화 (또는 커스텀 클래스명)
                className="_"        // 기본 스타일 무효화
                style={{
                    overlay: s.overlay, // Emotion 스타일 적용
                    content: s.layout
                }}>
                <div css={s.inlayout}>
                    <div>
                        {
                            skills.map(skill => <div id={skill}
                                css={getPick === skill ? s.modalTabPick : s.modalTab}
                                onClick={handlePickOnClick}
                            >
                                {skill}
                            </div>)
                        }
                    </div>
                    <div css={s.check}>
                        <button value="check" onClick={handleCheckOnClick}>확인</button>
                        <button value="cancle" onClick={handleCheckOnClick}>취소</button>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default ModalLayout;