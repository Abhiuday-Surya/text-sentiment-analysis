var sentiment = require('sentiment');
var sentimentobj = new sentiment();
var docx = sentimentobj.analyze("i like mango ");
console.log(docx);