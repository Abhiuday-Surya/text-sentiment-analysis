import sentiment from 'sentiment';

const sentimentObj = new sentiment();

const docx = sentimentObj.analyze('i like mango');
const com = docx.comparative;

function showMsg() {
  alert(`Sentiment score: ${com}`);
}

document.getElementById('myBtn').addEventListener('click', showMsg);
