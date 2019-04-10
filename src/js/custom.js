function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
previewFile();

function genScreenshot() {
    html2canvas(document.body, {
        onrendered: function(canvas) {
            $('#box1').html("");
            $('#box1').append(canvas);

            if (navigator.userAgent.indexOf("MSIE ") > 0 ||
                navigator.userAgent.match(/Trident.*rv\:11\./))
            {
                var blob = canvas.msToBlob();
                window.navigator.msSaveBlob(blob,'Test file.png');
            }
            else {
                $('#box1').attr('href', canvas.toDataURL("image/png"));
                $('#box1').attr('download','Test file.png');
                $('#box1')[0].click();
            }
        }
    });
}