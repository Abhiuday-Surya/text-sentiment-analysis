import sentiment from 'sentiment';
var sentimentobj = new sentiment();
var docx = sentimentobj.analyze("i like mango ");
var com = docx.comparative;
document.getElementById("myBtn").addEventListener("click",showMsg);

function showMsg(){
alert("hello world");
}