
$("body").on('click', function (e) {
    if (e.target.id != 'sidebarCollapse"') {
        Nav(0);
    }
});

function Nav(param) {
    if (param == 0) {
        $('#sidebar, #content').toggleClass('active');
        console.log("ekran");

    } else {
        $('#sidebar, #content').toggleClass('');
        console.log("buton");
    }
}