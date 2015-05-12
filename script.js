$(document).ready(function () {

    $('h1').text('New Headding');

    $('div').hover
  (
    function () {
        $(this).addClass('active');
    },
    function () {
        $(this).removeClass('active');
    }
  );

});
