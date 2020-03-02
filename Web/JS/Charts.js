var arduinoData = [];
var timeChart = 0;
var TimesChartUpdated=0;
var ChartReplace = 0;
var WindChartConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            label: "Arduino stat    ion",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Wind speed C'
        }
    }
};
var WindChart = new Chart(document.getElementById("Wind speed-chart").getContext('2d'), WindChartConfig);
var TemperatureChartConfig={type: 'line',
    data: {
        labels: [6],
        datasets: [{
            data: [6],
            label: "Arduino station",
            borderColor: "#8e2ecd",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Temperatur C'
        }
    }
};
var TemperatureChart = new Chart(document.getElementById("Temperature-chart").getContext('2d'),TemperatureChartConfig);
var HumidityChartConfig = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            data: [0],
            label: "Arduino station",
            borderColor: "#66cd57",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Humidity %'
        }
    }
};
var HumidityChart = new Chart(document.getElementById("Humidity-chart").getContext('2d'), HumidityChartConfig);
var PressureChartConfig = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            data: [0],
            label: "Arduino station",
            borderColor: "#cdc02b",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Barometric pressure hPa'
        }
    }
};
var PressureChart = new Chart(document.getElementById("Barometric pressure-chart").getContext('2d'), PressureChartConfig);
var RainFallChartConfig = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            data: [0],
            label: "Arduino station",
            borderColor: "#cd172a",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Rain fall mm'
        }
    }
};
var RainFallChart = new Chart(document.getElementById("Rain fall-chart" ).getContext('2d'), RainFallChartConfig);
var WindDirectionChartConfig = {
    type: 'radar',
    data: {
        labels: ["  N", "NNE", "NE", "ENE", "E", "ESE", "SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],
        datasets: [{
            label: "neshto",
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(105, 0, 132, .2)',
            ],
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        },
            {
                label: "neshto 2",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: [
                    'rgba(0, 250, 220, .2)',
                ],
                borderColor: [
                    'rgba(0, 213, 132, .7)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
};
var WindDirectionChart = new Chart(document.getElementById("Wind Direction Chart").getContext('2d'), WindDirectionChartConfig);
var chartsConfig=[WindChartConfig,TemperatureChartConfig,HumidityChartConfig,PressureChartConfig,RainFallChartConfig];
var charts=[WindChart,TemperatureChart,HumidityChart,PressureChart,RainFallChart];
var dataBaseValues=['speed','temperature','humidity','pressure','rain'];
    $.getJSON('JS/server_data.php', {}, function(data) {
    })
            .done(function(data) {
                for (var j=0;j<5;j++){
                for (var i=0;i<6;i++){
                    console.log(data[dataBaseValues[i]]);
                    chartsConfig[j].data.datasets[0].data[i]=data[dataBaseValues[j]]['value'][i];
                    chartsConfig[j].data.labels[i]=data[dataBaseValues[j]]['timestamp'][i];
                }
                charts[j].update();}
        })
        .fail(function(err) {
            alert("There is a error with the JSON request to the php");
        });
// function RandomNum(range) {
//     var GeneratedNum=Math.floor(Math.random() * Math.floor(range));
//     return GeneratedNum;
// }
// function UpdateChartWithRandomNums(ChartToUpdate,ChartConfig, Time) {
//     if (counter>20) {
//         for (var x = 0; x<6; x++) {
//             if (x === 5) {
//                 ChartConfig.data.labels[x] = Time;
//                 ChartConfig.data.datasets[0].data[x] = RandomNum(10);
//             } else {
//                 ChartConfig.data.labels[x] = ChartConfig.data.labels[x + 1];
//                 ChartConfig.data.datasets[0].data[x] = ChartConfig.data.datasets[0].data[x + 1];
//             }
//         }
//     }
//     else {
//         ChartConfig.data.labels.push(Time);
//         ChartConfig.data.datasets[0].data.push(RandomNum(10));
//         ChartToUpdate.update();
//     }
// }
// function InfiteUpdatingChart(ChartToUpdate,ChartConfig,Value, Time) {
// for (var x = 0; x<6; x++){
//     if (ChartToUpdate===WindChart||ChartConfig===WindChartConfig||ChartToUpdate===WindChart){
//     if (x===5){
//         ChartConfig.data.labels[x] =Time;
//         ChartConfig.data.datasets[0].data[x]= RandomNum(10);
//     }
//     else    {
//         ChartConfig.data.labels[x] = ChartConfig.data.labels[x+1];
//         ChartConfig.data.datasets[0].data[x]=ChartConfig.data.datasets[0].data[x+1];
//     }
//     }
//     else {
//         if (x===5){
//             ChartConfig.data.labels[x] =Time;
//             ChartConfig.data.datasets[0].data[x]= Value;
//         }
//         else    {
//             ChartConfig.data.labels[x] = ChartConfig.data.labels[x+1];
//             ChartConfig.data.datasets[0].data[x]=ChartConfig.data.datasets[0].data[x+1];
//         }
//     }
// }
// ChartToUpdate.update();
// }
// function UpdateChart(ChartToUpdate,ChartConfig,Value, Time,counter) {
//     if (counter>20){
//         InfiteUpdatingChart(ChartToUpdate,ChartConfig,Value, Time);
//     }
//     else if (ChartToUpdate===WindChart||ChartConfig===WindChartConfig){
//         ChartConfig.data.labels.push(Time);
//         ChartConfig.data.datasets[0].data.push(RandomNum(10));
//         ChartToUpdate.update();
//     }
//     else    {
//         console.log(ChartConfig);
//         ChartConfig.data.labels.push(Time);
//         ChartConfig.data.datasets[0].data.push(Value);
//         ChartToUpdate.update();
//     }
// }
// function retrieveData(){
//     console.log("retrieveData");
//
//     $.getJSON( "http://blynk-cloud.com/UWTOAploXLDZ7e8fqY81foQMNUdhkJlt/get/V5", function( data ) {
//
//         var ArduinoInfo = data[0].split(",");
//         var currTime = addMinutes(timeChart);
//         var tempValue = [];
//         for (var j = 0; j < 7; j++) {
//             if (j === 3) {
//                 console.log("das");
//             }
//             if (j === 0 || j === 5) {
//                 tempValue[j] = parseInt(ArduinoInfo[j]);
//             } else {
//                 tempValue[j] = parseFloat(ArduinoInfo[j]).toFixed(2);
//             }
//         }
//             console.log(tempValue);
//             UpdateChart(WindChart,WindChartConfig,tempValue[1],currTime,timeChart);
//             UpdateChart(TemperatureChart,TemperatureChartConfig,tempValue[4],currTime,timeChart);
//             UpdateChart(HumidityChart,HumidityChartConfig,tempValue[5],currTime,timeChart);
//             UpdateChart(PressureChart,PressureChartConfig,tempValue[6],currTime,timeChart);
//             timeChart = timeChart + 5;
//             console.log(time);
//     })
// }
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// function addMinutes(seconds) {
//
//     var DateNow=new Date(today.getTime() + seconds*1000 + 7200000);
//     var StringDate=JSON.stringify(DateNow);
//     var Time=StringDate.split(" ");
//     Time=Time[0].split("T");
//     Time=Time[1].split(".");
//     Time=Time[0].split(":");
//     var TimeForCharts=Time[0]+":"+Time[1]+":"+Time[2];
//     return TimeForCharts;
// }
// setInterval(retrieveData, 5000);
// var i =0;
