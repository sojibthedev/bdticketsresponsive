const jsonData=[
    {
        "from": "Dhaka",
        "to": "Chittagong",
        "fare": 1100,
        "date":"11-06-24"
    },
    {
        "from": "Dhaka",
        "to": "Chittagong",
        "fare": 1100,
        "date":"30-04-24"
    },
    {
        "from": "Dhaka",
        "to": "Chittagong",
        "fare": 1100,
        "date":"01-05-24"
    },
    {
        "from": "Barisal",
        "to": "Chittagong",
        "fare": 900,
        "date":"11-05-24"
    },
    {
        "from": "Barisal",
        "to": "Chittagong",
        "fare": 1200,
        "date":"21-05-24"
    },
    {
        "from": "Barisal",
        "to": "Chittagong",
        "fare": 900,
        "date":"14-05-24"
    },
    {
        "from": "Barisal",
        "to": "Rajshahi",
        "fare": 1900,
        "date":"28-04-24"
    },
    {
        "from": "Barisal",
        "to": "Rajshahi",
        "fare": 1900,
        "date":"02-05-24"
    },
    {
        "from": "Rajshahi",
        "to": "Dhaka",
        "fare": 850,
        "date":"25-04-24",
        "bus_name": "Desh Travel",
        "bus_model":"#bdt006rajmetro"
    }
]
    var from=document.getElementById('soValue');
    var toData=document.getElementById('soValuetwo');
    var taking_data=document.getElementById('datapick');
    var gfrom=document.getElementById('form');
    var gto=document.getElementById('to');
    var gdates=document.getElementById('dates');
    var busnam=document.getElementById('bus_name');
    var busmod=document.getElementById('bus_model');
    var gfar=document.getElementById('far');
    var showmage=document.getElementById('showmage');
    var preloadder=document.getElementById('preloadder');
function datachacking(){
   

   if(from.value=="" || toData.value=="" || taking_data.value=="" ){
    alert("empty");
   }else{

 if(from.value==toData.value){
    alert("GOING FORM  TO");
     location.reload();
 }else{

    preloadder.className="showmageaddon";


    for(i=0;i<jsonData.length;i++){

   var date1 = new Date(taking_data.value);
   var date2 = new Date(test(jsonData[i].date));

    if(from.value===jsonData[i].from && toData.value===jsonData[i].to && date1.getTime()===date2.getTime()){
         gfrom.innerHTML=jsonData[i].from;
         gto.innerHTML=jsonData[i].to;
         gdates.innerHTML=jsonData[i].date;
         gfar.innerHTML=jsonData[i].fare;
         busmod.innerHTML=jsonData[i].bus_model;
         busnam.innerHTML=jsonData[i].bus_name;
        
        setInterval(loaddder, 4000);
         break;
        }else{
            if(jsonData.length-1==i){
                
                gdates.innerHTML="No bus available";
                gfrom.innerHTML="No bus available";
                gto.innerHTML="No bus available";
                gfar.innerHTML="No bus available";
                busnam.innerHTML="No bus available";
                busmod.innerHTML="No bus available";
                setInterval(loaddder, 4000);
            }
           
        }
     }
   }
}
}
function loaddder(){
 preloadder.className="showmageadd";
 showmage.className="showmageaddon";
}
function test(date){
    const myArray = date.split("-");
   return myArray[1]+"/"+myArray[0]+"/"+myArray[2];
}
function sweping(){
//console.log(from.value);
    var d=from.value;
    from.value=toData.value;
    toData.value=d;
}
const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click',function(){
     selectBox.classList.toggle('active');
    
});




optionsList.forEach(function(optionsListSingle){
     optionsListSingle.addEventListener('click',function(){
       text = this.textContent;   
       soValue.value = text;
       selectBox.classList.remove('active');
     });
});

optionSearch.addEventListener('keyup',function(){
    var filter, li, i, textValue;
     filter = optionSearch.value.toUpperCase();
     li = options.getElementsByTagName('li');
     for(i = 0; i < 7; i++){
          liCount = li[i];
           textValue = liCount.textContent;
           
          if(textValue.toUpperCase().indexOf(filter) > -1){
             li[i].style.display = '';  
          }else{
               li[i].style.display = 'none';
          }   
     }  

})




const selectBoxtwo = document.querySelector('.select-boxtwo');
const selectOptiontwo = document.querySelector('.select-optiontwo');
const soValuetwo = document.querySelector('#soValuetwo');
const optionSearchtwo = document.querySelector('#optionSearchtwo');
const optionstwo = document.querySelector('.optionstwo');
const optionsListtwo = document.querySelectorAll('.optionstwo li');

selectOptiontwo.addEventListener('click',function(){
     selectBoxtwo.classList.toggle('active');
    
});




optionsListtwo.forEach(function(optionsListSingletwo){
     optionsListSingletwo.addEventListener('click',function(){
       text = this.textContent;   
       soValuetwo.value = text;
       selectBoxtwo.classList.remove('active');
     });
});

optionSearchtwo.addEventListener('keyup',function(){
    var filter, li, i, textValuetwo;
     filter = optionSearch.value.toUpperCase();
     li = options.getElementsByTagName('li');
     for(i = 0; i < li.length; i++){
          liCount = li[i];
           textValuetwo = liCount.textContent;
           
          if(textValuetwo.toUpperCase().indexOf(filter) > -1){
             li[i].style.display = '';  
          }else{
               li[i].style.display = 'none';
          }
     }
})