function scoreCalculator(arr) {
  // do work here
  if (Array.isArray(arr)) {
    let finalScore = 0;

    if (arr.length === 0) {
      finalScore = -1;
      return finalScore;
    } else if (arr.every(e => e < 5)) {
      finalScore = arr;
      finalScore.push(100);
    } else {
      finalScore = arr;
    }

    return finalScore
      .map(e => {
        return e < 5
          ? (e = 10)
          : (e = 5 && e <= 10 ? (e = 5) : e === 100 ? (e = 100) : (e = 0));
      })
      .reduce((p, c) => p + c);
  } else {
    throw new Error("Not an array");
  }
}

module.exports = scoreCalculator;
