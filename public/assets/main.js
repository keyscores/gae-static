/*

	EXHO TEMPLATE  V1.0 BY SUPVIEW.BE


	01. Sticky Navbar
	02. Flexslider ( testimonials ) -> moved to (11 callback)
	03. Share Button
	04. Drag-it img fade Out on Click
	05. Initialise the Carousel (moved to (11 callback))
	06. Form Settings
	07. MediaCheck
	08. Animations make-it-appear
	09. VideoBackground
	10. Load the Whole Page
    11. Internationalization

*/


var ajax_form = true;

$(document).ready(function () { // Document ready



/*-----------------------------------------------------------------------------------*/
    /*	01. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/



    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();




/*-----------------------------------------------------------------------------------*/
    /*	02. FLEXSLIDER - TESTIMONIAL
/*-----------------------------------------------------------------------------------*/






/*-----------------------------------------------------------------------------------*/
    /*	03. Share Button hover
/*-----------------------------------------------------------------------------------*/



/*-----------------------------------------------------------------------------------*/
    /*	04. Drag-it img fade Out on Click
/*-----------------------------------------------------------------------------------*/


    $("#dragit").click(function () {
        $("#dragit").fadeOut("slow");
    });



/*-----------------------------------------------------------------------------------*/
    /*	05. Initialise the Carousel
/*-----------------------------------------------------------------------------------*/






/*-----------------------------------------------------------------------------------*/
    /*	06. FORM SENDER
/*-----------------------------------------------------------------------------------*/



    /* Form Submission */

    /* COMMENT THE ENTIRE FUNCTION BELOW IF YOU WANT TO USE FORM2 (ACTIVE CAMPAIGN) */

    $('form').submit(function (e) {

        // var form_data = $(this).serialize();

        e.preventDefault();

        if (validateEmail($('input[name=email]').val())) {

            if (typeof ajax_form !== "undefined" && ajax_form === true) {
                form_data = {
                    email: $('input[name=email]').val(),
                };
                jQuery.ajax({
                    type: "POST",
                    url: $(this).attr('action'),
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        $('.msg-ok').remove();
                        $('form').show('slow', function () {
                            $(this).after('<div class="clear"></div> <p class="msg-ok">' + data.result_message + '</p>');
                        });
                        $('.spam').hide();
                        $('.msg-ok').delay(100).effect("pulsate", {
                            times: 1
                        }, 1000).hide();

                        trackcmp_email = $('input[name=email]').val();
                        var trackcmp = document.createElement("script");
                        trackcmp.async = true;
                        trackcmp.type = 'text/javascript';
                        trackcmp.src = '//trackcmp.net/visit?actid=999629658&e='+trackcmp_email +'&r='+encodeURIComponent(document.referrer)+'&u='+encodeURIComponent(window.location.href);
                        var trackcmp_s = document.getElementsByTagName("script");
                        if (trackcmp_s.length) {
                            trackcmp_s[0].parentNode.appendChild(trackcmp);
                        } else {
                            var trackcmp_h = document.getElementsByTagName("head");
                            trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
                        }

                        // Comment the below function if you don't want a redirect to the demo!
                        setTimeout(function(){
                            window.location = "https://demo.keyscores.com/ecommerce/default/autologin/c2573a3251800fd18a3c4c8f6c501a462cb6bd40?_next=/ecommerce/default/dashboard/14/%3FshowIntro=1";
                        },2000);

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $('p.spam').text('Not able to add contact').effect("pulsate", {
                            times: 3
                        }, 1000);
                        return false;
                    }
                });


                return false;
            }

        } else {
            $('p.spam').text('Please enter a valid e-mail').effect("pulsate", {
                times: 3
            }, 1000);
            return false;
        }

    });

    /* Validate E-Mail */

    function validateEmail(email) {
        // http://stackoverflow.com/a/46181/11236

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


/*-----------------------------------------------------------------------------------*/
    /*	07. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {

            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });


        },
        exit: function () {

/*-----------------------------------------------------------------------------------*/
            /*	08. ANNIMATIONS MAKE IT APPEAR
/*-----------------------------------------------------------------------------------*/


            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).addClass('animated fadeInDown');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).addClass('animated fadeInLeft');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).addClass('animated fadeInRight');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).addClass('animated fadeInUp');
            }, {
                offset: '80%'
            });

            $('.bounce').waypoint(function (direction) {
                $(this).addClass('animated bounce');
            }, {
                offset: '70%'
            });

            $('.pulse').waypoint(function (direction) {
                $(this).addClass('animated pulse');
            }, {
                offset: '50%'
            });

/*-----------------------------------------------------------------------------------*/
            /*	09. VIDEO BACKGROUND
/*-----------------------------------------------------------------------------------*/
            var mq = window.matchMedia("(min-width: 1024px) and (orientation : landscape)");
            mq.addListener(WidthChange);
            WidthChange(mq);


            // media query change
            function WidthChange(mq) {

                if (mq.matches) {
                    // Screen is greater than 1024px, load video
                    var videobackground = new $.backgroundVideo($('.page1'), {
                        "align": "centerXY",
                        "width": 1280,
                        "height": 720,
                        "path": "video/", /* Folder wich contain the mp4, ogg and webm video */
                        //"filename": $.t('app.background.video_file'),
                        "filename": $('body').data("background-video"),
                        "types": ["mp4", "webm"]
                    });
                }
                else {
                    // window width is less than 1024px, so we're going to manually load the background image.
                    //var url = "url('../img/" + $.t('app.background.img_file') + "')"
                    var url = "url('../img/" + $('body').data("background-image") + "')"
                    $('.page1').css('background-image', url)
                }

            }

        }


    }); /* END OF THE MEDIACHECK */


    /* i18n and slider */

    $.i18n.init({
        useLocalStorage: false,
        debug: false,
        fallbackLng: 'default'
    }, function() {
        /* This will be the only i18n statement required all the statements below
        are replaced with their data-i18n tags */
        $('body').i18n();

        $('#slider1').flexslider({
            animation: "fade",
            directionNav: false,
            controlNav: false,
            smoothHeight: true,
            animationLoop: true,
            slideshowSpeed: 3000,
            slideToStart: 0,
        });

        $('#slider2').flexslider({
            animation: "slide",
            directionNav: true,
            controlNav: false,
            smoothHeight: true,
            animationLoop: true,
            sync: "#slider1",
            slideshowSpeed: 3000,
            slideToStart: 0,
        });
        $('#slider-section2').flexslider({
            animation: "slide",
            directionNav: true,
            controlNav: false,
            smoothHeight: true,
            animationLoop: true,
            slideshowSpeed: 3000,
            slideToStart: 0,
        });
    });



}); /* END OF Document Ready */

/*-----------------------------------------------------------------------------------*/
/*	10. Load the Whole Page
/*-----------------------------------------------------------------------------------*/



$(window).load(function () {
    // will first fade out the loading animation
    jQuery("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(600).fadeOut("slow");



});
