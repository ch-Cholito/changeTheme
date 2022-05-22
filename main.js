function changeTheme() {

    let page = document.getElementById("page");

    if (document.getElementById("themes").value == "black") {
        document.body.style.background = "rgba(0, 0 ,0)";
        document.body.style.color = "rgba(250, 250,250)";

    } else if (document.getElementById("themes").value == "white") {
        document.body.style.background = "rgba(250, 250,250)";
        document.body.style.color = "rgba(0, 0,0)";


    } else if (document.getElementById("themes").value == "color") {
        document.body.style.background = "rgb(223, 241, 175)";
        document.body.style.color = " rgb(227, 25, 119)";
    }
}