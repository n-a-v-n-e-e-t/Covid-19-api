const fetch = require('node-fetch');

const globalurl = 'https://api.covid19api.com/summary';

const getGlobal_data = async () => {
    const response = await fetch(globalurl);   
    const json = await response.json();
//    console.log(json.Global);
    return json.Global;
}

module.exports = getGlobal_data