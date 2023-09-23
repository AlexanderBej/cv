$(document).ready(function () {
    var placementPosition = "left";

    if (window.screen.width < 769) {
        placementPosition = "bottom";
    }

    $('[data-bs-toggle="popover"]').popover({
        placement: placementPosition,
        html: true,
        content: '<div class="popover-container-top"><img src="images/jpg/Profile_img_thumbnail.png" width="100" alt="Alexandru Bej"><div class="popover-info"><h3>Alexandru Bej</h3><h5>Web Developer | Graphic Designer</h5><div class="contact-methods"><a href="https://www.linkedin.com/in/alexandru-bej-203a72ab/"target = "_blank"><i class="fa-brands fa-linkedin contact-icon"></i></a ><a href="mailto:alexbej07@gmail.com"><i class="fa-solid fa-envelope contact-icon"></i></a><div><i class="fa-solid fa-phone contact-icon"></i><span id="data">+39 637 951 478</span></div></div ></div ></div ><div class="popover-container-bottom"><a id="download" target="_blank" href="assets/CV-Bej_Alexandru.pdf">Download PDF version</a></div>'
    });


    $('#back-to-top-btn').on('click', function (e) {
        $("html, body").animate({ scrollTop: $("#top").offset().top }, 500);
    });

    // Init variable for timer
    let timer;
    // Get target element
    const elementToScrollBy = $("#about");
    const elementToHide = $("#hidden-container");
    // Get viewport height
    const screen = window.innerHeight;

    // Fire callback on window scroll
    $(window).scroll(function () {
        // Clear timeout just in case
        clearTimeout(timer);
        timer = setTimeout(check_el_pos, 100);
    });

    function check_el_pos() {
        // Clear the timer
        clearTimeout(timer);
        // Get current scroll position
        let scroll_pos = $(window).scrollTop();
        // This is the math here. Add scroll position to screen height and you get the bottom of the screen. When that value equals the top offset of the element, we are there. 
        if (scroll_pos > elementToScrollBy.offset().top) {
            // Add the classes to the element. Boom, we're done.
            elementToHide.removeClass("displayed").addClass("displayed");
        } else {
            elementToHide.removeClass("displayed")
        }
    }

    $('body').on('click', function (e) {
        //did not click a popover toggle, or icon in popover toggle, or popover
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('[data-bs-toggle="popover"]').length === 0
            && $(e.target).parents('.popover.in').length === 0) { 
            $('[data-bs-toggle="popover"]').popover('hide');
        }
    });


});