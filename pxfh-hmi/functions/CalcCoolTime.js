// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function CalcCoolTime(axis, recipe, schedule, textControl) {
                // console.log(`==CalcCoolTime ${axis}`);

                var velocity = null;
                var pointDistance = null;
                var powerTimeUp = schedule.powerTimeUp || 0;
                var powerTimeWeld = schedule.powerTimeWeld || 0;
                var powerTimeDown = schedule.powerTimeDown || 0;
                var powerTimeUp2 = schedule.powerTimeUp2 || 0;
                var powerTimeWeld2 = schedule.powerTimeWeld2 || 0;
                var powerTimeDown2 = schedule.powerTimeDown2 || 0;
                var originPowerTimeCool = schedule.powerTimeCool || 0;

                if (axis == "x") {
                    velocity = recipe.lrX2WeldVelocity;
                    pointDistance = recipe.lrWeldXPointDistance;
                } else {
                    velocity = recipe.lrYWeldVelocity;
                    pointDistance = recipe.lrWeldYPointDistance;
                }

                if (velocity == null || pointDistance == null) {
                    console.log("velocity || pointDistance is null");
                    return;
                }

                var pointTime = (pointDistance / velocity) * 1000;
                var powerTimeCool = (pointTime - powerTimeUp - powerTimeWeld - powerTimeDown - powerTimeUp2 - powerTimeWeld2 - powerTimeDown2);

                // console.log(`velocity ${velocity}`);
                // console.log(`pointDistance ${pointDistance}`);
                // 
                // console.log(`powerTimeUp ${powerTimeUp}`);
                // console.log(`powerTimeWeld ${powerTimeWeld}`);
                // console.log(`powerTimeDown ${powerTimeDown}`);
                // console.log(`powerTimeUp2 ${powerTimeUp2}`);
                // console.log(`powerTimeWeld2 ${powerTimeWeld2}`);
                // console.log(`powerTimeDown2 ${powerTimeDown2}`);
                // console.log(`originPowerTimeCool //$ {originPowerTimeCool}`);
                // 
                // console.log(`==pointTime ${pointTime}`);
                // console.log(`==powerTimeCool ${powerTimeCool}`);


                if (isNaN(powerTimeCool)) {
                    console.log("calculated coolTime is Nan, abort!");
                    return;
                }

                if (powerTimeCool < 0) {
                    console.log("calculated coolTime < 0, abort!");
                    return;
                }

                if (Math.abs(originPowerTimeCool - powerTimeCool) < 0.01) {
                    console.log("calculated coolTime not changed!");
                    return;
                }

                // console.log(`write calculated coolTime=${powerTimeCool}`)
                // console.log(`write calculated Math.round(powerTimeCool)=${Math.round(powerTimeCool)}`)
                // textControl.setValue(powerTimeCool);
                // schedule['powerTimeCool'] = powerTimeCool;
                // TcHmi.Symbol.writeEx('%i%PowerScheduleStore%/i%', schedule);

                var roundpowerTimeCool = Math.round(powerTimeCool);
                if (axis == "x") {
                    TcHmi.Symbol.writeEx('%i%XPowerSchedule::powerTimeCool%/i%', roundpowerTimeCool);
                } else {
                    TcHmi.Symbol.writeEx('%i%YPowerSchedule::powerTimeCool%/i%', roundpowerTimeCool);
                }
            }
            pxfh_hmi.CalcCoolTime = CalcCoolTime;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CalcCoolTime', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.CalcCoolTime);
