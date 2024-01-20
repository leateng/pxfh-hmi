// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function UpdatePowerSchedule(scheduleIndex, value) {
                const index = scheduleIndex - 1;
                const symbol = `%s%PLC1.MAIN.powerSchedules[${index}]%/s%`
                console.log(value);
                TcHmi.Symbol.writeEx(symbol, JSON.stringify(value), function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        console.log(`update power schedule ${scheduleIndex} success`)
                    } else {
                        const msg = `update power schedule ${scheduleIndex} failed: ${TcHmi.Errors[data.error]}`;
                        alert(msg);
                    }
                });
            }
            pxfh_hmi.UpdatePowerSchedule = UpdatePowerSchedule;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdatePowerSchedule', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.UpdatePowerSchedule);
