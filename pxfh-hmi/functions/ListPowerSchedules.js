// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function ListPowerSchedules(ctx, schedules) {
                console.log("==== init power schedules");
                if (!schedules) {
                    // Inform the system that we are done and have a dummy result
                    ctx.success({});
                    return;    // We are running async so the return value is not used
                }

                // Build a flat array out of the recursive object
                var result = {};
                var length = schedules.length;
                for (i = 1; i <= length; i++) {
                    result[i] = schedules[i-1];
                }

                ctx.success(result);
                return;
            }
            pxfh_hmi.ListPowerSchedules = ListPowerSchedules;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ListPowerSchedules', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.ListPowerSchedules);
