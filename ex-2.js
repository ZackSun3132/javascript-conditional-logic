//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
lightBulbStatus = "Broken";
let light;
if (lightBulbStatus === "On")
    {
        light = ("Light bulb is On.");
    }
    else if (lightBulbStatus === "Off")
    {
        light = ("Light bulb is Off.");
    }
    else if (lightBulbStatus === "Broken")
    {
        light = ("Light bulb is Broken.");
    }
    else
    {
        light = ("Please choose the correct input (On/Off/Broken)");
    }
    console.log(light);