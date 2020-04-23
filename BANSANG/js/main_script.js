 jQuery(document).ready(function($) {

     /* ------------ FitText Settings ------------ */
     setTimeout(function() {
         $('h1').fitText(1, {
             minFontSize: '40px',
             maxFontSize: '90px'
         });
     }, 100);


     /* ------------ Smooth Scrolling ------------ */
     $('.smoothscroll').on('click', function(e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 800, 'swing', function() {
             window.location.hash = target;
         });
     });

     /* ------------ Height resize ------------ */

     var resizing_contents = ['#home', '#page1', '#page2', '#page3', '#footer'];

     for(var i=0 ; i<resizing_contents.length ; ++i){
         $(resizing_contents[i]).css({
             'height': $(window).height()
         });
     }
     $(window).on('resize', function() {
         $('body').css({
             'width': $(window).width()
         });
         for(var i=0 ; i<resizing_contents.length ; ++i){
             $(resizing_contents[i]).css({
                 'height': $(window).height()
             });
         }
     });

     /* ------------ scroll icon display ------------ */

 });
