const fetch = require('node-fetch');


const getData = async () =>{
    const response = await fetch('https://api.covid19india.org/data.json');
    const json     = await response.json();
    const obj      = json.statewise[0];

    return obj; 
}


module.exports = getData