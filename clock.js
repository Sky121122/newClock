let monthEl = document.getElementById("month");
let dayEl = document.getElementById("day")
let dateEl = document.getElementById("date")
let yearEl = document.getElementById("year")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let thisDate = new Date();


let month = thisDate.getMonth();

function clock(){
    monthEl.innerText = thisDate.toLocaleString("en",{
        month:"long"
    });
    
    dayEl.innerText = thisDate.toLocaleString("en",{
        weekday:"long"
    });
    
    dateEl.innerText = thisDate.getDate();
    yearEl.innerText = thisDate.getFullYear();    
}
clock();
let count = 0;

btn.addEventListener('click',function(){
   if(count == 0){
    console.log("hello yis 9s saey")
    monthEl.innerText = thisDate.toLocaleString("hin",{
        month:"long"
    });
    
    dayEl.innerText = thisDate.toLocaleString("hin",{
        weekday:"long"
    });
    
    dateEl.innerText = thisDate.getDate();
    yearEl.innerText = thisDate.getFullYear(); 
   } 

})
btn2.addEventListener('click',function(){
    clock()
})