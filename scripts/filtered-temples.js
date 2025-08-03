
console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const listPhotos = document.getElementById('photos');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/b3415f6d30c8ab6e832b65fa5893b68d148a161b/full/800%2C/0/default"

    },
    {
        templeName: "Nashville Tennessee",
        location: "Tennessee, United States",
        dedicated: "2000, May, 21",
        area: 10700,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/f9bac287489148744e0ba060673e261e061d3361/full/1600%2C/0/default"
    },
    {
        templeName: "Okinawa Japan",
        location: " Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 12437,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-9974-thumb.jpg"

    },
    // Add more temple objects here... 
];

button.addEventListener("click", function () {
    menu.classList.toggle('open');
    console.log(menu);
    if (button.innerHTML === '☰') {
        button.textContent = '❌';
    }
    else {
        button.textContent = '☰';
    }

});
const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');
const homeLink = document.getElementById('home');
oldLink.addEventListener("click", function () {
    let old = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 2000;
    });
    listPhotos.innerHTML = '';
    old.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
newLink.addEventListener("click", function () {
    let newest = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2000;
    });
    listPhotos.innerHTML = '';
    newest.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
largeLink.addEventListener("click", function () {
    let large = temples.filter(temple => {
        const area = temple.area;
        return area >= 90000;
    });
    listPhotos.innerHTML = '';
    large.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
smallLink.addEventListener("click", function () {
    let small = temples.filter(temple => {
        const area = temple.area;
        return area <= 10000;
    });
    listPhotos.innerHTML = '';
    small.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
homeLink.addEventListener("click", function () {
    listPhotos.innerHTML = '';
    temples.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
const figureTemple = temples.map((temple) => {
    const listItem = document.createElement("figure");
    listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
    listPhotos.appendChild(listItem);
});
