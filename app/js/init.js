$(function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
    $('.flexslider-best-items').flexslider({
        animation: "slide"
    });

    $(".button-collapse").sideNav();

    $('.best-items-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var range = document.getElementById('test-slider');
    if(range){
        noUiSlider.create(range, {
            start: [2000, 25000],
            margin: 300,
            connect: true,
            step: 100,
            tooltips: true,
            orientation: 'horizontal',
            range: {
                'min': [ 0 ],
                'max': [ 70000 ]
            },
            format: wNumb({
                decimals: 0
            })
        });
    }

    if(document.getElementById('light-slider') ){
        $('#light-slider').lightSlider({
            gallery:true,
            item:1,
            thumbItem:3,
            slideMargin: 10,
            speed:500,
            auto:false,
            loop:true,
            onSliderLoad: function() {
                $('#light-slider').removeClass('cS-hidden');
            }
        })
    }


    $('#modal1').modal();
    $('#modal2').modal();
    $('#order').modal();
    $('select').material_select();







});
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});
