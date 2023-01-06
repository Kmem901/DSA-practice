const anagrams = (s1, s2) => {
    const s1Count = {};

    for (let letter of s1) {
      if (s1Count[letter] === undefined) {
        s1Count[letter] = 1;
      } else {
        s1Count[letter] += 1;
      }
    }
    for (let letter of s2) {
      if (s1Count[letter] === undefined) {
        return false;
      } else {
        s1Count[letter] -= 1;
      }
    }
    for (let item in s1Count) {
      if (!(s1Count[item] === 0)) {
        return false;
      }
    } return true;
  };
