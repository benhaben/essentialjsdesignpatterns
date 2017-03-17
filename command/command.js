/**
 * Created by shenyin.sy on 17/3/17.
 */

var carManager = {

    // request information
    requestInfo: function (model, id) {
        console.log("The information for " + model + " with ID " + id + " is foobar");
    },

    // purchase the car
    buyVehicle: function (model, id) {
        console.log("You have successfully purchased Item " + id + ", a " + model);
    },

    // arrange a viewing
    arrangeViewing: function (model, id) {
        console.log("You have successfully booked a viewing of " + model + " ( " + id + " ) ");
    }

};

carManager.execute = function (name) {
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
};

carManager.execute("arrangeViewing", "Ferrari", "14523");
carManager.execute("requestInfo", "Ford Mondeo", "54323");
carManager.execute("requestInfo", "Ford Escort", "34232");
carManager.execute("buyVehicle", "Ford Escort", "34232");