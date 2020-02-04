

let bacg  =  document.querySelector(".wrapperBacg");


    let temperature = prompt('Какая температура за окном?', '')

    if (+temperature < -15) {
        bacg.classList.add('arctic');
    }

    else if (+temperature <= 1 && +temperature > -15) {
        bacg.classList.add('winter');
    }

    else if (+temperature > 5 && +temperature <= 10) {
        bacg.classList.add('autumn');
    }

    else if (+temperature > 1 && +temperature <= 5) {
        bacg.classList.add('rain');
    }

    else if (+temperature > 10 && +temperature <= 20) {
        bacg.classList.add('spring');
    }

    else if (+temperature > 20 && +temperature <= 40) {
        bacg.classList.add('summer');
    }

    else {
        bacg.classList.add('wilderness');
    }

    //popupWrapper.classList.remove('pop-visible');
