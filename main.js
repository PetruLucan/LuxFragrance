

const perfumes = [
    {
        name: 'Chopard Wish',
        price: '102',
        details: 'Cologne (F)',
        imgSrc: 'img/chpard-wish.jpg'
    },
    {
        name: 'Christian Dior Sauvage',
        price: '269',
        details: 'Cologne (F)',
        imgSrc: 'img/christian-dior-sauvage.png'
    },
    {
        name: 'Davidoff Cool',
        price: '79',
        details: '',
        imgSrc: 'img/davidoff-cool.jpg',
    },
    {
        name: 'Calvin Klein',
        price: '79',
        details: '',
        imgSrc: 'img/clavin-klein.jpg'
    },
    {
        name: 'Jean Paul Gaultier',
        price: '189',
        details: '(F)',
        imgSrc: 'img/jean-paul-gaultier.jpg',
    },
    {
        name: 'Lacoste',
        price: '139',
        details: '(F)',
        imgSrc: 'img/lacoste-pour-femme.jpg',
    },
    {
        name: 'Pacco Rabbane - 1 Million',
        price: '211',
        details: '(M)',
        imgSrc: 'img/paco-rabbane.jpg',
    },
    {
        name: 'Salvatore Ferragamo',
        price: '149',
        details: '(M)',
        imgSrc: 'img/salvatore-ferragamo.jpg',
    }
]
for (let i in perfumes) {
    var newFigure = document.createElement('figure');
    var newA = document.createElement('a');
    var newImg = document.createElement('img');
    var newFigcaption = document.createElement('figcaption');
    var newH4 = document.createElement('h4');
    var newP = document.createElement('p');
    var newSpan = document.createElement('span');

    var featuredContent = document.getElementById('content');
    console.log(featuredContent);

    featuredContent.appendChild(newFigure);
    newFigure.appendChild(newA);
    newA.appendChild(newImg);


    newFigure.appendChild(newFigcaption);
    newFigcaption.appendChild(newH4);
    newFigcaption.appendChild(newP);
    newH4.appendChild(newSpan);
    console.log(newH4)

    newImg.setAttribute('src', perfumes[i].imgSrc);
    newH4.innerHTML = perfumes[i].name /*+ ' ' + perfumes[i].price + 'lei'*/;
    newSpan.innerHTML = perfumes[i].price + ' ' + 'lei';
    newP.innerHTML = perfumes[i].details;
}
