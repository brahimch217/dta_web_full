$(document).ready(function() {
    "use strict";

    $(".post-carousel-twoCol").slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToSCroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToSCroll: 2,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToSCroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    $(".carousel-topNav-prev").click(function() {
        $(".post-carousel-twoCol").slick('slickPrev');
    });
    $(".carousel-topNav-next").click(function() {
        $(".post-carousel-twoCol").slick('slickNext');
    });

    $(".post-carousel-widget").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToSCroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToSCroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToSCroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $(".carousel-botNav-prev").click(function() {
        $(".post-carousel-widget").slick('slickPrev');
    });
    $(".carousel-botNav-next").click(function() {
        $(".post-carousel-widget").slick('slickNext');
    });






    var $header = $(".header-default"),
        $clone = $header.before($header.clone().addClass("clone"));
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $('body').toggleClass("down", (fromTop > 300));
    });
});

$(function() {
    "use strict";

    $('.sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 30,
        containerSelector: '.main-content',
    });
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');
    $(".vertical-menu li i.switch").on('click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

    $("button.burger-menu").on('click', function() {
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on('click', function() {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
    });

    $("button.search").on('click', function() {
        $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on('click', function() {
        $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $(".search-popup").removeClass("visible");
        }
    });


    // loader tab pane 
    $('button[data-bs-toggle="tab"]').on('click', function() {
        $(".tab-pane").addClass("loading");
        $(".lds-dual-ring").addClass("loading");
        setTimeout(function() {
            $(".tab-pane").removeClass("loading");
            $(".lds-dual-ring").removeClass("loading");
        }, 500);
    });
    // share toggle button 
    $(".post button.toggle-button").each(function() {
        $(this).on('click', function(e) {
            $(this).next('.social-share .icons').toggleClass("visible");
            $(this).toggleClass("icon-close").toggleClass("icon-share");
        });
    });

    var list = document.getElementsByClassName('spacer');
    for (var i = 0; i < list.length; i++) {
        var size = list[i].getAttribute('data-height');
        list[i].style.height = "" + size + "px";
    }

    var list = document.getElementsByClassName('data-bg-image');

    for (var i = 0; i < list.length; i++) {
        var bgimg = list[i].getAttribute('data-bg-image');
        list[i].style.backgroundImage = "url('" + bgimg + "')";
    }


});











const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() == "h3") {
        const item = event.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event) {
    if (event.target == popup) {
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}