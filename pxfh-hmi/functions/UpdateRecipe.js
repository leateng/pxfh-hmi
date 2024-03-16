// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function UpdateRecipe(recipeName, values) {
                console.log(`===UpdateRecipe[${recipeName}]`);
                var error = null;

                TcHmi.Server.RecipeManagement.updateRecipe(recipeName, null, values, function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        var XPowerSchedule = TcHmi.Symbol.readEx("%i%XPowerSchedule%/i%");
                        var YPowerSchedule = TcHmi.Symbol.readEx("%i%YPowerSchedule%/i%");
                        var PowerScheduleStore = TcHmi.Symbol.readEx("%i%PowerScheduleStore%/i%");

                        XPowerSchedule['name'] = `${recipeName}_power_x`;
                        YPowerSchedule['name'] = `${recipeName}_power_y`;

                        PowerScheduleStore[`${recipeName}_power_x`] = XPowerSchedule;
                        PowerScheduleStore[`${recipeName}_power_y`] = YPowerSchedule;

                        TcHmi.Symbol.writeEx('%i%PowerScheduleStore%/i%', PowerScheduleStore,         function (data) {
                                if (data.error != TcHmi.Errors.NONE) {
                                    error = data.error;   
                                } 
                        });

                    } else {
                        error = data.error;
                    }
                });

                if (error == null) {
                    // Inform the system that we are done
                    $.toast({
                        heading: 'Success',
                        text: "Update Power Schedule success.",
                        position: 'top-center',
                        icon: 'success',
                    });
                } else {
                    // Inform the system that we are done but had an error
                    var errMsg = `update schedule ${recipeName} failed: ${TcHmi.Errors[error]}`;
                    $.toast({
                        heading: 'Error',
                        text: errMsg,
                        position: 'top-center',
                        icon: 'error',
                    })
                }
            }
            pxfh_hmi.UpdateRecipe = UpdateRecipe;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateRecipe', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.UpdateRecipe);
