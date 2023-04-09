var withdraw = "";
document.getElementById("withdrawnMoney").innerHTML = withdraw;
function add1() {
    withdraw += "1";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add2() {
    withdraw += "2";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add3() {
    withdraw += "3";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add4() {
    withdraw += "4";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add5() {
    withdraw += "5";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add6() {
    withdraw += "6";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add7() {
    withdraw += "7";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add8() {
    withdraw += "8";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add9() {
    withdraw += "9";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function add0() {
    withdraw += "0";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function addperiod() {
    withdraw += ".";
    document.getElementById("withdrawnMoney").innerHTML = withdraw;
}
function enter() {
    withdraw += "a";
    var withdrawNum = parseFloat(withdraw);
    var prevMoney = parseInt(localStorage.getItem("money"));
    localStorage.removeItem("money");
    localStorage.setItem("money", (prevMoney - withdrawNum));
    document.getElementById("totalMoney").innerHTML = prevMoney - withdrawNum;
    withdraw = "";
}
function mainPage() {
    window.location = "mainpage.html";
}