$(function(){
    $('#jaemin').fullpage()
})

$('.section4 .page4 .button1').click(function(){
    let idx = $(this).index()
        console.log(idx)
    $('.section4 .page4 .popup .popup1').removeClass('view')
    $('.section4 .page4 .popup .popup1').eq(idx).addClass('view')
  })
  $('.section4 .page4 .popup .button1').click(function(){
    let load = $(this).closest('.section4 .page4 .popup .popup1');
    let idx = $(load).index()
        console.log(idx)    
    $('.section4 .page4 .popup .popup1').removeClass('view')
    $('.section4 .page4 .popup .popup1').eq(idx-1).addClass('view')
  })
  $('.section4 .page4 .popup .button1').click(function(){    
    $('.section4 .page4 .popup .popup1').removeClass('view')
  })


// popup2 
$('.page4 button').click(function(){
    let idx = $(this).index()
        console.log(idx)
    $('main section.frame3 .box').removeClass('view')
    $('main section.frame3 .box').eq(idx).addClass('view')
  })
  $('main section.frame3 .box .text_box button').click(function(){
    let load = $(this).closest('main section.frame3 .box');
    let idx = $(load).index()
        console.log(idx)    
    $('main section.frame3 .popup').removeClass('view')
    $('main section.frame3 .popup').eq(idx-1).addClass('view')
  })
  $('main section.frame3 .popup button').click(function(){    
    $('main section.frame3 .popup').removeClass('view')
  })


// popup3
$('.page4 button').click(function(){
    let idx = $(this).index()
        console.log(idx)
    $('main section.frame3 .box').removeClass('view')
    $('main section.frame3 .box').eq(idx).addClass('view')
  })
  $('main section.frame3 .box .text_box button').click(function(){
    let load = $(this).closest('main section.frame3 .box');
    let idx = $(load).index()
        console.log(idx)    
    $('main section.frame3 .popup').removeClass('view')
    $('main section.frame3 .popup').eq(idx-1).addClass('view')
  })
  $('main section.frame3 .popup button').click(function(){    
    $('main section.frame3 .popup').removeClass('view')
  })