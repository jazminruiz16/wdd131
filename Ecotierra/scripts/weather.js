const weather = document.querySelector('#weather');

const date2 = new Date();
const month = date2.getMonth();
let season = "Winter";
let imageseason = "images/winter.svg";
let harvest = "";
if (month >= 8 && month < 11) {
    season = "Spring";
    imageseason = "images/flower.svg";
    harvest = "sproud salad, beans, lettuce, spinach";
}
else if (month == 11 || (month >= 0 && month < 2)) {
    season = "Summer";
    imageseason = "images/sun.svg";
    harvest = "strawberries";
}
else if (month >= 2 && month < 5) {
    season = "Autumn";
    imageseason = "images/autumn.svg";
    harvest = "oca, cañahua, potatoes.";
}
else {
    season = "Winter";
    imageseason = "images/winter.svg";
    harvest = "chinesse chard, dried fruits";
}
const listItem = document.createElement("div");
listItem.innerHTML = `<figure><img src="${imageseason}" alt="image season" width=150 loading="lazy"><figcaption><span class="titlePhoto">${season}</span><br>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth.</figcaption></figure>`;
weather.appendChild(listItem);