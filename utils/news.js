const fetch = require('node-fetch');

let news = [];
const recentupdates = async () => {
    const response = await fetch('https://api.covid19india.org/updatelog/log.json');
    const json     = await response.json();
    const len = json.length -1;
    let i = 0;
    let update = [];
    for(i=len;i>len-5;i--)
        update.push(json[i].update);
    //console.log(update);
    return update;
}


module.exports = recentupdates