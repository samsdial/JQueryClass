// Funcion anomima
( function () {
    var $dds = $('dd');
    $dds.hide();
    $dds.eq(0).show();
    console.log();
    $('dt').children().html("keyboard_arrow_down");
    //keyboard_arrow_up
    $('dt').on('mouseenter', function (e) {
        e.preventDefault();

        $dds.slideUp(500, function () {
            $(this)
                .addClass('cl--white')
                .removeClass('bg-primary')
                .addClass('bgc--silver');
            $('dt').children().html("keyboard_arrow_down");
        });
        $(this)
            .next()
            .slideDown(100, function () {
                $(this).addClass('bg-primary');
                $('dt').children().html("keyboard_arrow_up");
            });
    })
})();