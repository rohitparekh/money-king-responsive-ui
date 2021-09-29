$(document).ready(function() {


    $('.toggle-btn').click(function() {
        let windowWidth = $(window).width();

        if(windowWidth < 600) {
            if($('.sidebar').hasClass('hide')) {
                $('.sidebar').removeClass('hide');
            } else {
                $('.sidebar').addClass('hide');
            }
        } else {
            if($('#right-section').hasClass('col-lg-12')) {
                $('#right-section').removeClass('col-lg-12').addClass('col-lg-10');
                $('.sidebar').removeClass('hide');
            } else {
                $('#right-section').addClass('col-lg-12').removeClass('col-lg-10');
                $('.sidebar').addClass('hide');
            }
        }
        
    });


    loadSidebar();

    function loadSidebar() {
        let windowWidth = $(window).width();
        if(windowWidth < 600) {
            $('.sidebar').addClass('hide');
        } else {
            $('.sidebar').removeClass('hide');
        }
    }

    $(window).resize(function() {
        loadSidebar();
    });

    $('.close').click(function() {
        $('.sidebar').addClass('hide');
    });



});