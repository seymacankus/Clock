let clock = document.getElementById("clock");

// function formatting(deger){
//     let sonuc = deger<10 ? "0"+deger : deger;
//     return sonuc;
// }

// const formatting = (deger) => {
//     let sonuc = deger < 10 ? "0" + deger : deger;
//     return sonuc;
// }

// const formatting = deger => {
//     let sonuc = deger < 10 ? "0" + deger : deger;
//     return sonuc;
// }
const formatting = deger => sonuc = deger < 10 ? "0" + deger : deger;
//Bunlara Modern Javascript'te (ES6 ve sonrası) arrow function denir.
const TICK = () => {
    const zaman = new Date();
    let saat = formatting(zaman.getHours());
    let dakika = formatting(zaman.getMinutes());
    let saniye = formatting(zaman.getSeconds());
    const HTML = `<span>${saat}</span>:<span>${dakika}</span>:<span>${saniye}</span>`;
    clock.innerHTML = HTML;
}

setInterval(TICK, 1000);