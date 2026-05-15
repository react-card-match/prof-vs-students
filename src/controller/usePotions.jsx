
function usePotions(target) {

    const userStat = JSON.parse(localStorage.getItem("userStat"));

    if (target === "커피") {
        userStat.nowhp = userStat.nowhp - Math.floor(userStat.maxhp * 20 / 100);
    }

    if (target === "핫식스") {
        userStat.nowhp = userStat.nowhp + Math.floor(userStat.maxhp * 20 / 100);
    }

    if (target === "몬스터") {
        userStat.nowhp = userStat.nowhp + Math.floor(userStat.maxhp * 20 / 100);
    }



    if (userStat.nowhp >= userStat.maxhp) {
        userStat.nowhp = userStat.maxhp;
    }

    localStorage.setItem("userStat", JSON.stringify(userStat));
}

export default usePotions;