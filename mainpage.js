document.getElementById("heading").innerHTML = "Welcome " + localStorage.getItem("username") + "! / ¡Bienvenido " + localStorage.getItem("username") + "!";
function setEnglish() {
    document.getElementById("heading").innerHTML = "Welcome " + localStorage.getItem("username") + "!";
    
    document.getElementById("deposit").style.visibility = "visible";
    document.getElementById("withdraw").style.visibility = "visible";
    document.getElementById("deposit").innerHTML = "Deposit";
    document.getElementById("withdraw").innerHTML = "Withdraw";
}
function setSpanish() {
    document.getElementById("heading").innerHTML = "¡Bienvenido " + localStorage.getItem("username") + "!";
    document.getElementById("deposit").style.visibility = "visible";
    document.getElementById("withdraw").style.visibility = "visible";
    document.getElementById("deposit").innerHTML = "Depósito";
    document.getElementById("withdraw").innerHTML = "Retirar";
}
function deposit() {
    window.location = "deposit.html";
}
function withdraw() {
    window.location = "withdraw.html";
}
function depositSpanish() {
    window.location = "depositSpanish.html";
}
function withdrawSpanish() {
    window.location = "withdrawSpanish.html";
}
