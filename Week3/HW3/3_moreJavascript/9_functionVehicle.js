let vehicle = ["tram","metro"];
let newVehicle = ["motorbike", "caravan", "bike"];
vehicle.push(...newVehicle);

function vehicleType(color, code, age) {
let type = vehicle[code];
    ( age > 2) ? condition = "used" : condition = "new" ;
    console.log("a" + " " + color +" " + condition + " "+ type)
};

vehicleType("green", 4, 1);
// prints: a green new bike