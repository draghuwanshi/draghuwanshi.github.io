(function($){
    "use strict";

    // Navbar Menu JS
    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
    $('.navbar .navbar-nav li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.burger-menu').removeClass('active');
    });
    
    // Burger Menu
    $('.others-option .burger-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.navbar .navbar-nav').toggleClass('active');
    });
    $('.navbar-toggler .burger-menu').on('click', function() {
        $(this).toggleClass('active');
    });

    // Search Popup JS
    $(".others-option .search-btn").on("click", function(){
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function(){
        $(".search-overlay").removeClass("search-overlay-active");
    });
    
    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar').addClass("is-sticky");
        }
        else{
            $('.navbar').removeClass("is-sticky");
        }
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // WoW JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

}(jQuery));