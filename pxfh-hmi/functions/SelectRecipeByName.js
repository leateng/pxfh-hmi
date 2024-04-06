// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function SelectRecipeByName(RecipeCombo, RecipeName) {
                setTimeout(function () {
                    var keys = Object.keys(RecipeCombo.getSrcData());
                    console.log(keys);
                    console.log(RecipeName);
                    var targetIndex = 0;
                    for (var i = 0; i < keys.length; i++) {
                        if (keys[i] == RecipeName) {
                            targetIndex = i;
                        }
                    }
                    RecipeCombo.setSelectedIndex(targetIndex);
                }, 1000);
            }
            pxfh_hmi.SelectRecipeByName = SelectRecipeByName;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SelectRecipeByName', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.SelectRecipeByName);
