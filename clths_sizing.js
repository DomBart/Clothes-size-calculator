var Motsizes = [];
Motsizes[0] = ["XS", 86, 66, 94];
Motsizes[1] = ["S", 90, 70, 98];
Motsizes[2] = ["M", 94, 74, 102];
Motsizes[3] = ["L", 98, 78, 106];
Motsizes[4] = ["XL", 102, 82, 109];
var Vyrsizes = [];
Vyrsizes[0] = ["S", 88, 84, 88];
Vyrsizes[1] = ["M", 92, 89, 93];
Vyrsizes[2] = ["L", 100, 94, 98];
Vyrsizes[3] = ["XL", 106, 98, 100];
function main(krut, liem, klub, vyr) {
    var rez = "Nieko neisvede";
    if (vyr == true)
    {
        rez = vyrasSize(krut, liem, klub);
    }
    else rez = moterisSize(krut, liem, klub);
        return rez;
}
function moterisSize(krut, liem, klub) {
    var rez = "Nieko neisvede";

    if (krut < 0 || liem < 0 || klub < 0) {
        rez = "Jūsų išmatavimai neatitinka standartų (negali būti neigiami skaičiai) ";
    }

    if (krut < 86 || liem < 66 || klub < 94) {
        rez = "Jūsų išmatavimai neatitinka standartų (per maži)";
    }

    if (krut > 106 || liem > 86 || klub > 112) {
        rez = "Jūsų išmatavimai neatitinka standartų (per dideli)";
    }

    if (krut >= 102 && krut <= 106 && liem >= 82 && liem <= 86 && klub >= 109 && klub
        <= 112) {
        rez = "Moteriškas dydis: " + Motsizes[4][0];
    }
    for (i = 0; i < Motsizes.length - 1; i++) {
        if (krut >= Motsizes[i][1] && krut < Motsizes[i + 1][1] && liem >=
            Motsizes[i][2] && liem < Motsizes[i + 1][2] && klub >= Motsizes[i][3] && klub <
            Motsizes[i + 1][3]) {
            rez = "Moteriškas dydis: " + Motsizes[i][0];
            break;
        }
    }

    return rez;
}
function vyrasSize(krut, liem, klub) {
    var rez = "Nieko neisvede";

    if (krut < 0 || liem < 0 || klub < 0) {
        rez = "Jūsų išmatavimai neatitinka standartų (negali būti neigiami skaičiai) ";
    }

    if (krut < 88 || liem < 84 || klub < 88) {
        rez = "Jūsų išmatavimai neatitinka standartų (per maži)";
    }
    if (krut > 110 || liem > 102 || klub > 103) {
        rez = "Jūsų išmatavimai neatitinka standartų (per dideli)";
    }

    if (krut >= 106 && krut <= 110 && liem >= 98 && liem <= 102 && klub >= 100 &&
        klub <= 103) {
        rez = "Vyriškas dydis: " + Vyrsizes[3][0];
    }
    for (i = 0; i < Vyrsizes.length - 1; i++) {
        if (krut >= Vyrsizes[i][1] && krut < Vyrsizes[i + 1][1] && liem >=
            Vyrsizes[i][2] && liem < Vyrsizes[i + 1][2] && klub >= Vyrsizes[i][3] && klub <
            Vyrsizes[i + 1][3]) {
            rez = "Vyriškas dydis: " + Vyrsizes[i][0];
            break;
        }
    }

    return rez;
}