$(document).ready(function(){
    $('.fa-1').click(function(){
        $('.p1').slideToggle('1000');
        $('.fa-1 .arrow').toggleClass('rotate')
    })
    $('.fa-2').click(function(){
        $('.p2').slideToggle('1000');
        $('.fa-2 .arrow').toggleClass('rotate')
    })
    $('.fa-3').click(function(){
        $('.p3').slideToggle('active');
        $('.fa-3 .arrow').toggleClass('rotate')
    })
    $('.fa-4').click(function(){
        $('.p4').slideToggle('active');
        $('.fa-4 .arrow').toggleClass('rotate')
    })
    $('.fa-5').click(function(){
        $('.p5').slideToggle('active');
        $('.fa-5 .arrow').toggleClass('rotate')
    })
    console.log("tah");
})