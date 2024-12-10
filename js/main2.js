var welcome = document.getElementById("welcome");
var logout = document.getElementById("logout");
welcome.innerHTML="Welcome "+localStorage.getItem("username")
logout.addEventListener("click",function(){
    localStorage.setItem("username","");
    window.location.href = "index.html";
})