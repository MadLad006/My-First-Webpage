document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hello-button").onclick = function () {
        let name = document.getElementById("username").value;
        document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
    };
});
