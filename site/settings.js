if(localStorage.getItem("user_title") != null) {
    document.title = localStorage.getItem("user_title");
}
if(localStorage.getItem("user_favico") != null) {
    document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem("user_favico");
}
function setTitle(text) {
    if(text != null) {
        document.title = text;
        localStorage.setItem("user_title", text);
    }
}
function setImage(text) {
    if(text != null) {
        document.querySelector("link[rel='shortcut icon']").href = text;
        localStorage.setItem('user_favico', text);
    }
}

function resetSettings() {
    localStorage.removeItem("user_favico");
    localStorage.removeItem("user_title");
    localStorage.removeItem("theme");
}