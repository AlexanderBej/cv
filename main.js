$(document).ready(function () {
    // Set placement position for popover
    var placementPosition = "left";

    if (window.screen.width < 769) {
        placementPosition = "bottom";
    }

    // Open popover
    $('[data-bs-toggle="popover"]').popover({
        placement: placementPosition,
        html: true,
        content: '<div class="popover-container-top"><img src="images/jpg/Profile_img_thumbnail.png" width="100" alt="Alexandru Bej"><div class="popover-info"><h3>Alexandru Bej</h3><h5>Web Developer | Graphic Designer</h5><div class="contact-methods"><a href="https://www.linkedin.com/in/alexandru-bej-203a72ab/"target = "_blank"><i class="fa-brands fa-linkedin contact-icon"></i></a ><a href="mailto:alexbej07@gmail.com"><i class="fa-solid fa-envelope contact-icon"></i></a><div><i class="fa-solid fa-phone contact-icon"></i><span id="data">+39 637 951 478</span></div></div ></div ></div ><div class="popover-container-bottom"><a id="download" target="_blank" href="assets/CV-Bej_Alexandru.pdf" download type="application/pdf">Download PDF version</a></div>'
    });

    // Activate back to top button
    $('#back-to-top-btn').on('click', function (e) {
        $("html, body").animate({ scrollTop: $("#top").offset().top }, 500);
    });

    // Variables for open popover after scrolling over an element
    let timer;
    const elementToScrollBy = $("#about");
    const elementToHide = $("#hidden-container");

    // Fire callback on window scroll
    $(window).scroll(function () {
        // Clear timeout just in case
        clearTimeout(timer);
        timer = setTimeout(check_el_pos, 100);
    });

    // Check element position and add or remove class for displaying
    function check_el_pos() {
        clearTimeout(timer);
        let scroll_pos = $(window).scrollTop();
        if (scroll_pos > elementToScrollBy.offset().top) {
            elementToHide.removeClass("displayed").addClass("displayed");
        } else {
            elementToHide.removeClass("displayed")
        }
    }

    // Close popover with outside click
    $('body').on('click', function (e) {
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('[data-bs-toggle="popover"]').length === 0
            && $(e.target).parents('.popover.in').length === 0) {
            $('[data-bs-toggle="popover"]').popover('hide');
        }
    });


});