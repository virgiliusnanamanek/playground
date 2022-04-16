const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const value = document.querySelector('.value');
value.innerHTML = 0;

inc.addEventListener('click', ()=> {
  value.innerHTML ++;
});
dec.addEventListener('click', ()=> {
  value.innerHTML --;
  if(value.innerHTML < 0){
    alert("Nilai Negatif");
    value.innerHTML = 0;
  }
});