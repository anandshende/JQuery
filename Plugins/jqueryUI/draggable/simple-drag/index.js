$(document).ready(function () {
    setTimeout(() => {
        initDrag();
    }, 500);
});

var initDrag = function () {
    $('.slider').draggable();
};
