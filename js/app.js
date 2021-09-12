function move(){
    $('#mouse')
    .animate({
        marginTop:""
    }, 500)
    .animate({
        marginTop: "0",
        position:"absolute"
    }, {
        duration: 500,
        complete:move
    });
}

function aboutUsScroll(){
    const scroll = $("#about").offset();
    $('html, body').animate({
        scrollUp:scroll.top+'px'
    }, normal);
}

$(document).ready(function(){
    move();
    $('#mouse').click(aboutUsScroll);
})