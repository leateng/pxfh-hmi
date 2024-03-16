// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function DeleteRecipe(recipeName) {
                console.log(`==delete recipe ${recipeName}`);
                var error = null;

                TcHmi.Server.RecipeManagement.deleteRecipe(
                    recipeName,
                    null,
                    function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            var PowerScheduleStore = TcHmi.Symbol.readEx("%i%PowerScheduleStore%/i%");
                            delete PowerScheduleStore[`${recipeName}_power_x`]
                            delete PowerScheduleStore[`${recipeName}_power_y`]
                            TcHmi.Symbol.writeEx('%i%PowerScheduleStore%/i%', PowerScheduleStore, function (data) {
                                if (data.error != TcHmi.Errors.NONE) {
                                    error = data.error;
                                }
                            });
                        } else {
                            error = data.error;
                        }

                        if (error == null) {
                            // Inform the system that we are done
                            $.toast({
                                heading: 'Success',
                                text: `Delete recipe ${recipeName} success.`,
                                position: 'top-center',
                                icon: 'success',
                            });
                        } else {
                            // Inform the system that we are done but had an error
                            var errMsg = `Delete recipe ${recipeName} failed: ${TcHmi.Errors[error]}`;
                            $.toast({
                                heading: 'Error',
                                text: errMsg,
                                position: 'top-center',
                                icon: 'error',
                            })
                        }
                    }
                );

            }
            pxfh_hmi.DeleteRecipe = DeleteRecipe;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('DeleteRecipe', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.DeleteRecipe);
