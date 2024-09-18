const addmoney=document.getElementById('addmoney');
addmoney.addEventListener("click",function(event){
let amount =document.getElementById('amount');
const pinNumber=document.getElementById('pinNumber');
let currentBalance=document.getElementById('cash');

event.preventDefault();
if(pinNumber.value=="12345"){
   let newbalance=Number(currentBalance.innerText)+parseFloat(amount.value);
    currentBalance.innerText=newbalance;
 console.log(newbalance);
 amount.value='';
 pinNumber.value='';
}
else{
    alert('wrong pin')
}
})