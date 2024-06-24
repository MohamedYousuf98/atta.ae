$(document).ready(function () {

    $('.form').submit(function (e) {

        e.preventDefault();

        let url = $(this).attr('action');

        let data = new FormData(this);

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function () {

                $('.error-message').addClass('d-none');
            },

            success: function (response) {

                $('.success-message').removeClass('d-none').addClass('d-block').text(response.message);

                setTimeout(function () {
                    location.reload();
                }, 3000)
            },

            error: function (response) {

                $('.error-message').removeClass('d-none').addClass('d-block').text(response.responseJSON.message);
            }
        });
    });


    // years_slider
    if ($(".years_slider").length) {
        $(".years_slider").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 1000,
            infinite: false,
            loop: false,
            autoplaySpeed: 3000,
            centerMode: false,
            asNavFor: ".years_content_slider",
            autoplay: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 8,
                        // centerMode: false,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        // centerMode: false,
                    },
                },

                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        // centerMode: false,
                    },
                },
            ],
        });
    }

    // years_content_slider
    if ($(".years_content_slider").length) {
        $(".years_content_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            speed: 1000,
            asNavFor: ".years_slider",
            infinite: false,
            loop: true,
            autoplaySpeed: 3000,
            centerMode: true,
            autoplay: false,
            focusOnSelect: false,
        });
    }

});
