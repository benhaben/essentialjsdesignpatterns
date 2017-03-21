/**
 * Created by shenyin.sy on 17/3/21.
 */
//  Code Reuse: Decorator Pattern
//===============================

//What we previously had was: Drink datatype and SodaDrink datatype that inherits from Drink. This design isn't the best but it simple and as long as it stays simple im okay with this code.

//But what if we wanted to accomoate other people, because others like SodaDrink in different ways, some like ice, some like lemon.

//One way to solve this is by inheritance, but we might want to combine these types, SodaDrinkWithLemonAndIce . In this example we have tiny differences and in such situation the decorator pattern helps.

/*Base: Drink*/
/*************/
function Drink(name) {
    this.name = name;
}
Drink.prototype.tasteDrink = function() {
    return "I am tasting " + this.name;
}

/*SodaDrink*/
/*************/
function SodaDrink(type) {
    Drink.call(this, "soda");
    this.type = type;
}
SodaDrink.prototype = Object.create(Drink.prototype);
SodaDrink.prototype.price = function() {
    return 10; //regular size
}

SodaDrink.small = function(sodaObject) { //method on the soda object
                                         //we take the object, and modify it's price according to small size
    var currentPrice = sodaObject.price();
    sodaObject.price = function() {
        return currentPrice - 2;
    }
}

SodaDrink.regular = function(sodaObject) {}

SodaDrink.large = function(sodaObject) {
    var currentPrice = sodaObject.price();
    sodaObject.price = function() {
        return currentPrice + 2;
    }
}

SodaDrink.lemon = function(sodaObject) {
    var currentPrice = sodaObject.price();
    sodaObject.price = function() {
        return currentPrice + .5;
    }
}

SodaDrink.ice = function(sodaObject) {
    var currentPrice = sodaObject.price();
    sodaObject.price = function() {
        return currentPrice + .25;
    }
}

SodaDrink.extreme = function(sodaObject) {
    SodaDrink.ice(sodaObject);
    SodaDrink.lemon(sodaObject);
    SodaDrink.large(sodaObject);

    var currentPrice = sodaObject.price();
    sodaObject.price = function() {
        return currentPrice;
    }
}

var soda = new SodaDrink("Pepsi Cola");
addResult("Soda's price is now = " + soda.price());
SodaDrink.extreme(soda);
addResult("Soda's extreme price is now = " + soda.price());

//============================================================
function addResult(text) {
    console.log(text);
    // $('#result').append(text + "<br/>");
}