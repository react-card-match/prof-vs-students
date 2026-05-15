
function DefaultSetting() {
    // 시작 시 해당 localstorage 에 유저정보가 없으면 유저 기본 정보 추가 ( 최초 능력치 )
    // username은 home에서 작성 후 start 버튼을 누를 때 추가

    // 주의 :: localstorage 에 저장 시 사용자가 임의로 값 수정 가능.
    // but, 우린 아직 DB를 안배우기도 했고 서버도 없기때문에 localstorage를 서버처럼 사용해야 함
    const userBaseStat = {
        username: "",
        level: 1,
        xp: 0,
        needxp: 50,
        maxhp: 100,
        nowhp: 100,
        attackpower: 5,
        cash: 10,
    }

    const userStat = localStorage.getItem("userStat");

    if (!userStat) {
        localStorage.setItem("userStat", JSON.stringify(userBaseStat));
    }

    return null;
}

export default DefaultSetting;