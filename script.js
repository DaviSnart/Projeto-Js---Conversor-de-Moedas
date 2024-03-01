const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertFrom = document.querySelector(".convert-from")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.4
    const libraToday = 6.3
    const realToday = 1.0


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

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }). format(inputCurrencyValue * realToday)
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

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil 2.png"
    }

    convertValues()

}

function changeFrom() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const firstImage = document.querySelector(".first-img")
    const currency = document.querySelector(".currency")
    const dolarToday = 4.9
    const euroToday = 5.4
    const libraToday = 6.3
    const realToday = 1.0

    if (convertFrom.value == "dolar") {
        currency.innerHTML = "Dólar Americano"
        firstImage.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (convertFrom.value == "euro") {
        currency.innerHTML = "Euro"
        firstImage.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (convertFrom.value == "libra") {
        currency.innerHTML = "Libra"
        firstImage.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if (convertFrom.value == "real") {
        currency.innerHTML = "Real"
        firstImage.src = "./assets/brasil 2.png"
        currencyValueToConvert.innerHTML = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }). format(inputCurrencyValue)
        
    }

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

convertFrom.addEventListener("change", changeFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

// formatar número para libra britânica
//let Pounds = Intl.NumberFormat('en-GB', {
//style: 'currency',
// currency: 'GBP',



