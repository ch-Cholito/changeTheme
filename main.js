function changeTheme() {

    let page = document.getElementById("page");

    if (document.getElementById("themes").value == "black") {

        page.classList.toggle("dark");

    } else if (document.getElementById("themes").value == "white") {

        page.classList.toggle("white");

    } else if (document.getElementById("themes").value == "color") {
        
        page.classList.toggle("color");
    }
}