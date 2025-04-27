//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let light;
lightBulbStatus == "On" ? (light = "Light bulb is On.") : 
lightBulbStatus == "Off" ? (light = "Light bulb is Off.") :
(light = "Please choose the correct input (On/Off)");
    console.log(light);