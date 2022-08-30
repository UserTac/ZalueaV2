var games = [

];

var glist = document.getElementById("games");

for (let item of games) {
    let a = document.createElement("a");
    a.href = "#";
    var img = document.createElement("img");
    img.src = "games/img/" + item.img;
    a.appendChild(img);
    var title = document.createElement("h3");
    title.textContent = item.name;
    a.appendChild(title);
    a.onclick = function(e) {
        if (e.target == a || e.target.tagName != "A") {
            e.preventDefault();
            LoadGame("games/" + item.path + "index.html");
        }
    }

    glist.appendChild(a);
}

function LoadGame(url) {
    window.location.href = url;
}