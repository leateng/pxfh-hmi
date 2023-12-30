// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function CalcPowerLineData() {
                var selectedPowerSchedule = TcHmi.Symbol.readEx('%i%selectedPowerSchedule2%/i%');

                const PowerTimeUp   = selectedPowerSchedule[0];
                const PowerTimeWeld = selectedPowerSchedule[1];
                const PowerTimeDown = selectedPowerSchedule[2];
                const PowerTimeCool = selectedPowerSchedule[3];

                const PowerTimeUp2   = selectedPowerSchedule[4];
                const PowerTimeWeld2 = selectedPowerSchedule[5];
                const PowerTimeDown2 = selectedPowerSchedule[6];
                const PowerTimeHold  = selectedPowerSchedule[7];

                const PowerVoltage1 = selectedPowerSchedule[8];
                const PowerVoltage2 = selectedPowerSchedule[9];

                const x1 = PowerTimeUp;
                const x2 = x1 + PowerTimeWeld;
                const x3 = x2 + PowerTimeDown;
                const x4 = x3 + PowerTimeCool;
                const x5 = x4 + PowerTimeUp2;
                const x6 = x5 + PowerTimeWeld2;
                const x7 = x6 + PowerTimeDown2;
                const x8 = x7 + PowerTimeHold;

                const data =  [
                    [
                        { "x": 0, "y": 0 },
                        { "x": x1, "y": PowerVoltage1},
                        { "x": x2, "y": PowerVoltage1 },
                        { "x": x3, "y": 0 },
                        { "x": x4, "y": 0 },
                        { "x": x5, "y": PowerVoltage2 },
                        { "x": x6, "y": PowerVoltage2 },
                        { "x": x7, "y": 0 },
                        { "x": x8, "y": 0 },
                    ]
                ];

                console.log(data);
                return data;
            }
            pxfh_hmi.CalcPowerLineData = CalcPowerLineData;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CalcPowerLineData', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.CalcPowerLineData);
