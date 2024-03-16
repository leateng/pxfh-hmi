// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function InitAnalogDiscStatusArray() {
                console.log("InitAnalogDiscStatusArray");

                // init cellMatrix
                var defaultStatus = [];
                for (var i = 0; i < 256; i++) {
                    defaultStatus.push(1);
                }
                TcHmi.Symbol.writeEx("%s%PLC1.GVL_HMI.CellMatrix%/s%", defaultStatus, function (data) {
                    if (data.error != TcHmi.Errors.NONE) {
                        error = data.error;
                        console.log(`write cellMatrix error=${TcHmi.Errors[error]}`);
                    } else {
                        console.log("write cellMatrix sussess.");
                    }
                })
            }
            pxfh_hmi.InitAnalogDiscStatusArray = InitAnalogDiscStatusArray;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('InitAnalogDiscStatusArray', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.InitAnalogDiscStatusArray);
