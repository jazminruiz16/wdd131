console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');
const listPhotos = document.getElementById('listPhotos');


button.addEventListener("click", function () {
    menu.classList.toggle('open');
    if (button.innerHTML === '☰') {
        button.textContent = '❌';
        header.style.height = '300px';

    }
    else {
        button.textContent = '☰';
        header.style.height = '150px';

    }

});

const products = [
    {
        productName: "Celery",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image:"celery"
    },
    {
        productName: "Arugula",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "arugula"
        
    },
    {
        productName: "Chinesse chard",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "chinesseChard"
    },
    {
        productName: "Spinach",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "spinach"
    },
    {
        productName: "Red cabbage",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "redCabbage"
    },
    {
        productName: "Cilantro",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "cilantro"
    },
    {
        productName: "Onion",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "onion"
    },
    {
        productName: "Broccoli",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "broccoli"
    },
    {
        productName: "Bean",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "bean"
    },
    {
        productName: "White broccoli",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "whiteBroccoli"
    },
    {
        productName: "Lettuce",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "lettuce"
    },
    {
        productName: "Eggs",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "eggs"
    },
    {
        productName: "Mushrooms",
        characteristics: "vegetable",
        benefits: "2005",
        recipes: "11500",
        image: "mushrooms"
    },
    {
        productName: "Hand cream",
        characteristics: "personal care",
        benefits: "2005",
        recipes: "11500",
        image: "handCream"
    },
    {
        productName: "Aromatherapy oil",
        characteristics: "personal care",
        benefits: "2005",
        recipes: "11500",
        image: "aromatherapyOil"
    },

    // Add more product objects here... 
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
const vegetablesLink = document.getElementById('vegetables');
const careLink = document.getElementById('care');
const productLink = document.getElementById('products');
const smallLink = document.getElementById('small');
const homeLink = document.getElementById('home');



vegetablesLink.addEventListener("click", function () {
    let old = products.filter(product => {
        const characteristic = product.characteristics;
        return characteristic =="vegetable";
    });
    listPhotos.innerHTML = '';
    old.forEach(product => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + product.productName + '</span><br>benefits: ' + product.benefits + '<br>recipes: ' + product.recipes + '<br>SIZE: ' + product.area + ' sq ft</figcaption><img src="images/' + product.image + '.webp" alt="' + product.productName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
careLink.addEventListener("click", function () {
    let newest = products.filter(product => {
        const characteristics = parseInt(product.recipes.split(",")[0]);
        return characteristics =="personal care";
    });
    listPhotos.innerHTML = '';
    newest.forEach(product => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + product.productName + '</span><br>benefits: ' + product.benefits + '<br>recipes: ' + product.recipes + '<br>SIZE: ' + product.area + ' sq ft</figcaption><img src="' + product.image + '" alt="' + product.productName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
productLink.addEventListener("click", function () {
    listPhotos.innerHTML = '';
    products.forEach(product => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + product.productName + '</span><br>benefits: ' + product.benefits + '<br>recipes: ' + product.recipes + '<br>SIZE: ' + product.area + ' sq ft</figcaption><img src="' + product.image + '" alt="' + product.productName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
const figureproduct = products.map((product) => {
    const listItem = document.createElement("figure");
    listItem.innerHTML = '<figcaption><span class="titlePhoto">' + product.productName + '</span><br>benefits: ' + product.benefits + '<br>recipes: ' + product.recipes + '<br>SIZE: sq ft</figcaption><img src="' + product.image + '" alt="' + product.productName + '" loading="lazy">';
    listPhotos.appendChild(listItem);
});
