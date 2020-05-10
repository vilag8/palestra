$('.chiama').append('<h5>3461068831</h5>');
$('.chiama h5').hide();


$('.chiama').click(function () { 
    $('.chiama p').hide();
    $('.chiama h5').fadeIn();
});

//ANNULLA IL REDIRECT DEL BROWSER QUANDO SI CLICCA LA FOTO
$('.foto a').click(function () { 
    event.preventDefault();
});