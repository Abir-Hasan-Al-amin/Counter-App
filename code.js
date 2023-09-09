const btn=document.querySelectorAll("button");
const num=document.querySelector("#num");
let value=0;
btn.forEach(button =>{
    button.addEventListener('click',e =>{
        if(e.target.id == 'in'){
            value++;
        }else if(e.target.id == 'de'){
            value--;
        }else{
            value=0
        }
        if(value>0){
            num.style.color="green";
        }else if(value<0){
            num.style.color="red";
        }else{
            num.style.color="black";
        }
        num.textContent=value;
    });
});