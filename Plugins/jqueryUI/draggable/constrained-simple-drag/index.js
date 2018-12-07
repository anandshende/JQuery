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

            var boxHt = $('.box').outerHeight();
            var boxWd = $('.box').outerWidth();

            var left = ui.position.left;
            var top = ui.position.top;
            if (top < 0) {
                top = 0;
            } else if (top > containerHt - boxHt) {
                top = containerHt - boxHt;
            }
            if (left < 0) {
                left = 0;
            } else if (left > containerWd - boxWd) {
                left = containerWd - boxWd;
            }

            ui.position.left = left;
            ui.position.top = top;
        }
    });
};
