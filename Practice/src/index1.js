function bodyload() {
    var username = prompt("Enter User Name");
    document.querySelector("p").innerHTML = "Hello ! ".concat(username);
}
