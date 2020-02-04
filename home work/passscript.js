


//........................................................................авторизация




var login = prompt ('Введите логин', '');

if (login == 'админ' ) {

    var password = prompt('Введите пароль', '');

    if (password == 1111) {alert('верно');} 

    else if (password == null ) {alert('Вход отменён!!!');} 

    else {alert('Пароль не верен!!!')}
}

else if (login == null) {alert('Вход отменён!');}

else {alert('Логин введён не верно!');}