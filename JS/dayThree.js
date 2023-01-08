const mostFrequentChar = (s) => {
    const character = {};
    for (let letter of s) {
      if (character[letter] === undefined) {
        character[letter] = 1;
      } else {
        character[letter] += 1;
      }
    }
    let maxValue = 0;
    let maxKey = "";
    for (let key in character) {
      if (character[key] > maxValue) {
        maxValue = character[key];
        maxKey = key;
      }
    }
    return maxKey;
  };
