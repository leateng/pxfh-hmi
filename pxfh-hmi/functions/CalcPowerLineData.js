// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function CalcPowerLineData() {
                var selectedPowerSchedule = TcHmi.Symbol.readEx('%i%selectedPowerSchedule%/i%');

                const x1 = selectedPowerSchedule.powerTimeUp;
                const x2 = x1 + selectedPowerSchedule.powerTimeWeld;
                const x3 = x2 + selectedPowerSchedule.powerTimeDown;
                const x4 = x3 + selectedPowerSchedule.powerTimeCool;
                const x5 = x4 + selectedPowerSchedule.powerTimeUp2;
                const x6 = x5 + selectedPowerSchedule.powerTimeWeld2;
                const x7 = x6 + selectedPowerSchedule.powerTimeDown2;

                const data =  [
                    [
                        { "x": 0, "y": 0 },
                        { "x": x1, "y": selectedPowerSchedule.powerAmpere1},
                        { "x": x2, "y": selectedPowerSchedule.powerAmpere1 },
                        { "x": x3, "y": 0 },
                        { "x": x4, "y": 0 },
                        { "x": x5, "y": selectedPowerSchedule.powerAmpere2 },
                        { "x": x6, "y": selectedPowerSchedule.powerAmpere2 },
                        { "x": x7, "y": 0 },
                    ]
                ];

                return data;
            }
            pxfh_hmi.CalcPowerLineData = CalcPowerLineData;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CalcPowerLineData', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.CalcPowerLineData);
