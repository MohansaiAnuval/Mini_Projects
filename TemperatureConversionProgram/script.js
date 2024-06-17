const input = document.getElementById("input").value;
const c_f = document.getElementById("c-f");
const f_c = document.getElementById("f-c");
const button = document.getElementById("submit");
const display = document.getElementById("display");
let temp;


button.onclick=function(){
  if(c_f.checked){
    temp = Number(input);
    temp=temp*9/5+32;
    display.textContent=temp.toFixed(1)+"°F"
  }else if(f_c.checked){
    temp = Number(input);
    temp=(temp-32)*(5/9);
    display.textContent=temp.toFixed(1)+"°C"
  }
}
