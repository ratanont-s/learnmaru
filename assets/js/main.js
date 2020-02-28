window.onscroll = function () {
    headerSticky()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function headerSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
        $('body').toggleClass('open-offcanvas')
    })
})