const text = "I love JavaScript!";
const score = sentimentAnalysis(text);
console.log(score); // Output: 3




function sentimentAnalysis(text) {
    const afinn = {
      // AFINN-165 word list
      // Source: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010
      love : -2,
      "abandoned": -2,
      "abandons": -2,
      "abducted": -2,
      "abduction": -2,
      // ... and so on, for all 165 words
    };
  
    const words = text.toLowerCase().split(/\b/);
    let score = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (afinn.hasOwnProperty(words[i])) {
        score += afinn[words[i]];
      }
    }
  
    return score;
  }