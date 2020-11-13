function cards(){
 //   Используем класс для карточек
 class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }
    changeToUAH() {
        this.price *= this.transfer;
    }
    //   создание верстки
    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        this.parent.append(element);
    }
}

//Замена меню карточек и автоматизация их с сервером дабы каждую карт не прописывать
const getResource = async (url, data) => {
    const res = await fetch(url);
    if (!res.ok) { //фиксим то не выдает ошибку  HTTP запр

        throw new Error(`Couldn't fetch ${url}, status:${res.status}`);
    }
    return await res.json();
};

getResource('http://localhost:3000/menu') ///опт код для получение меню карточек с сервера
    .then(data => {
        data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
        }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    })

}
 
module.exports = cards;