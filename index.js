var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

var dice1="dice "+n1+".png";
var dice2="dice "+n2+".png";

var image=document.querySelectorAll("img")[0]
image.setAttribute("src", dice1);
var image1=document.querySelectorAll("img")[1]
image1.setAttribute("src", dice2);
if(dice1>dice2){
    document.querySelector("h2").innerHTML="Player 1 WON";
}else if(dice1<dice2){
    document.querySelector("h2").innerHTML="Player 2 WON";
}else{
    document.querySelector("h2").innerHTML="DRAW";
}
