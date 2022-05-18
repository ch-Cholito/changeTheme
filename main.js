function changeTheme() {

    let page = document.getElementById("page");

    if (document.getElementById("themes").value == "black") {
        page.classList.remove();
        page.classList.add("dark");

    } else if (document.getElementById("themes").value == "white") {
        page.classList.remove();
        page.classList.add("white");

    } else if (document.getElementById("themes").value == "color") {
        page.classList.remove();
        page.classList.add("color");
    }
}