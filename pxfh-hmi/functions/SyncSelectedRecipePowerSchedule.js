// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function SyncSelectedRecipePowerSchedule(recipeName) {
                console.log(`SyncSelectedRecipePowerSchedule=${recipeName}`);

                var defaultPower = {
                    "heatRatio1": 100,
                    "heatRatio10": 100,
                    "heatRatio11": 100,
                    "heatRatio12": 100,
                    "heatRatio2": 100,
                    "heatRatio3": 100,
                    "heatRatio4": 100,
                    "heatRatio5": 100,
                    "heatRatio6": 100,
                    "heatRatio7": 100,
                    "heatRatio8": 100,
                    "heatRatio9": 100,
                    "powerAmpere1": 100,
                    "powerAmpere2": 200,
                    "powerTimeCool": 10,
                    "powerTimeDown": 3,
                    "powerTimeDown2": 3,
                    "powerTimeUp": 3,
                    "powerTimeUp2": 3,
                    "powerTimeWeld": 5,
                    "powerTimeWeld2": 5,
                    "stageTarget1": 5,
                    "stageTarget10": 0,
                    "stageTarget11": 0,
                    "stageTarget12": 0,
                    "stageTarget2": 50,
                    "stageTarget3": 5,
                    "stageTarget4": 0,
                    "stageTarget5": 0,
                    "stageTarget6": 0,
                    "stageTarget7": 0,
                    "stageTarget8": 0,
                    "stageTarget9": 0,
                    "timeRatio1": 100,
                    "timeRatio10": 100,
                    "timeRatio11": 100,
                    "timeRatio12": 100,
                    "timeRatio2": 100,
                    "timeRatio3": 100,
                    "timeRatio4": 100,
                    "timeRatio5": 100,
                    "timeRatio6": 100,
                    "timeRatio7": 100,
                    "timeRatio8": 100,
                    "timeRatio9": 100,
                    "name": "default"
                };


                // var recipeName = TcHmi.Symbol.readEx("%ctrl%TcHmiRecipeSelect::SelectedRecipeName%/ctrl%");
                var PowerScheduleStore = TcHmi.Symbol.readEx("%i%PowerScheduleStore%/i%");
                var XPowerSchedule = PowerScheduleStore[`${recipeName}_power_x`] || defaultPower;
                var YPowerSchedule = PowerScheduleStore[`${recipeName}_power_y`] || defaultPower;
                var schedules = [XPowerSchedule, YPowerSchedule];
                TcHmi.Symbol.writeEx("%s%PLC1.GVL_HMI.aScheduleInfo%/s%", JSON.stringify(schedules), function (data) {
                    if (data.error != TcHmi.Errors.NONE) {
                        error = data.error;
                        console.log(`sync selected recipe power schedule error=${TcHmi.Errors[error]}`);
                    } else {
                        console.log("sync selected recipe power schedule sussess.");
                    }
                });
            }
            pxfh_hmi.SyncSelectedRecipePowerSchedule = SyncSelectedRecipePowerSchedule;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SyncSelectedRecipePowerSchedule', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.SyncSelectedRecipePowerSchedule);
