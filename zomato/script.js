$('.res_list').hide();
$('.cover .content form input').on('keypress',function(e) {
    if(e.which === 13){
        e.preventDefault();
        // console.log("sdfsd");
        $('.res_list').show(1000);        
        $(".cover .content").css({
            'opacity': '0',
            'transform': 'translate(-50%,-25vh)',
            'transition': '1s'
        },700);
        $(".cover").delay(1000);
        $('.cover').slideUp(1000);      
    }
})
$('nav ul li').click(function(){
    $('.form').css({
        'transform': 'translate(-50%,-50%)',
        'opacity': '1'
    })
})

$('.form form button').click(function(){
    this.preventDefault();
    $('.form').css({
        'transform': 'translate(-50%,-100%)',
        'opacity': '0'
    })
})