$(() => {
    //navbar animation on scroll
    $(window).on('scroll', () => {
        var navmenu = $('#page>header.navbar');
        if ($(window).scrollTop() < 30) {
            navmenu.removeClass("on-scroll");
        } else {
            navmenu.addClass('on-scroll');
        }
    });
    
    //Toggel active class to header
    $("#page>header.navbar .navbar-toggler").click(() => {
        $("#page>header.navbar").toggleClass("container");
        $("#page>header.navbar .navbar-nav").toggleClass("active");
        $("i.fa-bars").toggleClass("text-dark");
    });

    //Initial Wow Animation While Scrolling
    new WOW().init();

    //Smooth Scrolling
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    //initila Tooltip
    $(() => { $('[data-toggle="tooltip"]').tooltip() });
});