
const cashOutBtn=document.getElementById('cashout');
cashOutBtn.addEventListener('click',function(event){
    
const amountout=document.getElementById('amountout');
newbalance=parseFloat(currentbalance.innerText)-parseFloat(amountout.value);
let pinNumber=document.getElementById('pinNumber')
event.preventDefault();
const pinNumberout=document.getElementById('pinNumberout')
if(pinNumberout.value=="12345"){
    if(parseFloat(currentbalance.innerText)<amountout.value){
        alert("not enought balance")
    }
   else {
    currentbalance.innerText=newbalance;
    console.log(newbalance);
   }
}

else {
    alert('wrong pin');
}
});
