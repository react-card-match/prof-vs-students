import ReactModal from "react-modal";
import * as s from "./styles";
import { useEffect, useState } from "react";
import usePotions from "../../controller/usePotions";


function ModalLayout({ modalOpen, setModalOpen, userActions, setUserActions }) {

    const { action, skillOn, skills, potionOn, potions } = userActions;



    const [getPick, setGetPick] = useState({
        getPickTarget: "",
        modalTarget: "",
    });



    const handlePickOnClick = (e) => {
        setGetPick(prev => ({
            ...getPick,
            getPickTarget: e.target.id
        }));
    };
    console.log(getPick);
    const handleCheckOnClick = (e) => {
        if (e.target.value === "check" && !!getPick.getPickTarget) {
            if (getPick.modalTarget === "skill") {
                console.log(getPick.getPickTarget + "스킬사용");
            }

            if (getPick.modalTarget === "potion") {
                usePotions(getPick.getPickTarget);
                console.log(getPick.getPickTarget + "포션사용");
            }

        } else if (e.target.value === "cancle") {

        } else {
            console.log("스킬 미선택");
            return;
        }

        setGetPick({
            ...getPick,
            getPickTarget: "",
            modalTarget: "",
        });
        setModalOpen(false)
        setUserActions(prev => ({
            ...prev,
            skillOn: false,
            potionOn: false,
        }))
    }

    useEffect(() => {
        if (skillOn && potionOn) {          // skillOn 과 potionOn 이 둘다 true 이면 둘다 false로 변환
            setUserActions(prev => ({
                ...prev,
                skillOn: false,
                potionOn: false,
            }));

            setModalOpen(false);
            return;
        }

        if (skillOn) {                      // skillOn이 true 일 때 Modal 대상을 skill로 지정
            setGetPick(prev => ({
                ...prev,
                modalTarget: "skill",
            }));

            setModalOpen(true);
        }

        if (potionOn) {                      // potionOn이 true 일 때 Modal 대상을 potion으로 지정
            setGetPick(prev => ({
                ...prev,
                modalTarget: "potion",
            }));

            setModalOpen(true);
        }


    }, [skillOn, potionOn])

    return (
        <>
            <ReactModal
                isOpen={modalOpen}
                overlayClassName="_" // 기본 스타일 무효화 (또는 커스텀 클래스명)
                className="_"        // 기본 스타일 무효화
                style={{
                    overlay: s.overlay,
                    content: s.layout
                }}>
                <div css={s.inlayout}>
                    <div>
                        {/* skill 인지 potion 인지 구분해서 모달 띄우기 */}
                        {
                            getPick.modalTarget === "skill" &&
                            skills.map(skill => <div id={skill}
                                css={getPick.getPickTarget === skill ? s.modalTabPick : s.modalTab}
                                onClick={handlePickOnClick}
                            >
                                {skill}
                            </div>)
                        }
                        {
                            getPick.modalTarget === "potion" &&
                            potions.map(potion => <div id={potion}
                                css={getPick.getPickTarget === potion ? s.modalTabPick : s.modalTab}
                                onClick={handlePickOnClick}
                            >
                                {potion}
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