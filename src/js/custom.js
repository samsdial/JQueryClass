/*
$(document).ready(function () {
    $('ul.js-bold').addClass('txt_bold');
    $('ul.js-color').addClass('cl--blue');
});*/
$(function () {
    $('ul.js-bold').addClass('txt_bold');
    $('ul.js-bold > :last-child').addClass('txt_upper');
    $('ul.js-color').addClass('cl--blue');
    $('ul.js-color > li:first-child').addClass('cl--red');
});