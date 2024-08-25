
function convert(){
  var text1 = document.querySelector("textarea");
  var len=character =0;
  len = text1.value.length;
  var line=word =1;
   var i ;
   if(text1.value==0){
    character =0;
    word=0;
    line =0;
  }
for( i=0; i<len;i++){
   character=character+1;
   if(text1.value[i]=='\n'){
    character=character-1;
   }
  if(text1.value[i]=='\n' || text1.value[i]==" "){
    if(text1.value[i+1]!==undefined ){
    word = word+1;
    }
}
   if (text1.value[i]=='\n'){
    if(text1.value[i+1]!==undefined )
      line=line+1;
      } 
    }
   alert("Number of Character : " +character +"\nNumber of Word : "+word+ "\nNumber of Line : "+line);
}
    


