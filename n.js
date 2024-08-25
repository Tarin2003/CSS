function convert()
{
var num=document.querySelector("#num").value;
var word = document.querySelector("#word");
var ones= ['', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
var  tens= ['', '', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];
var words="";
var hundred =" hundred";
if(num==""){
 word.value=" ";
alert("Not a Number");
}
else if (num<0 || num>999){
alert("Out of Range");
}
else if (num < 20) {
    words = ones[num];
    word.value=words;
}
else if(num.length==2){
    words += tens[num.charAt(0)];
    words += ones[num.charAt(1)];
    word.value=words;  
}
else if (num.length == 3) {
   words = ones[(num.charAt(0))] + hundred;
   var h=0;
   h = num.charAt(1)+num.charAt(2);
   if(h>=10 && h<=19){
    words += ones[h];
    word.value=words;
   }
   else{
    words += tens[(num.charAt(1))];
    words += ones[(num.charAt(2))];
    word.value=words;
   }  
}
}

