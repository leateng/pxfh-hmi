// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function CalcPowerLineData() {
                const PowerVoltage1 = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerVoltage1%/ctrl%").getValue();
                const PowerVoltage2 = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerVoltage2%/ctrl%").getValue();

                const PowerTimeUp = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeUp%/ctrl%").getValue();
                const PowerTimeWeld = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeWeld%/ctrl%").getValue();
                const PowerTimeDown = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeDown%/ctrl%").getValue();
                const PowerTimeCool = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeCool%/ctrl%").getValue();

                const PowerTimeUp2 = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeUp2%/ctrl%").getValue();
                const PowerTimeWeld2 = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeWeld2%/ctrl%").getValue();
                const PowerTimeDown2 = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeDown2%/ctrl%").getValue();
                const PowerTimeHold = TcHmi.Symbol.readEx("%ctrl%TcHmiNumericInput_PowerTimeHold%/ctrl%").getValue();

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
