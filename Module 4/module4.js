function submitForm(event) {
    console.log(event.submitter.name);
    var name = event.target.elements.name.value;
    var color = event.target.elements.color.value;

    if (event.submitter.name == "btnLocal") {
        localStorage.setItem(name, color);

    } else if (event.submitter.name == "btnSession") {
        sessionStorage.setItem(name, color);
    }
}
for (var i = 0; i < localStorage.length; i++) {
    var name = localStorage.key(i);
    var color = localStorage.getItem(name);
    $("#localStorage").append("<li>" + name + "</li>");
    $("#localStorage li:eq(" + i + ")").css("color", color);
}

for (var i = 0; i < sessionStorage.length; i++) {
    var name = sessionStorage.key(i);
    var color = sessionStorage.getItem(name);
    $("#sessionStorage").append("<li>" + name + "</li>");
    $("#sessionStorage li:eq(" + i + ")").css("color", color);
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}