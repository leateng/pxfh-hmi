// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function UpdatePowerScheduleBar(powerSchedule, barchart) {
                var data = [];
                for (var i = 1; i <= 12; i++) {
                    var stageTarget = powerSchedule[`stageTarget${i}`];
                    var heatRatio = powerSchedule[`heatRatio${i}`];

                    for (var j = 0; j < stageTarget; j++) {
                        data.push(heatRatio);
                    }
                };

                barchart.setBarGraphData([data]);
            }
            pxfh_hmi.UpdatePowerScheduleBar = UpdatePowerScheduleBar;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdatePowerScheduleBar', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.UpdatePowerScheduleBar);
