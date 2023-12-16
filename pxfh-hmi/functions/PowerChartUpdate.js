// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function PowerChartUpdate(lineChart) {
                console.log(lineChart);
                
                lineChart.setLineGraphData(
                    [
                        [
                            {
                                "x": 0,
                                "y": 0
                            },
                            {
                                "x": 10,
                                "y": 50
                            },
                            {
                                "x": 20,
                                "y": 50
                            },
                            {
                                "x": 30,
                                "y": 0
                            },
                            {
                                "x": 35,
                                "y": 0
                            },
                            {
                                "x": 40,
                                "y": 100
                            },
                            {
                                "x": 50,
                                "y": 100
                            },
                            {
                                "x": 60,
                                "y": 0
                            },
                            {
                                "x": 70,
                                "y": 0
                            }
                        ]
                    ]
                );
                
            }
            pxfh_hmi.PowerChartUpdate = PowerChartUpdate;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('PowerChartUpdate', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.PowerChartUpdate);
