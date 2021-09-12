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

//scrolling down to about us section
$(document).ready(function aboutUsScroll(){
    const scroll = $("#about").offset();
    $('html, body').animate({
        scrollUp:scroll.top+'px'
    }, normal);
    $('#mouse').click(aboutUsScroll);
});

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

//pop up message
$(document).ready(function(){
    document.getElementById('myForm').addEventListener('submit', popUp);
    function popUp(){
        alert('We have received your message. Thank you for reaching out to us.')
    }
});