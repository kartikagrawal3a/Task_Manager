
function fun(){

n=document.getElementById("slct").value;
m = document.getElementById("min").value;
if(n=="Select" || m==""){
	alert("Please Choose Valid Option");
}
else{
document.getElementById("content1").innerHTML = n;
document.getElementById("time").style.display = "block";

min = m;
second = min*60;
let contentmain = document.getElementById("content");
var fun1 = setInterval(myfun,1000);

function myfun(){
	if (second>=0) {
		let hrs = Math.floor(second/3600);
		let minutes = Math.floor((second/60)%60);
		let sec= Math.floor(second%60);
		hrs = hrs<10?"0"+hrs:hrs;
		minutes = minutes<10?"0"+minutes:minutes;
		sec = sec<10?"0"+sec:sec;	
		contentmain.innerHTML =hrs+":"+minutes+":"+sec;
		second--;
	}
	else{
		clearInterval(fun1);
		alert("Time Completed");
	}
}
}
}

function fun2(){
	document.getElementById("slct").value = "Select";
	document.getElementById("min").value = "";
}