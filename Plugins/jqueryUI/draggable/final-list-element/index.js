$(document).ready(function () {
    setTimeout(() => {
        initDrag();
    }, 500);
});

var initDrag = function () {
    $('.slider').draggable({
        drag: function (event, ui) {
            var containerWd = $('.container').outerWidth();
            var containerHt = $('.container').outerHeight();

            var sliderHt = $(this).outerHeight();
            var sliderWd = $(this).outerWidth();

            var left = ui.position.left;
            var top = ui.position.top;

            if (top < 0) {
                top = 0;
            } else if (top > containerHt - sliderHt) {
                top = containerHt - sliderHt;
            }
            if (left > 0) {
                left = 0;
            } else if (left < containerWd - sliderWd) {
                left = containerWd - sliderWd;
            }

            ui.position.left = left;
            ui.position.top = top;
        },
        handle: '.box'
    });
};
