const confirmed = document.querySelector('.card-text.confirmed');
const actual_confirmed = confirmed.textContent;
    let output = 0;
    const timer1 = setInterval(() => {
        confirmed.textContent = output;
       output = output + 250000;
       if(output > actual_confirmed - 500000 )
        {
            confirmed.textContent = actual_confirmed;
            clearInterval(timer1);
        }
    },50);

    const deceased = document.querySelector('.card-text.deceased');
    const actual_deceased = deceased.textContent;
             output = 0;
            const timer3 = setInterval(() => {
                deceased.textContent = output;
               output = output + 20000;
               if(output > actual_deceased - 40000 )
                {
                    deceased.textContent = actual_deceased;
                    clearInterval(timer3);
                }
            },50);

const recovered = document.querySelector('.card-text.recovered');
const actual_recovered = recovered.textContent;
     output = 0;
    const timer2 = setInterval(() => {
        recovered.textContent = output;
       output = output + 125000;
       if(output > actual_recovered - 200000 )
        {
            recovered.textContent = actual_recovered;
            clearInterval(timer2);
        }
    },50);
    
