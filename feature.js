const addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(event){

event.preventDefault();
    document.getElementById('addform').classList.remove('hidden');
    document.getElementById('cashoutform').classList.add('hidden');
console.log('dfg');
})

const cashoutbtn=document.getElementById('cashoutbtn');
cashoutbtn.addEventListener('click',function(event){
event.preventDefault();
document.getElementById('cashoutform').classList.remove('hidden');
document.getElementById('addform').classList.add('hidden');
})