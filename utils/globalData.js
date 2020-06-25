const fetch = require('node-fetch');

const globalurl = 'https://api.covid19api.com/summary';

const getGlobal_data = async () => {
    const response = await fetch(globalurl);   
    const json = await response.json();
//    console.log(json.Global);
    return json.Global;
}

const tabledata = async() =>{
//    const response  = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
    const response  = await fetch('https://api.covid19api.com/summary');
    const json      = await response.json();
    return json.Countries;
}

module.exports = { getGlobal_data:getGlobal_data,  tabledata:tabledata }