// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function UpdateRecipe(recipeName, values) {
                console.log(`===recipe=${recipeName}`);
                console.log(values);

                TcHmi.Server.RecipeManagement.updateRecipe(recipeName, null, values, function (data) {
                    if (data.error) {
                        // Inform the system that we are done but had an error
                        var errMsg = `update schedule ${recipeName} failed: ${TcHmi.Errors[data.error]}`;
                        $.toast({
                            heading: 'Error',
                            text: errMsg,
                            position: 'top-center',
                            icon: 'error',
                        })

                        return;    // We are running async so the return value is not used
                    } else {
                        // Inform the system that we are done
                        $.toast({
                            heading: 'Success',
                            text: "Update Power Schedule success.",
                            position: 'top-center',
                            icon: 'success',
                        });

                        return;    // We are running async so the return value is not used
                    }
                });
            }
            pxfh_hmi.UpdateRecipe = UpdateRecipe;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateRecipe', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.UpdateRecipe);
