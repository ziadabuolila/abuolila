// loader
window.onload = function(){
    setTimeout(function () {
        (function ($) { 
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 1150)
}
// menu
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
btnMenu.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});