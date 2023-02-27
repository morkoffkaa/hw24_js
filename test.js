// Мережа фастфудів пропонує кілька видів гамбургерів:
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)



class Hamburger {
    static SIZE_SMALL = 'small';
    static SIZE_BIG = 'big';

    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';

    static TOPPING_SAUCE = 'sause';
    static TOPPING_MAYO = 'mayo';

    _size = '';
    _stuffing = '';
    _sauce = '';
    _price = 0;
    _calories = 0;

    constructor(size, stuff) {
        this.size = size;
        this.stuff = stuff;
    }
}


calculatePrice(type) {
    switch (type) {
        case (Hamburger.SIZE_SMALL):
            return 20;

        case (Hamburger.SIZE_BIG):
            return 40;

        case (Hamburger.STUFFING_CHEESE):
            return 20;

        case (Hamburger.STUFFING_SALAD):
            return 5;

        case (Hamburger.STUFFING_POTATO):
            return 10;

        case (Hamburger.TOPPING_SAUCE):
            return 15;

        case (Hamburger.TOPPING_MAYO):
            return 20;
        default:
            return 0;
    }
};


calculateCalories(type) {
    switch (type) {
        case (Hamburger.SIZE_SMALL):
            return 50;

        case (Hamburger.SIZE_BIG):
            return 100;

        case (Hamburger.STUFFING_CHEESE):
            return 10;

        case (Hamburger.STUFFING_SALAD):
            return 20;

        case (Hamburger.STUFFING_POTATO):
            return 15;

        case (Hamburger.TOPPING_SAUCE):
            return 0;

        case (Hamburger.TOPPING_MAYO):
            return 5;
        default:
            return 0;
    }
};

calculatePrice() {
    this._price += this.calculatePrice(this._size);
    this._calories += this.calculatePrice(this._stuffing);

    return this._price;
};

calculateCalories() {
    this._calories += this.calculateCalories(this._size);
    this._calories += this.calculateCalories(this._stuffing);

    return this._calories;
};

addTopping(topping) {
    this._calories += this.calculateCalories(topping);
    this._price += this.calculatePrice(topping);
};


const cheeseburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
cheeseburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories : ${cheeseburger.calculateCalories()}`);
console.log(`Price: ${cheeseburger.calculatePrice()}`);



