/**
 * @author: Mark Gable
 * @fileOverview: An example of the Factory design pattern
 */

// http://codepen.io/mgable43/pen/rsjGC

/** @namespace */
var myPizzaFactory = (function () {
    "use strict";
    /**
     * simplePizzaFactory constructs a simplePizzaFactory object
     * @param {string} type pizza type
     * @method createPizza
     * @returns {object} pizza object
     */
    var simplePizzaFactory = function  () {
            return {
                createPizza : function (type) {
                    var pizza = "unknown";
                    if (type === "cheese") {
                        pizza = cheesePizza();
                    }else if (type === "pepperoni") {
                        pizza = pepperoniPizza();
                    }
                    return pizza;
                }
            }
        },

        /**
         * pizzaStore constructs a pizzaStore object
         * @param {object} factory simplePizzaFactory object
         * @method orderPizza
         * @returns {object} pizza object
         * @note This is an example of a Factory design pattern
         */
        pizzaStore = function  (factory) {
            return {
                orderPizza : function (type) {
                    var pizza = factory.createPizza (type);
                    console.info ( pizza.prepare() );
                    console.info ( pizza.bake() );
                    console.info ( pizza.cut() );
                    console.info ( pizza.box() );
                    return pizza;
                }
            }
        },

        /**
         * pizza constructs a pizza object
         * @param {object} specs specifies pizza characteristics
         * @returns {object} pizza object
         */
        pizza = function (specs){
            return {
                name: specs.name || "unknown",
                dough: specs.dough || "unknown",
                sauce: specs.sauce || "unknown",
                prepare: specs.prepare || function () { return "Preparing " + this.name },
                bake: specs.bake || function () { return "Bake for 25 minutes at 350" },
                cut: specs.cut || function () { return "Cutting pizza into diagonal slices" },
                box: specs.box || function () { return "Place pizza in box" },
            }
        },

        /**
         * cheesePizza constructs a cheesePizza object
         * @returns {object} cheese pizza object
         */
        cheesePizza = function () {
            return pizza ({
                name: "cheese pizza",
                dough: "thin crust",
                sauce: "Marinara sauce",
                cut: function () { return "Cutting the pizza into squares" }
            });
        },

        /**
         * pepperoniPizza constructs a pepperoniPizza object
         * @returns {object} pepperoni pizza object
         */
        pepperoniPizza = function () {
            return pizza ({
                name: "pepperoni pizza",
                dough: "thick crust",
                sauce: "Plum sauce",
                bake: function () { return "Bake for 30 minutes at 325" }
            });
        };

    var store = pizzaStore(simplePizzaFactory());
    store.orderPizza ("cheese");
    store.orderPizza ("pepperoni");
})();