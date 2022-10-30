// привязываю цифры объема двигателя к ползунку

const engineSize = document.querySelector('#engine-size');
// console.log(engineSize);

const engineRange = document.querySelector('#engine-range');
// console.log(engineRange);

engineRange.addEventListener('input', function() {
    engineSize.value = engineRange.value;
})

engineSize.addEventListener('input', function() {
    engineRange.value = engineSize.value;
})

//привязала!)

// константы расчета

const basePrice = 3000;
const finishPriceElement = document.querySelector('#finish-price');

// работа с радиокнопками

const radioType = document.querySelectorAll('input[name="type"]');
const radioArea = document.querySelectorAll('input[name="area"]');
const radioCarBody = document.querySelectorAll('input[name="carBody"]');

// работа с чекбоксами

const checkboxExpert = document.querySelectorAll('input[name="expert"]');
const checkboxDiagnostics = document.querySelectorAll('input[name="diagnostics"]');
const checkboxResale = document.querySelectorAll('input[name="resale"]');

const selectYear = document.querySelectorAll('option');

//нахожу все input на странице, чтобы при их изменении цена изменялась также

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate();
    })
}

// расчет цены автомобиля

function calculate() {
    // устанавливаю 3 тыс. как базовая стоимость авто, умножаю на объем и стоимость услуг фирмы)
    let finishPrice = basePrice * (parseInt(engineSize.value) * 0.0015);

    //умножаю на коэффицент класса авто

    for (const radio of radioType) {
        if (radio.checked === true) {
            finishPrice = finishPrice * +radio.value;
        }
    }

    //умножаю на страну импорта

    for (const radio of radioArea) {
        if (radio.checked === true) {
            finishPrice = finishPrice * +radio.value;
        }
    }

    //умножаю на тип кузова

    for (const radio of radioCarBody) {
        if (radio.checked === true) {
            finishPrice = finishPrice * +radio.value;
        }
    }

    //умножаю на дополнительные опции

    for (const checkbox of checkboxExpert) {
        if (checkbox.checked === true) {
            finishPrice = finishPrice * +checkbox.value;
        }
    }

    for (const checkbox of checkboxDiagnostics) {
        if (checkbox.checked === true) {
            finishPrice = finishPrice * +checkbox.value;
        }
    }

    for (const checkbox of checkboxResale) {
        if (checkbox.checked === true) {
            finishPrice = finishPrice * +checkbox.value;
        }
    }

    for (const option of selectYear) {
        if (option.selected === true) {
            finishPrice = finishPrice * +option.attributes.value.nodeValue;
        }
    }

    //итоговая стоимость

    finishPriceElement.innerText = finishPrice.toFixed(0);
}

console.log(selectYear)

calculate();