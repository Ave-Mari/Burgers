const menu = [
    {
        id: 1,
        title: 'Блю чиз бургер',
        category: 'burger',
        price: 450,
        weight: 356,
        img: './../src/scss/components/images/bluecheese.jpg',
        desc: 'Бургер с котлетой из мраморной говядины, сыром дор блю,томатами, маринованным огурцом, листьями салата и фирменным коктейльным соусом'
    }, 
     {
        id: 2,
        title: 'Чизбургер',
        category: 'burger',
        price: 390,
        weight: 363,
        img: './../src/scss/components/images/cheeseburger.jpg',
        desc: 'Классический чизбургер с котлетой из мраморной говядины, сыром чеддер, томатами, маринованным огурцом, листьями салата, коктейльным и сырным соусaми'
    },
     {
        id: 3,
        title: 'DORKY PORKY',
        category: 'burger',
        price: 390,
        weight: 351,
        img: './../src/scss/components/images/dorki.jpg',
        desc: 'Бургер с котлетой из мрaморной говядины, жаренным беконом, томатами, листьями салата, маринованным огурцом и фирменным коктейльным соусом'
    },
     {
        id: 4,
        title: 'Double Чизбургер',
        category: 'burger',
        price: 485,
        weight: 570,
        img: './../src/scss/components/images/doublecheese.jpg',
        desc: 'Чизбургер с двойной котлетой из мрaморной говядины, двойной порцией сыра чеддер, томатами, маринованным огурцом, листьями салата и фирменным коктейльным соусом'
    },
    {
        id: 5,
        title: 'Гамбургер',
        category: 'burger',
        price: 340,
        weight: 331,
        img: './../src/scss/components/images/hamburger.jpg',
        desc: 'Классический гамбургер с котлетой из мраморной говядины, томатами, маринованным огурцом, листьями салата и фирменным коктейльным соусом'
    },
     {
        id: 6,
        title: 'Чизбургер Junior',
        category: 'burger',
        price: 270,
        weight: 278,
        img: './../src/scss/components/images/cheesejunior.jpg',
        desc: 'Классический мини-чизбургер с сочной котлетой из мраморной говядины, сыром чеддер, спелыми помидорами, маринованным огурцом, нежными хрустящими листьями салата латук, коктейльным и сырным соусами на пышной пшеничной булке'
    },
     {
        id: 7,
        title: 'Гамбургер Junior',
        category: 'burger',
        price: 250,
        weight: 251,
        img: './../src/scss/components/images/hamburgerjunior.jpg',
        desc: 'Классический мини-гамбургер с сочной котлетой из мраморной говядины, спелыми помидорами, маринованным огурцом, нежными хрустящими листьями салата латук и фирменным коктейльным соусом на пышной пшеничной булке'
    },
     {
        id: 8,
        title: 'Картофель фри',
        category: 'snacks',
        price: 190,
        weight: 150,
        img: './../src/scss/components/images/chips.jpg',
        desc: 'Хрустящий картофель фри. Рекомендуем дополнить фирменными соусами'
    },
     {
        id: 9,
        title: 'Картофель слайсы',
        category: 'snacks',
        price: 190,
        weight: 150,
        img: './../src/scss/components/images/chips2.jpg',
        desc: 'Ломтики свежего картофеля, обжаренные во фритюре. Рекомендуем дополнить фирменными соусами.'
    },
     {
        id: 10,
        title: 'Coca-Cola 0,33',
        category: 'drinks',
        price: 130,
        weight: 330,
        img: './../src/scss/components/images/cola2.jpg',
        desc: ''
    },
     {
        id: 11,
        title: 'Coca-Cola 0,25 энерджи без сахара',
        category: 'drinks',
        price: 130,
        weight: 250,
        img: './../src/scss/components/images/cola.jpg',
        desc: ''
    },
    {
        id: 12,
        title: 'Fanta 0,33',
        category: 'drinks',
        price: 130,
        weight: 330,
        img: './../src/scss/components/images/fanta.jpg',
        desc: ''
    },
    {
        id: 13,
        title: 'Sprite 0,33',
        category: 'drinks',
        price: 130,
        weight: 330,
        img: './../src/scss/components/images/sprite.jpg',
        desc: ''
    },
    {
        id: 14,
        title: 'Red Bull 0,25 без сахара',
        category: 'drinks',
        price: 160,
        weight: 250,
        img: './../src/scss/components/images/redbull.jpg',
        desc: ''
    },
    {
        id: 15,
        title: 'СОК РИЧ 0,25 яблоко',
        category: 'drinks',
        price: 120,
        weight: 250,
        img: './../src/scss/components/images/juice1.jpg',
        desc: ''
    },
    {
        id: 16,
        title: 'СОК РИЧ 0,25 персик',
        category: 'drinks',
        price: 120,
        weight: 250,
        img: './../src/scss/components/images/juice2.jpg',
        desc: ''
    },
    {
        id: 17,
        title: 'СОК РИЧ 0,25 апельсин',
        category: 'drinks',
        price: 120,
        weight: 250,
        img: './../src/scss/components/images/juice3.jpg',
        desc: ''
    },

]




const sectionWrapper = document.querySelector('.products__wrapper');

window.addEventListener('DOMContentLoaded', function() {
    let displayMenu = menu.map(function(item) {
        return `
        <div class="product__item">
        <div class="product__visual">                        
            <img src="${item.img}" alt="${item.title}" class="product__img">
            <div class="product__price">${item.price}₽</div>
            <div class="product__weight">${item.weight} г</div>
        </div>
        <div class="product__details">
            <h1 class="product__name">${item.title}</h1>
            <div class="product__desc">${item.desc}</div>
         </div>
    </div>
        `;
    });
    displayMenu = displayMenu.join('');
    sectionWrapper.innerHTML = displayMenu;
})