var deposit = "";
document.getElementById("depositedMoney").innerHTML = deposit;
function add1() {
    deposit += "1";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add2() {
    deposit += "2";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add3() {
    deposit += "3";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add4() {
    deposit += "4";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add5() {
    deposit += "5";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add6() {
    deposit += "6";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add7() {
    deposit += "7";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add8() {
    deposit += "8";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add9() {
    deposit += "9";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function add0() {
    deposit += "0";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function addperiod() {
    deposit += ".";
    document.getElementById("depositedMoney").innerHTML = deposit;
}
function enter() {
    deposit += "a";
    var depositNum = parseFloat(deposit);
    var prevMoney = parseInt(localStorage.getItem("money"));
    localStorage.removeItem("money");
    localStorage.setItem("money", (prevMoney + depositNum));
    document.getElementById("totalMoney").innerHTML = prevMoney + depositNum;
    deposit = "";
}
function mainPage() {
    window.location = "mainpage.html";
}
