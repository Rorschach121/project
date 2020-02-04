// console.log ( $('.form-box').addClass('form-box-activ') );




// $('body').css('bacground-color', 'red');
//console.log( $('body').innerHTML = 'текст');



// ................................................................добавления css свойств
//$('.text').css('color', 'green');




// ..................................................................формы возвращение знайчений
// $('#formPOP').submit( function() {
//     let fio =$(this).find ('[name = "fio"]').val();
//     let tel =$(this).find ('[name = "tel"]').val();
//     let email =$(this).find ('[name = "email"]').val();

//     if (fio.val() == '' || tel.val() == '' || email.val() == '') {
//         if (fio.val() == '') {
//             fio.css('border', '1px solid red')
//         }

//         if (tel.val() == '') {
//             fio.css('border', '1px solid red')
//         }

//         if (email.val() == '') {
//             fio.css('border', '1px solid red')

//     })


$("#formPOP").submit(function(){
    let fio =$(this).find ('[name = "fio"]');
    let tel =$(this).find ('[name = "tel"]');
    let email =$(this).find ('[name = "email"]');

    let message = $('#message').val();

    
    //console.log( $(this).find("[name='fio']").val() );

    if( fio.val() == '' || tel.val() == '' || email.val() == '' ){
        if( fio.val() == '' ){
            fio.css('border-color', 'red');
        }else{
            fio.css('border-color', '#ffc90d');               
        }

        if( tel.val() == '' ){
            tel.css('border-color', 'red');
        }else{
            tel.css('border-color', '#ffc90d');   
        }

        if( email.val() == '' ){
            email.css('border-color', 'red');
        }else{
            email.css('border-color', '#ffc90d');    
        }
    }else{
        fio.css('border-color', '#ffc90d'); 
        tel.css('border-color', '#ffc90d');   
        email.css('border-color', '#ffc90d');
    }


    return false;

});






    
// ...................................................................clouse cookie


$('.clouseKookie').click(function() {
    //     $('.form-box').toggle('form-box-activ');
    $(".cookie").animate({
        height: "toggle"
    }, 1, );
});



//.......................................................................... попапп
$('#question-send__subvit , .form-box__close').click(function() {
    //     $('.form-box').toggle('form-box-activ');
    $(".form-box").animate({
        height: "toggle"
    }, 1000, );
});

jQuery(function($) {
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".form-box"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });
});

// ............................................................................скролл
$('#contact').click(function() {

    $('html, body').animate({
        scrollTop: $('.size').offset().top
    }, 1000);
});







// class Form {
//     constructor(type) {
//         switch(type) {
//             case 'main':
//             this.render();
//             break; 
//         }
//     }
//     render() {
//         $('.box').html('<div> CONTENT RENDER </div>')
//     }
// }

// let form = new Form();
// form.render();