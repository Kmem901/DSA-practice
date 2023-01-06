const isPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  };

  const uncompress = (s) => {
    const result = [];
    const numbers = '0123456789'
    let i = 0;
    let j = 0;
    while (j < s.length) {
      if (numbers.includes(s[j])) {
        j += 1;
      } else {
        const num = Number(s.slice(i,j));
        for (let count = 0; count < num; count += 1) {
          result.push(s[j])
        }
        j += 1;
        i = j;
      }
    } return result.join('')
  };

  const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;
    let count = 0;
    while (j < s.length + 1) {
      if (s[i] === s[j]) {
        j += 1;
        count += 1;
      } else {
        if (count === 1) {
          result.push(s[i]);
        } else {
          result.push(String(count));
          result.push(s[i]);
        }
        i = j;
        count = 0;
      }
    } return result.join('')
  };
