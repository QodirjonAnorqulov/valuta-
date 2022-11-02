if (!window.localStorage.getItem('token')) {
    window.location.replace('./login.html')
}

const rates ={}
const elementUSD =document.querySelector('[data-value="USD"');
const elementEUR =document.querySelector('[data-value="EUR"');
const elementGBP =document.querySelector('[data-value="GBP"');


const input =document.querySelector('#input')
const result =document.querySelector('#result')
const select=document.querySelector('#select')
const closebtn= document.querySelector('#closebtn')





getCurrent();
setInterval(getCurrent,10000)


    
    async    function getCurrent(){

            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            const data = await response.json();
            const result =await data;
        


            rates.USD=result.Valute.USD;
            rates.EUR=result.Valute.EUR;
            rates.GBP=result.Valute.GBP;

            console.log(rates);

            elementUSD.textContent=rates.USD.Value.toFixed(3);
            elementEUR.textContent=rates.EUR.Value.toFixed(3);
            elementGBP.textContent=rates.GBP.Value.toFixed(3);

            //ranglar usd
            if(rates.USD.Value>rates.USD.Previous){
                elementUSD.classList.add('top');
            
            }else{
                elementUSD.classList.add('bottom');
            }
                  //ranglar eur
                  if(rates.EUR.Value>rates.EUR.Previous){
                    elementEUR.classList.add('top');
                
                }else{
                    elementEUR.classList.add('bottom');
                }
      //ranglar gbr
      if(rates.GBP.Value>rates.GBP.Previous){
        elementGBP.classList.add('top');
    
    }else{
        elementGBP.classList.add('bottom');
    }




        }

input.oninput=convertValue
select.oninput=convertValue


function convertValue(){
    result.value=(parseFloat(input.value) / rates[select.value].Value).toFixed(2)  
}
closebtn.addEventListener('click',()=>{
    window.localStorage.clear()
    window.location.replace("./login.html")
})