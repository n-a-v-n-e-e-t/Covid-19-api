google.charts.load('current', {
    'packages':['geochart'],
    'packages':['geochart'],
    'packages':['corechart'],
    'packages':['corechart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
let countrydata;
let timelineData;
getcovidData = async() =>{
    const url = 'https://api.covid19india.org/data.json';
    let response = await fetch(url);
    //console.log(response);
    response = await response.json();
    response = response.statewise;
    //console.log(response);
    let i = 0;
    let array = [['State','Cases']];
    for(i=1;i<response.length;i++)
    {
        temp = []
        if(response[i].state=='Odisha')
            response[i].state = 'Orissa';
        if(response[i].state=='Uttarakhand')
            response[i].state = 'IN-UT';
        temp.push(response[i].state);
        temp.push(response[i].confirmed-0);
        array.push(temp);
//        array.push([response[i].state,response[i].confirmed-0]);
    }   
    return array;
}

google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {   
    var options = {
        colorAxis:{colors:['#abfbff','#00688B']},
        region:'IN',
        resolution: 'provinces'
    };
    var data = new google.visualization.arrayToDataTable(countrydata);
    var chart = new google.visualization.GeoChart(document.getElementById('IndianMap'));
    chart.draw(data, options);
}

getcovidData()
.then(array=>{
    countrydata = array;  
})
.catch(err=>console.log);

Timeline = async() =>{
    const url = 'https://api.covid19india.org/data.json';
    let response = await fetch(url);
    const json = await response.json();
    response = json.cases_time_series;
   // console.log('response : ',response);
    let array = [['date','new cases']];
    let i = 0;
    for(i=32;i<response.length;i++)
    {   
        array.push([response[i].date.substring(0,6),Number(response[i].dailyconfirmed)]);
        i++;
    }
    return array;
}

Timeline()
.then(array =>{
    timelineData = array;
   // console.log(timelineData);
    google.charts.setOnLoadCallback(drawChart);
})
.catch(err=>console.log(err));


const drawChart = function() {
        var data = google.visualization.arrayToDataTable(timelineData)

        var options ={
            curveType: 'function',
            title: 'Daily New Cases from 1st March',
            colors: ['#336B87'],
            vAxis:{
                    viewWindow: {min: 0},
                    title: 'Cases'
                },
            hAxis:{
                title: 'Days'
            },
            animation:{
                duration: 1500,
                easing: 'linear',
                startup: true
              }
          }
       
        var chart = new google.visualization.LineChart(document.getElementById('LineGraph'));

        chart.draw(data, options);
      }
