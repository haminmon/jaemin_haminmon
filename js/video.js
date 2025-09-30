$(function(){
    $('.gallery-collection li').each(function(index,el){
    // 순서,요소
        $(el).mouseenter(function(){
            $(this).find('video')[0].play()
        })
        $(el).mouseleave(function(){
            $(this).find('video')[0].pause()
            $(this).find('video')[0].currentTime = 0
        })
        
        $(el).click(function(){
            const title = $(this).find('h3').text()
            const text = $(this).find('p').text()
            const videosrc= $(this).find('video').attr('src')
            $('.popup').find('h2').text(title)
            $('.popup').find('p').text(text)
            $('.popup').find('video').attr('src',videosrc)
            $('.popup').addClass('on')
            $('.popup').find('video')[0].play()
        })

    })
    $('.popup button').click(function(){
        $('.popup').removeClass('on')
        $('.popup').find('video')[0].pause()
        $('.popup').find('video')[0].currentTime = 0
    })
})