var sentiment = require('sentiment');
var sentimentobj = new sentiment();
var docx = sentimentobj.analyze("i like mango ");
var com = docx.comparative;
console.log(com);