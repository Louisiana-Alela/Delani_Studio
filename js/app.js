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

// image toggling
$(document).ready(function(){
    $('#text1').hide();
    $('#text2').hide();
    $('#text3').hide();
    $('.icon1, .icon10').click(function(){
        $('#text1').toggle();
        $('.icon1').toggle();
    });
    $('.icon2, .icon20').click(function(){
        $('#text2').toggle();
        $('.icon2').toggle();
    });
    $('.icon3, .icon30').click(function(){
        $('#text3').toggle();
        $('.icon3').toggle();
    })
});
