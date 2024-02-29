const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.4
    const libraToday = 6.3


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)//
}

function changeCurrency() {
    const currencyImg = document.querySelector(".currency-img")
    const currencyName = document.querySelector("#currency-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()

}












//usamos o innerHTML pra pegar algo do html e dar um novo conteúdo a ele

//TODO ESSE PROJETO ESTÁ DEBAIXO DO CONVERT BUTTON E DA MECÂNICA DE CLICAR

// function changeCurrency() {
//     const currencyName = document.getElementById("currency-name")
//     const currencyImg = document.querySelector(".currency-img")

//     if (currencySelect.value == "dolar") {
//         currencyName.innerHTML = "Dólar americano"
//         currencyImg.src = "./assets/dolar.png"
//     }
//     if (currencySelect.value == "euro") {
//         currencyName.innerHTML = "Euro"
//         currencyImg.src = "./assets/euro.png"
//     }
//     if (currencySelect.value == "libra") {
//         currencyName.innerHTML = "Libra"
//         currencyImg.src = "./assets/libra.png"
//     }

//     convertValues()
// }


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

// formatar número para libra britânica
//let Pounds = Intl.NumberFormat('en-GB', {
//style: 'currency',
// currency: 'GBP',

