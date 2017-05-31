//gerhatmark - GAUSS
var valaszto1 = document.getElementById('valaszto1');
var valaszto2 = document.getElementById('valaszto2');
var rules = document.getElementById('rules');
var advanced = document.getElementById('advanced');
//Set default classes
advanced.classList.add('unvisible');
valaszto1.className = "active";

function valto1() {
    if (valaszto1.className == "active") {
        valaszto1.classList.remove("active");
        valaszto2.classList.add("active");
        rules.classList.add("unvisible");
        advanced.classList.remove('unvisible');
    };
};

function valto2() {
    if (valaszto2.className == "valaszto2 active") {
        valaszto2.classList.remove("active");
        valaszto1.classList.add("active");
        rules.classList.remove("unvisible");
        advanced.classList.add('unvisible');
    };
};