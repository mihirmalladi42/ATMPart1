function login() {
    localStorage.setItem("username", document.getElementById("loginuser").value);
    localStorage.setItem("password", document.getElementById("loginpass").value);
    window.location = "mainpage.html";
}