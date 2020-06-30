$(document).ready(function(){

    let amountScrolled = 60;
    

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('.header').addClass('header--active');
        } else {
            $('.header').removeClass('header--active');
        }
    });
})
if ($(".wow").length && $(window).outerWidth() >= 567) {
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}
// Back to top
let amountScrolled = 200;
let amountScrolledNav = 25;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

function updatePrice() {
    var sum = 0;
    var count = document.getElementById('count').value;
    var price = document.getElementById('total-price').getAttribute('value');
    sum = count * price;
    document.getElementById('total-price').innerHTML = sum + 'đ';
} 
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value >= 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
    updatePrice();
});
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 10) {
        value = value + 1;
    } else {
        value =10;
    }
 
    $input.val(value);
    updatePrice();
});

$('#toggle-search').on('click', function() {
    $('#searchBar').toggle('display: inline-block');
  });

$('.menu__toggle').on('click',function(){
    $(".header__menu--mb").toggle('display: inline-block');
});