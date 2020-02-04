//...................................................................калкулятор сложных процентов



//SUM = X + (1 + a)^n   x - начальная сумма вложенных средств; a - годовая процентная ставка; n - срок вклада в годах.

function calc(x, a, n) {
    return x + Math.pow(1 + a, n);
}


$('.counts').click(function () {
    var x = parseInt($('#x').val()),
        a = parseInt($('#a').val()),
        n = parseInt($('#n').val());
    var result = calc(x, a, n);
    $('.result').show(500);
    $('.result').html('' + result);

});









// let X;
// let a;
// let n;
// let SUM;

// while (true) {
//     X = prompt('начальная сумма вложенных средств', '');
//     if (X < 0) { alert('начальная сумма вложенных средств не должна быть < 0');
//     break; }
//     else if (X == null) { alert('Отмена');
//     break; }

//     a = prompt('годовая процентная ставка', '');
//     if (a < 0) { alert('годовая процентная ставка не должна быть < 0'); 
//     break; }
//     else if (a == null) { alert('Отмена');
//     break; }

//     n = prompt ('срок вклада в годах', '');
//     if (n < 1) { alert('срок вклада в годах не должен  быть < 1'); 
//     break; }
//     else if (n == null) { alert('Отмена');
//     break; }


//     SUM = +X + Math.pow(1 + +a, +n);
//     alert(SUM);
//     break;
// }