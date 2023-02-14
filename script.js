// ------------ Collection of functions responsible to change colour of page after fixed interval

function f1() {
    document.bgColor = "green";
    window.setTimeout(f2, 700);
}
function f2() {
    document.bgColor = "red";
    window.setTimeout(f3, 700);
}
function f3() {
    document.bgColor = "yellow";
    window.setTimeout(f4, 700);
}
function f4() {
    document.bgColor = "blue";
    window.setTimeout(f5, 700);
}
function f5() {
    document.bgColor = "green";
    window.setTimeout(f6, 700);
}
function f6() {
    document.bgColor = "red";
    window.setTimeout(msg, 700);
}

function msg() {
    alert ("If you had noticed, the blinking colors in the background are a reference to Google.");
    window.setTimeout(f1, 700);
}

// ------------------- 

function NewTab() {
    window.open("https://www.google.com", "_blank");
}

function closex() {
    document.getElementById('demo').innerHTML = Date();
}

window.onbeforeunload = function () {
    return 'Are you sure?';
}

window.onunload = function () {
    return 'Are you sure?';
}