// sticky header 
window.onscroll = function () { whenScroll() };

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function whenScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("hidden");
        
    } else {
        header.classList.remove("sticky");
    }
}

const featuredProducts = [
    {
        name: 'Chopard Wish',
        price: '102',
        details: 'Cologne (F)',
        imgSrc: 'img/featured-img/chpard-wish.jpg'
    },
    {
        name: 'Christian Dior Sauvage',
        price: '269',
        details: 'Cologne (F)',
        imgSrc: 'img/featured-img/christian-dior-sauvage.png'
    },
    {
        name: 'Davidoff Cool',
        price: '79',
        details: '',
        imgSrc: 'img/featured-img/davidoff-cool.jpg',
    },
    {
        name: 'Calvin Klein',
        price: '79',
        details: '',
        imgSrc: 'img/featured-img/clavin-klein.jpg'
    },
    {
        name: 'Jean Paul Gaultier',
        price: '189',
        details: '(F)',
        imgSrc: 'img/featured-img/jean-paul-gaultier.jpg',
    },
    {
        name: 'Lacoste',
        price: '139',
        details: '(F)',
        imgSrc: 'img/featured-img/lacoste-pour-femme.jpg',
    },
    {
        name: 'Pacco Rabbane - 1 Million',
        price: '211',
        details: '(M)',
        imgSrc: 'img/featured-img/paco-rabbane.jpg',
    },
    {
        name: 'Salvatore Ferragamo',
        price: '149',
        details: '(M)',
        imgSrc: 'img/featured-img/salvatore-ferragamo.jpg',
    }
]

for (let i in featuredProducts) {
    const newFigure = document.createElement('figure');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    const newFigcaption = document.createElement('figcaption');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    const newSpan = document.createElement('span');
    const newDiv = document.createElement('div');

    const featuredContent = document.getElementById('featuredContent');
    const discountsContent = document.getElementById('discountsContent');
    console.log(featuredContent);

    featuredContent.appendChild(newFigure);
    newFigure.appendChild(newA);
    newA.appendChild(newImg);


    newFigure.appendChild(newFigcaption);
    newFigcaption.appendChild(newH4);
    newFigcaption.appendChild(newP);
    newFigcaption.appendChild(newSpan);
    newFigcaption.appendChild(newDiv);

    newImg.setAttribute('src', featuredProducts[i].imgSrc);
    newH4.innerHTML = featuredProducts[i].name;
    newSpan.innerHTML += featuredProducts[i].price + ' ' + 'Lei';
    newP.innerHTML = featuredProducts[i].details;
}

// discountedPrice
const discountedProducts = [{
    name: 'Calvin Klein Beauty',
    price: '299',
    discountedPrice: '109',
    details: 'Perfume Water, 100ml, (F)',
    imgSrc: 'img/discounted-img/Calvin Klein - Beauty.jpg'
},
{
    name: 'Joop!',
    price: '166',
    discountedPrice: '99',
    details: 'Toilet water, 100ml, (M)',
    imgSrc: 'img/discounted-img/Joop!.jpg'
},
{
    name: 'Hugo Boss Bottled',
    price: '428',
    discountedPrice: '164',
    details: 'Toilet Water, 100ml, (M)',
    imgSrc: 'img/discounted-img/Hugo Boss Bottled.jpg'
},
{
    name: 'Hugo Boss Bottled - Collection',
    price: '279',
    discountedPrice: '199',
    details: 'Toilet Water, 3x30ml, (M)',
    imgSrc: 'img/discounted-img/Hugo Boss - Bottled set.jpg'
}]

for (let i in discountedProducts) {
    const newFigure = document.createElement('figure');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    const newFigcaption = document.createElement('figcaption');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    const newSpan = document.createElement('span');
    const newDiv = document.createElement('div');

    const discountedContent = document.getElementById('discountsContent');

    discountedContent.appendChild(newFigure);
    newFigure.appendChild(newA);
    newA.appendChild(newImg);


    newFigure.appendChild(newFigcaption);
    newFigcaption.appendChild(newH4);
    newFigcaption.appendChild(newP);
    newFigcaption.appendChild(newDiv);
    newFigcaption.appendChild(newSpan);

    newImg.setAttribute('src', discountedProducts[i].imgSrc);
    newH4.innerHTML = discountedProducts[i].name;
    newDiv.innerHTML = discountedProducts[i].discountedPrice + ' Lei';
    newSpan.innerHTML = discountedProducts[i].price + ' Lei';
    newP.innerHTML = discountedProducts[i].details;
}

//Accessories

const accessories = [
    {
        name: 'Silver Bracelet - model FIG31110',
        price: '22',
        details: 'Silver 740, Length: 19cm',
        imgSrc: 'img/accesories-img/brata argin model FIG31110.jpg',
    },
    {
        name: 'Silver Bracelet',
        price: '229',
        details: 'Argint 925, Length: 18cm + 4.5cm adjust',
        imgSrc: 'img/accesories-img/bratara argint.jpg',
    },
    {
        name: 'Mallorca pearls bracelet',
        price: '95',
        details: '8mm rounds pearls, 925-silver lock, Length:19.5cm',
        imgSrc: 'img/accesories-img/bratara perle mallorca.jpg',
    },
    {
        name: 'Silver Bracelet',
        price: '105',
        details: 'Silver 925, Length: 18cm/20cm',
        imgSrc: 'img/accesories-img/bratara placata cu argint.jpg',
    },
    {
        name: 'Handcrafted bracelet (name)',
        price: '232',
        details: 'Gold 14k, customizable dimensions',
        imgSrc: 'img/accesories-img/bratara snur p.jpg',
    },
    {
        name: 'Handcrafted bracelet(heart)',
        price: '124',
        details: 'Gold 14k, customizable dimensions',
        imgSrc: 'img/accesories-img/bratara snur rosu cu pandantiv.jpg',
    },
    {
        name: 'Hancrafted Bracelet (crux)',
        price: '130',
        details: 'Gold 14k, customizable dimensions',
        imgSrc: 'img/accesories-img/bratara snur rosu.jpg',
    },
    {
        name: 'Silver Bracelet - model 203B160',
        price: '32',
        details: 'Silver 740, Length: 19cm',
        imgSrc: 'img/accesories-img/bratara-argint.jpg',
    }
]

for(let i in accessories){
    const newFigure = document.createElement('figure');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    const newFigcaption = document.createElement('figcaption');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    const newSpan = document.createElement('span');
    const newDiv = document.createElement('div');

    const accessoriesContent = document.getElementById('accessoriesContent');

    accessoriesContent.appendChild(newFigure);
    newFigure.appendChild(newA);
    newA.appendChild(newImg);


    newFigure.appendChild(newFigcaption);
    newFigcaption.appendChild(newH4);
    newFigcaption.appendChild(newP);
    newFigcaption.appendChild(newSpan);
    
    newImg.setAttribute('src', accessories[i].imgSrc);
    newH4.innerHTML = accessories[i].name;
    newSpan.innerHTML = accessories[i].price + ' Lei';
    newP.innerHTML = accessories[i].details;
}


