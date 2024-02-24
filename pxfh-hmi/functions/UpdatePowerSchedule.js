// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function UpdatePowerSchedule(scheduleIndex, value) {
                console.log(scheduleIndex)
                if (scheduleIndex == null) {
                    $.toast({
                        heading: 'Warning',
                        text: "Please select a schedule!",
                        position: 'top-center',
                        icon: 'warning',
                    });
                    return;
                }

                const index = scheduleIndex - 1;
                var error = TcHmi.Errors.NONE;

                // write to internal variable
                var symbol = `%i%powerScheduleArray[${index}]%/i%`
                TcHmi.Symbol.writeEx(symbol, JSON.stringify(value), function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        // write to PLC variable
                        var symbol = `%s%PLC1.GVL_HMI.aScheduleInfo[${index}]%/s%`
                        TcHmi.Symbol.writeEx(symbol, JSON.stringify(value), function (data) {
                            if (data.error != TcHmi.Errors.NONE) {
                                error = data.error;
                            }
                        });
                    }
                    else {
                        error = data.error;
                    }
                });

                if (error === TcHmi.Errors.NONE) {
                    $.toast({
                        heading: 'Success',
                        text: "Update Power Schedule success.",
                        position: 'top-center',
                        icon: 'success',
                    });
                } else {
                    var errMsg = `update power schedule ${scheduleIndex} failed: ${TcHmi.Errors[error]}`;
                    $.toast({
                        heading: 'Error',
                        text: errMsg,
                        position: 'top-center',
                        icon: 'error',
                    })
                }
            }
            pxfh_hmi.UpdatePowerSchedule = UpdatePowerSchedule;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdatePowerSchedule', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.UpdatePowerSchedule);
