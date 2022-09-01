// fetch('https://www.cbr-xml-daily.ru/daily_json.js')

const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementUAH = document.querySelector('[data-value="UAH"]');
const elementTRY = document.querySelector('[data-value="TRY"]');
const elementPLN = document.querySelector('[data-value="PLN"]');
const elementKZT = document.querySelector('[data-value="KZT"]');
const elementINR = document.querySelector('[data-value="INR"]');
const elementCNY = document.querySelector('[data-value="CNY"]');
const elementCAD = document.querySelector('[data-value="CAD"]');
const elementBTC = document.querySelector('[data-value="BTC/USDT"]');


async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;
    rates.UAH = result.Valute.UAH;
    rates.TRY = result.Valute.TRY;
    rates.PLN = result.Valute.PLN;
    rates.KZT = result.Valute.KZT;
    rates.INR = result.Valute.INR;
    rates.CNY = result.Valute.CNY;
    rates.CAD = result.Valute.CAD;

    console.log(rates);

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);
    elementUAH.textContent = rates.UAH.Value.toFixed(2);
    elementTRY.textContent = rates.TRY.Value.toFixed(2);
    elementPLN.textContent = rates.PLN.Value.toFixed(2);
    elementKZT.textContent = rates.KZT.Value.toFixed(2);
    elementINR.textContent = rates.INR.Value.toFixed(2);
    elementCNY.textContent = rates.CNY.Value.toFixed(2);
    elementCAD.textContent = rates.CAD.Value.toFixed(2);
}

getCurrencies();

const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

ws.onmessage = function(msg){
    const response = JSON.parse(msg.data);
    console.log(response.p);
    rates.BTC = response.p;
    elementBTC.textContent = rates.BTC.Value;
};


