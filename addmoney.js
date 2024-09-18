
let currentbalance=document.getElementById('cash');
const pinNumber=document.getElementById('pinNumber');
const addmoneyButton=document.getElementById('addmoney');
addmoneyButton.addEventListener('click' ,function(event){

const amountadd=document.getElementById('amount');
event.preventDefault();
if(pinNumber.value=="12345"){
    let newbalance=parseFloat(currentbalance.innerText)+parseFloat(amountadd.value);
   currentbalance.innerText=newbalance;
   pinNumber.value='';
   amountadd.value='';
}

else{
    alert('wrong pin try letter')
}

})


