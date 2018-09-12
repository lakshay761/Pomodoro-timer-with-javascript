var sTime,bTime,sTimeSec,bTimeSec;
var time,num,intervalId,intervalIdB;
//var x,y;
document.getElementById("btime").innerHTML= 5;
document.getElementById("stime").innerHTML= 25;
/////////////////break timer////////////////
function breakStarts(){
  bTime = eval(document.getElementById("btime").innerHTML) ;
  bTimeSec = bTime*60;
  document.getElementById("process").innerHTML = "Enjoy your Break!!";
  document.getElementById("time").innerHTML = bTimeSec;
  //console.log(document.getElementById("time").innerHTML);
  intervalIdB = setInterval(myTimerB, 1000);
}
function myTimerB(){
  //y = eval(document.getElementById("time").innerHTML) ;
  //console.log(bTimeSec);
  if(bTimeSec==1){
    clearInterval(intervalIdB);
    document.getElementById("process").innerHTML = "Break Finished!!..Set new time and start again";
  }
   bTimeSec -= 1;
    if(bTimeSec%60>=10){
  document.getElementById("time").innerHTML =Math.floor(bTimeSec/60) +":"+ bTimeSec%60;
  }
  else if(bTimeSec%60<10){
  document.getElementById("time").innerHTML =Math.floor(bTimeSec/60) +":0"+ bTimeSec%60;
  }
}
////////////////session timer////////////
function myTimer(){
   if(sTimeSec==1){
   clearInterval(intervalId);
   breakStarts();  
  }
  sTimeSec -= 1;
  if(sTimeSec%60>=10){
  document.getElementById("time").innerHTML =Math.floor(sTimeSec/60) +":"+ sTimeSec%60;
  }
  else if(sTimeSec%60<10){
  document.getElementById("time").innerHTML =Math.floor(sTimeSec/60) +":0"+ sTimeSec%60;
  }
}
function thisIsIt() {
  sTime = eval(document.getElementById("stime").innerHTML) ;
  sTimeSec = sTime*60;
  document.getElementById("process").innerHTML = "Session In Progress";
  document.getElementById("time").innerHTML = sTimeSec;
  intervalId = setInterval(myTimer, 1000);
}
//////////////////set time///////////////
function bplus(){
   x = eval(document.getElementById("btime").innerHTML) ;
   x += 1;
  document.getElementById("btime").innerHTML = x;
}
function bminus(){
    x = eval(document.getElementById("btime").innerHTML) ;
   x -= 1;
  document.getElementById("btime").innerHTML = x;
}
function splus(){
   x = eval(document.getElementById("stime").innerHTML) ;
   x += 1;
  document.getElementById("stime").innerHTML = x;
}
function sminus(){
    x = eval(document.getElementById("stime").innerHTML) ;
   x -= 1;
  document.getElementById("stime").innerHTML = x;
}