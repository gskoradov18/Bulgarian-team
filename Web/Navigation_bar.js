
$("body").on('click', function (e) {
    if (e.target.id != 'openbtn') {
        Nav(0);
    }
});

function Nav(param) {
    if (document.getElementById("mySidebar").style.width == "250px" || param == 0) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}