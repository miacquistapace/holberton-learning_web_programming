let mult = [];
for (let r = 0; r <=11;r++)
{
  mult[r] = new Array();
  for (let c = 0; c <=11; c++)
  {
    mult[r][c] = (r+1)*(c+1);
  }
}
var isFirst = true;
function show(){

document.getElementById("multTable").innerHTML = "";
for (let i = 0; i <=11; i++)
    document.getElementById("multTable").innerHTML += mult[i].join(" ") + "<br>";
document.getElementById("multTable").style.display = 'block';
document.getElementById("multTable").style.visibility = 'visible';
}

function hide(){
document.getElementById("multTable").style.visibility = 'hidden';
document.getElementById("multTable").style.display = 'none';
}
