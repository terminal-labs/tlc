// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Window resized

$(window).on('resize',function(){
     var slideHeight = $('.slick-track').innerHeight();
});


/** Clock **/

var dateReadableText = 'Upcoming date';
    if($('.site-config').attr('data-date-readable') && ($('.site-config').attr('data-date-readable') != '')){
        $('.timeout-day').text('');
        dateReadableText = $('.site-config').attr('data-date-readable');        
        $('.timeout-day').text(dateReadableText);
    }
$('.clock-countdown').downCount({
    date: $('.site-config').attr('data-date'),
    offset: +10
}, function () {
    //callback here if finished
    //alert('YES, done!');
    var zerodayText = 'An upcoming date';
    if($('.site-config').attr('data-zeroday-text') && ($('.site-config').attr('data-zeroday-text') != '')){
        $('.timeout-day').text('');
        zerodayText = $('.site-config').attr('data-zeroday-text'); 
    }
           
    $('.timeout-day').text(zerodayText);
   
}); 

/** Customization **/

var background = '#ccc';
var backgroundMask = 'rgba(255,255,255,0.92)';
var backgroundVideoUrl = 'none';

if($('.site-config').attr('data-background') && ($('.site-config').attr('data-background') != '')){
    background = $('.site-config').attr('data-background');
//    if(background.indexOf('http') >= 0){  
//        //disable video background for smallscreen
//        if($(window).width() > 640){
//            $('.cover-bg').css({"opacity":"0"});
//            $('.cover-bg').css({"visibility":"hidden"});
//            backgroundVideoUrl = background;
//            
//        }
//    }
    if(background.indexOf('url(') >= 0){        
        $('.cover-bg').css({"background-image":background});
    }
    else{
        $('.cover-bg').css({"background":background});
    }
}
if($('.site-config').attr('data-background-mask') && ($('.site-config').attr('data-background-mask') != '')){
    backgroundMask = $('.site-config').attr('data-background-mask');
    if(backgroundMask.indexOf('url(') >= 0){        
        $('.cover-bg-mask').css({"background-image":backgroundMask});
    }
    else{
        $('.cover-bg-mask').css({"background":backgroundMask});
    }
}

/** Static video background **/
$(function(){
        // Helper function to Fill and Center the HTML5 Video
        $('.video-container video, .video-container object').maximage('maxcover');
      });
/** youtube / vimeo background */
$(function(){
    if(backgroundVideoUrl != 'none'){
        
        //disable video background for smallscreen
        if($(window).width() > 640){
        
          $.okvideo({ source: backgroundVideoUrl,
                    adproof: true
                    
                    });
        }
    }
    });



/** Init fullpage.js */
$(document).ready(function() {
    $('#mainpage').fullpage({
//        verticalCentered: true,
		anchors: ['top', 'when', 'register', 'aboutus', 'contact'],
//        menu: '.mm',
//        resize : false,
        css3: true,
        navigation: true
    });
});


/** Clock **/

var dateReadableText = 'Upcoming date';
    if($('.site-config').attr('data-date-readable') && ($('.site-config').attr('data-date-readable') != '')){
        $('.timeout-day').text('');
        dateReadableText = $('.site-config').attr('data-date-readable');        
        $('.timeout-day').text(dateReadableText);
    }
$('.clock-countdown').downCount({
    date: $('.site-config').attr('data-date'),
    offset: +10
}, function () {
    //callback here if finished
    //alert('YES, done!');
    var zerodayText = 'An upcoming date';
    if($('.site-config').attr('data-zeroday-text') && ($('.site-config').attr('data-zeroday-text') != '')){
        $('.timeout-day').text('');
        zerodayText = $('.site-config').attr('data-zeroday-text'); 
    }
           
    $('.timeout-day').text(zerodayText);
   
}); 



/* Smoth scroll a links */
var $root = $('html, body');
$('a.s-scroll').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});


/* Page Loader : hide loader when all are loaded */
$(window).load(function(){
    $('.page-loader').addClass('hidden');
});

/* END OF Page Loader : hide loader when all are loaded */