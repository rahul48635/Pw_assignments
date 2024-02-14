function countWordOccurrences(sentence) {
    const words = sentence.split(" ");
    const wordMap = new Map();
  
    words.forEach(word => {
      const count = wordMap.get(word) || 0;
      wordMap.set(word, count + 1);
    });
  
    return wordMap;
  }
  const sentence = "the quick brown fox jumps over the lazy dog";
  const wordOccurrences = countWordOccurrences(sentence);
  console.log(wordOccurrences);