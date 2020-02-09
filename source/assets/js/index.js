$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    $('header').css({ 'background-position-y': scrollTop / 2 + 'px'})
})


$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    const target = $(this).attr('href');
    let ofSetTop = $(target).offset().top;
    $('body, html').animate({scrollTop: ofSetTop}, 700);
    return false
})