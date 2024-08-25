
function convert()
{
var num=document.querySelector("#num").value;
var word = document.querySelector("#word");

if(num=="")
{
    word.value=" ";
alert("Not a Number");

}
else if (num<0 || num>999)
{
alert("Out of Range");
}
else
{
var len=num.length;
var words="";

for(var i=0;i<len;i++)
{
 if(num[i]=='0'){
        words+=" Zero";
     }
if(num[i]==1){
    words+=" One";
 }
if(num[i]==2){
    words+=" Two";
 }
 if(num[i]==3){
    words+=" Three";
 }
if(num[i]==4){
    words+=" Four";
 }
if(num[i]==5){
    words.value+=" Five";
 }
 if(num[i]==6){
    words+=" Six";
 }
 if(num[i]==7){
    words+=" Seven";
 }
 if(num[i]==8){
    words+=" Eight";
 }
 if(num[i]==9){
    words+=" Nine";
 }
}
word.value=words;
}

}


