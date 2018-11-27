var aniID;
var which;
var useID = ["index.html", "contact.html", "portfolio.html"];
var tabNav = document.getElementById("tab-nav");
var smallNav = document.getElementById("small-nav");
var hideMe = document.getElementById("hideMe")

tabNav.addEventListener("click", slideNavDown);

function slideNavDown(){
    tabNav.removeEventListener("click", slideNavDown);
    var pos = 0;
    smallNav.style.display = "block";
    var timer = setInterval(lower, 5);
    function lower() {
        if (pos >= 100) {
            clearInterval(timer);
            smallNav.style.height = "100px";
            hideMe.style.display = "block"
            tabNav.addEventListener("click", slideNavUp);
        } else {
            pos = pos + 5;
            smallNav.style.height = pos + "px";
        }
    }
};

function slideNavUp(){
    tabNav.removeEventListener("click", slideNavUp);
    var pos = 100;
    hideMe.style.display = "none";
    var timer = setInterval(raise, 5);
    function raise() {
        if (pos <= 0) {
            clearInterval(timer);
            smallNav.style.height = "0px";
            smallNav.style.display = "none"
            tabNav.addEventListener("click", slideNavDown);
        } else {
            pos = pos - 5;
            smallNav.style.height = pos + "px";
        }
    }
};


function primeFade(){
    var itemID = event.srcElement.id;
    console.log(itemID);

    if (itemID == "index") {
        which = 0;
        console.log(which);
        aniID = document.getElementById("index");
        fade();
    } else if (itemID == "contact") {
        which = 1;
        console.log(which);
        aniID = document.getElementById("contact");
        fade();
    } else if (itemID == "portfolio") {
        which = 2;
        console.log(which);
        aniID = document.getElementById("portfolio");
        fade();
    }
}

function fade() {
    var pos = 1;
    var id  = setInterval(frame, 16);

    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            window.location.href = useID[which];
        } else {
            pos = pos - .03;
            aniID.style.opacity = pos;
        }
    }
}