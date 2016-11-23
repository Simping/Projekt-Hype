function jumpTo(element) {
    $('html, body').animate({
        scrollTop: $("#" + element).offset().top
    }, 500);
}