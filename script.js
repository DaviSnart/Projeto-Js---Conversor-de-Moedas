/* Para adicionar moedas ao select de cima será feito o mapeamento de tudo igual é feito para o segundo, irá mapear o select, a imagem da moeda o nome... */

const convertButton = document.querySelector('.convert-button') // mapeia o botão que vai converter
const segundoSelect = document.querySelector('.segundo-select') // mapeia o segundo select
const primeiroSelect = document.querySelector('.primeiro-select') // mapeia o primeiro select


function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value // mapeia o valor digitado no input
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // mapeia Valor da primeira moeda
  const currencyValueConverted = document.querySelector('.currency-value') // mapeia o valor da segunda moeda

  const dolarToday = 5.2
  const euroToday = 5.37
  const libraToday = 6.2

  /*Para fazer a conversão precisa satisfazer as duas condições quando o primeiro select for  dolar e o segundo for real  irá converter de dolar para real */

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'real') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * dolarToday)

  }

  /*Quando o primeiro select for real e o segundo for dolar irá converter real para dolar */

  if (segundoSelect.value == 'dolar' && primeiroSelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)

  }

  if (primeiroSelect.value == 'real' && segundoSelect.value == 'libra') {
    // formatar número para libra britânica
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue / libraToday)

  }

  if (segundoSelect.value == 'real' && primeiroSelect.value == 'libra') {
    // formatar número para euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * libraToday)

  }

  if (primeiroSelect.value == 'euro' && segundoSelect.value == 'real') {
    // formatar número para euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * euroToday)


  }
  if (segundoSelect.value == 'euro' && primeiroSelect.value == 'real') {
    // formatar número para euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday)


  }


  /*CASO DESEJE CONVERTER DOLAR PARA EURO | EURO PARA DOLAR OU QUALQUER OUTRA MOEDA USAR A MESMA LÓGICA DE CIMA BASTA COPIAR E COLAR E ALTERAR PARA A MOEDA DESEJADA*/


  // Essa função é responsável por formatar o texto da moeda do primeiro select, quando for dolar irá colocoar o $ e quando for real R$, para adicionar outras moedas basta copiar e colar e alterar para a moeda que deseja
  function formatCurrency() {


    switch (primeiroSelect.value) {
      case 'dolar':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(inputCurrencyValue);


        break;
      case 'real':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(inputCurrencyValue);


        break;

        case 'libra':
          currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GE', {
            style: 'currency',
            currency: 'GBP',
          }).format(inputCurrencyValue);


          break;

        case 'euro':
          currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(inputCurrencyValue);


          break;








      default:
        break;
    }
  }
  
  formatCurrency()


}




function changeCurrency() {
  const nomeMoeda2 = document.getElementById('nome-moeda-select-2') // mapeia o nome da segunda moeda
  const nomeMoeda1 = document.getElementById('nome-moeda-select-1') // mapeia o nome da primeira moeda
  const currencyImage = document.querySelector('.currency-img') // mapeia a segunda imagem
  const imagemPrimeiroSelect = document.querySelector('.imagem-primeiro-select') // mapeia a primeira imagem



  //aqui a condicional precisa ser feita para o primeiro select e para o segundo, assim, irá trocar a imagem e o nome nos dois select
  if (segundoSelect.value == 'real') {
    nomeMoeda2.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/brasil 2.png'
  }

  if (primeiroSelect.value == 'real') {
    nomeMoeda1.innerHTML = 'Real Brasileiro'
    imagemPrimeiroSelect.src = './assets/brasil 2.png'
  }

  if (segundoSelect.value == 'dolar') {
    nomeMoeda2.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (primeiroSelect.value == 'dolar') {
    nomeMoeda1.innerHTML = 'Dólar americano'
    imagemPrimeiroSelect.src = './assets/dolar.png'
  }
  if (primeiroSelect.value == 'libra') {
    nomeMoeda1.innerHTML = 'Libra Britânica'
    imagemPrimeiroSelect.src = './assets/libra.png'
  }
  if (segundoSelect.value == 'libra') {
    nomeMoeda2.innerHTML = 'Libra Britânica'
    currencyImage.src = './assets/libra.png'
  }
  if (primeiroSelect.value == 'euro') {
    nomeMoeda1.innerHTML = 'Euro'
    imagemPrimeiroSelect.src = './assets/euro.png'
  }
  if (segundoSelect.value == 'euro') {
    nomeMoeda2.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }



  convertValues()
}
primeiroSelect.addEventListener('change', changeCurrency) // aqui pega o evento de mudança do primeiro select
segundoSelect.addEventListener('change', changeCurrency) // aqui pega o evento de mudança do segundo select
convertButton.addEventListener('click', convertValues) //aqui pega o evento de clique do botão.
