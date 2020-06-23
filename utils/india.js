const fetch = require('node-fetch');

const url = 'https://api.covid19india.org/data.json';

const indianData = async () =>{
    const response = await fetch(url);
    const json     = await response.json();
    const obj      = json.statewise[0];
    return obj; 
}

module.exports = indianData