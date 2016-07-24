/* ==============================================
 main flex slider
 =============================================== */
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 2500,
        directionNav: false,
        animation: "slide",
        controlNav: false,
        direction: "vertical"
    });
});


/* video background ***********************
 */
/*jQuery(function() {
    jQuery(".player").mb_YTPlayer();
});*/

$('#header-bg-vid').vide('media/vid/trashbot/trashbot');
