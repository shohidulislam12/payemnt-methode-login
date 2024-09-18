const loginButton=document.getElementById('login');
loginButton.addEventListener("click",function(event){
event.preventDefault();
const phoneNumber=document.getElementById('phone_number').value;
const pinNumber=document.getElementById('pinNumber').value;
console.log(pinNumber);
if(phoneNumber==="555"&& pinNumber==="1234"){
    document.location.href="home.html";

}
else{
    alert("wrong phon or password")
}
})