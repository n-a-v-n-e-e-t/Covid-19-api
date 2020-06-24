google.charts.load('current', {
    'packages':['geochart'],
    'packages':['geochart'],
    'packages':['corechart'],
    'packages':['corechart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
var covidData = [[]];
var country_data = [[]];

getdata = async () => {
    const url = 'https://www.trackcorona.live/api/countries';
    let response = await fetch(url);
    response = await response.json();
    response = response.data;
    let i = 0;
    let array = [ ['Country', 'Cases']];
    for(i=1;i<response.length;i++)
    {
        temp = [];
        temp.push(response[i].country_code);
        temp.push(response[i].confirmed);
        array.push(temp);
    }
    return array;
}
drawRegionsMap = function() {   
        var data = new google.visualization.arrayToDataTable(covidData);

        var options = {
             colorAxis:{colors:['#63D1F4','#00688B']},
             magnifyingGlass :{
                enable: true, 
                zoomFactor: 7.5
             }
        };
        var chart = new google.visualization.GeoChart(document.getElementById('WorldMap'));
        chart.draw(data, options);
}

getdata().then(array => {
    covidData = array;
    google.charts.setOnLoadCallback(drawRegionsMap);})
.catch(err=> console.log(err));


WorstAffectedCountries = async () =>{
    const url = 'https://coronavirus-19-api.herokuapp.com/countries';
    let response = await fetch(url);
    response  = await response.json();
    let array = [['Country','Cases']];
    let i =0;
    for(i=1;i<6;i++)
        array.push([response[i].country,response[i].cases]);
    return array;
};


drawChart = function() {
    //console.log(country_data);
    var data = new google.visualization.arrayToDataTable(country_data);
      const options = {
          colors : ['#339cff'],
          title: "Worst hit countries due to Covid-19",
        animation:{
            duration: 1500,
            easing: 'in',
            startup: true
          }
      }
    var chart = new google.visualization.ColumnChart(document.getElementById('colGraph'));
    chart.draw(data, options);
  }

WorstAffectedCountries().then(data=>{
    country_data = data;
    google.charts.setOnLoadCallback(drawChart);
})
.catch(err=>console.log(err));
const ColumnGraphDiv = document.querySelector('#colGraph');

ColumnGraphDiv.addEventListener('onshow',()=>{
console.log('working');
});
