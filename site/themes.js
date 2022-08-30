if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}
let mainwindow = window.parent.document.querySelector("html");
switch(localStorage.getItem("theme")) {
    case "dark":
        mainwindow.setAttribute("theme", "dark");
        break;
    case "light":
        mainwindow.setAttribute("theme", "light");
        break;
}

function setTheme(text) {
    if(text != null) {
        mainwindow.setAttribute("theme", text);
        localStorage.setItem("theme", text);
    }
}