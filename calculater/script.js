let screendisplay=document.getElementById('screendisplay')

function number(num){
    screendisplay.value +=num;
}
function calculate (){
    try{
        
      
        screendisplay.value=eval(screendisplay.value)
        
    }
    catch(err){
        alert('invalid')
        screendisplay.value=""
    }
}
function cler(){
    screendisplay.value="";
}
function delet(){
    screendisplay.value=screendisplay.value.slice(0,-1)
}