function bigSmall(num, bigMin, bigMax, smallMin, smallMax) {
  if (num >= bigMin && num <= bigMax) {
    return "Big";
  } else if (num >= smallMin && num <= smallMax) {
    return "Small";
  } else {
    return "Invalid input";
  }
}

function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let expectedResults = [
  "TOAK",
  "Streak",
  "Pair",
  "Half Streak",
  "Lose Cards",
];

function fantan1(num) {
  let remainder = num % 4;
  if (remainder === 0) {
    return ["4", "3,4", "2,4", "1,4", "2,3,4", "1,3,4", "1,2,4"];
  } else if (remainder === 1) {
    return ["1", "1,2", "1,3", "1,4", "1,3,4", "1,2,4", "1,2,3"];
  } else if (remainder === 2) {
    return ["2", "1,2", "2,3", "2,4", "2,3,4", "1,2,4", "1,2,3"];
  } else if (remainder === 3) {
    return ["3", "1,3", "2,3", "3,4", "2,3,4", "1,3,4", "1,2,3"];
  } else {
    return ["Invalid remainder"];
  }
}

function fantan2(num) {
  let remainder = num % 4;
  if (remainder === 0) {
    return [
      "4 Fan",
      "Even",
      "3 Horn 4",
      "1 Horn 4",
      "4 Thought 2",
      "4 Thought 3",
      "4 Thought 1",
    ];
  } else if (remainder === 1) {
    return [
      "1 Fan",
      "Odd",
      "1 Horn 4",
      "1 Horn 2",
      "1 Thoughts 2",
      "1 Thoughts 3",
      "1 Thoughts 4",
    ];
  } else if (remainder === 2) {
    return [
      "2 Fan",
      "Even",
      "1 Horn 2",
      "2 Horn 3",
      "2 Thoughts 1",
      "2 Thoughts 3",
      "3 Thoughts 4",
    ];
  } else if (remainder === 3) {
    return [
      "3 Fan",
      "Odd",
      "2 Horn 3",
      "3 Horn 4",
      "3 Thoughts 1",
      "3 Thoughts 2",
      "3 Thoughts 4",
    ];
  } else {
    return ["Invalid remainder"];
  }
}

function getColorRange(num) {
  if (num >= 0 && num <= 3) {
    return "Red";
  } else if (num >= 4 && num <= 7) {
    return "Orange";
  } else if (num >= 8 && num <= 11) {
    return "Yellow";
  } else if (num >= 12 && num <= 15) {
    return "Green deep";
  } else if (num >= 16 && num <= 19) {
    return "Green Light";
  } else if (num >= 20 && num <= 23) {
    return "Blue";
  } else if (num >= 24 && num <= 27) {
    return "Purple";
  } else {
    return "Invalid input";
  }
}

function naturalElements(number) {
  if (number >= 3 && number <= 7) {
    return "Wind";
  } else if (number >= 8 && number <= 10) {
    return "Fire";
  } else if (number >= 11 && number <= 13) {
    return "Thunder";
  } else if (number >= 14 && number <= 18) {
    return "Electricity";
  } else {
    return "Number out of range";
  }
}

function isPair(num1, num2, num3) {
  return num1 === num2 && num2 === num3;
}

function isTriple(num1, num2, num3) {
  return num1 === num2 && num2 === num3;
}

function getWinCombinations(num1, num2, num3) {
  const isBig = (num) => num >= 5 && num <= 9;
  const isSmall = (num) => num >= 0 && num <= 4;
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num !== 0 && num % 2 !== 0; // Corrected isOdd function

  const isAllBig = (num1, num2, num3) =>
    isBig(num1) && isBig(num2) && isBig(num3);
  const isAllSmall = (num1, num2, num3) =>
    isSmall(num1) && isSmall(num2) && isSmall(num3);
  const isAllEven = (num1, num2, num3) =>
    isEven(num1) && isEven(num2) && isEven(num3);
  const isAllOdd = (num1, num2, num3) =>
    isOdd(num1) && isOdd(num2) && isOdd(num3);

  const moreBig = isBig(num1) + isBig(num2) + isBig(num3) > 1;
  const moreSmall = isSmall(num1) + isSmall(num2) + isSmall(num3) > 1;
  const moreOdd = isOdd(num1) + isOdd(num2) + isOdd(num3) > 1;
  const moreEven = isEven(num1) + isEven(num2) + isEven(num3) > 1;

  const winCombinations = [];

  if (sPair([num1, num2, num3])[0]) {
    winCombinations.push("Pair");
  }
  if (moreBig) {
    winCombinations.push("More Big");
  }
  if (moreSmall) {
    winCombinations.push("More Small");
  }
  if (moreOdd) {
    winCombinations.push("More Odd");
  }
  if (moreEven) {
    winCombinations.push("More Even");
  }
  if (isAllBig(num1, num2, num3)) {
    winCombinations.push("All Big");
  }
  if (isAllSmall(num1, num2, num3)) {
    winCombinations.push("All Small");
  }
  if (isAllEven(num1, num2, num3)) {
    winCombinations.push("All Even");
  }
  if (isAllOdd(num1, num2, num3)) {
    winCombinations.push("All Odd");
  }
  if (!sPair([num1, num2, num3])[0]) {
    winCombinations.push("No Pair");
  }

  return winCombinations;
}

function sumAndRange(arr) {
  // Helper function to check if a string contains only digits
  const isNumeric = (str) => /^\d+$/.test(str);

  // Calculate the sum of numeric values in the array
  const sum = arr.reduce((acc, curr) => {
    if (isNumeric(curr)) {
      return acc + parseInt(curr);
    }
    return acc;
  }, 0);

  // Determine the range based on the sum
  if (sum >= 0 && sum <= 4) {
    return "0-4";
  } else if (sum >= 23 && sum <= 27) {
    return "23-27";
  } else {
    return `${sum}`; //`Sum is ${sum}`;
  }
}

function positionOfBallNode(nums) {
  const isBig = (num) => num >= 5 && num <= 9;
  const isSmall = (num) => num >= 0 && num <= 4;
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 !== 0;

  const result = nums.map((num, index) => {
    const position = index + 1;
    let oddEven;
    let bigSmall;
    if (isBig(num)) {
      bigSmall = "Big";
    } else if (isSmall(num)) {
      bigSmall = "Small";
    } else {
      bigSmall = null;
    }

    if (isEven(num)) {
      oddEven = "Even";
    } else if (isOdd(num)) {
      oddEven = "Odd";
    } else {
      oddEven = null;
    }

    return {
      position,
      number: `${num}`,
      bigSmall,
      oddEven,
    };
  });

  return result;
}

function findHighestPosition(arr) {
  const maxValue = Math.max(...arr);
  const position = ["Ten Thousand", "Thousand", "Hundred", "Ten", "Zero"];
  const maxIndexes = arr.reduce((indexes, value, index) => {
    if (value === maxValue) {
      indexes.push(position[index]);
    }
    return indexes;
  }, []);
  return maxIndexes;
}

function getDragonTiger(drawNumbers) {
  if (drawNumbers[0] > drawNumbers[4]) {
    return "Dragon";
  } else if (drawNumbers[0] < drawNumbers[4]) {
    return "Tiger";
  } else {
    return "Tie";
  }
}

function fiveDFantanResults(drawNumber, game, optionalBallPosition = 1) {
  const DRAW_NUMBERS = [...drawNumber];
  const GAME_RESULTS = [];
  const SUM_OF_THREE = DRAW_NUMBERS.slice(2).reduce(
    (acc, curr) => acc + curr,
    0
  );

  switch (game.toLowerCase()) {
    case "main area": {
      GAME_RESULTS.push(
        bigSmall(DRAW_NUMBERS, 23, 45, 0, 22),
        oddEven(DRAW_NUMBERS),
        getDragonTiger(DRAW_NUMBERS),
        ...findHighestPosition(DRAW_NUMBERS)
      );
      break;
    }
    case "fantan 1": {
      GAME_RESULTS.push(...fantan1(SUM_OF_THREE));
      break;
    }
    case "fantan 2": {
      GAME_RESULTS.push(...fantan2(SUM_OF_THREE));
      break;
    }
    case "sum of last 3": {
      GAME_RESULTS.push(
        // getColorRange(SUM_OF_THREE),
        // bigSmall(SUM_OF_THREE, 14, 27, 0, 13),
        // oddEven(SUM_OF_THREE),
        ...getWinCombinations(...DRAW_NUMBERS.slice(2))
      );
      break;
    }
    case "last 3 sums": {
      GAME_RESULTS.push(sumAndRange(DRAW_NUMBERS.slice(2)));
      break;
    }
    case "ball position": {
      const ballPositionObject = positionOfBallNode(DRAW_NUMBERS);
      const ballPositionValues = Object.values(ballPositionObject);
      const selectedBallPosition = ballPositionValues[optionalBallPosition - 1];
      const nonNumericValues = Object.values(selectedBallPosition).filter(
        (item) => typeof item !== "number"
      );
      GAME_RESULTS.push(...nonNumericValues);
      break;
    }
  }
  return GAME_RESULTS;
}

function pk10FantanResults(drawNumber, game, optionalBallPosition = 1) {
  const DRAW_NUMBERS = [...drawNumber];
  const FIRST_DRAW_NUMBER = [...drawNumber][0];
  const GAME_RESULTS = [];
  const SUM_OF_THREE = DRAW_NUMBERS.slice(0, 3).reduce(
    (acc, curr) => acc + curr,
    0
  );
  switch (game.toLowerCase()) {
    case "main area": {
      const ballPositionObject = positionOfBallNode([FIRST_DRAW_NUMBER]);
      const ballPositionValues = Object.values(ballPositionObject);
      const selectedBallPosition = ballPositionValues[optionalBallPosition - 1];
      const nonNumericValues = Object.values(selectedBallPosition).filter(
        (item) => typeof item !== "number"
      );
      GAME_RESULTS.push(
        ...nonNumericValues,
        bigSmall(SUM_OF_THREE, 17, 27, 6, 16),
        oddEven(SUM_OF_THREE)
      );
      break;
    }
    case "fantan 1": {
      GAME_RESULTS.push(...fantan1(SUM_OF_THREE));
      break;
    }
    case "fantan 2": {
      GAME_RESULTS.push(...fantan2(SUM_OF_THREE));
      break;
    }
    case "ball position": {
      const ballPositionObject = positionOfBallNode(DRAW_NUMBERS);
      const ballPositionValues = Object.values(ballPositionObject);
      const selectedBallPosition = ballPositionValues[optionalBallPosition - 1];
      const nonNumericValues = Object.values(selectedBallPosition).filter(
        (item) => typeof item !== "number"
      );
      GAME_RESULTS.push(...nonNumericValues);
      break;
    }
  }
  return GAME_RESULTS;
}

function fast3FantanResults(drawNumber, game, optionalBallPosition = 1) {
  const DRAW_NUMBERS = [...drawNumber];
  // const FIRST_DRAW_NUMBER = [...drawNumber][0];
  const GAME_RESULTS = [];
  const SUM_OF_THREE = DRAW_NUMBERS.slice(0, 3).reduce(
    (acc, curr) => acc + curr,
    0
  );
  switch (game.toLowerCase()) {
    case "main area": {
      GAME_RESULTS.push(
        bigSmall(SUM_OF_THREE, 11, 17, 4, 10),
        oddEven(SUM_OF_THREE),
        naturalElements(SUM_OF_THREE),
        ...DRAW_NUMBERS.map(String)
      );
      break;
    }
    case "short deck dice": {
      const [num1, num2, num3] = DRAW_NUMBERS;

      GAME_RESULTS.push(
        `${SUM_OF_THREE}`,
        sPair([num1, num2, num3])[0]
          ? sPair([num1, num2, num3])[1].join(",")
          : "",
        hasTriple([num1, num2, num3]) ? DRAW_NUMBERS.map(String).join(",") : ""
      );
      break;
    }
    case "miscellaneous long deck": {
      GAME_RESULTS.push(
        ...generateAllPairs(DRAW_NUMBERS).map(String),
        ...miscellaneousGames(DRAW_NUMBERS)
      );
      break;
    }
    case "ball position": {
      const ballPositionObject = positionOfBallNode(DRAW_NUMBERS);
      const ballPositionValues = Object.values(ballPositionObject);
      const selectedBallPosition = ballPositionValues[optionalBallPosition - 1];
      const nonNumericValues = Object.values(selectedBallPosition).filter(
        (item) => typeof item !== "number"
      );
      GAME_RESULTS.push(...nonNumericValues);
      break;
    }
  }
  return GAME_RESULTS.filter((item) => item !== "");
}

function returnCountOfNumbers(drawNumbers) {
  let count = {};
  drawNumbers.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  });
  return count;
}

function hasTriple(drawNumbers) {
  const countOfNumbers =
    Object.values(returnCountOfNumbers(drawNumbers))[0] === 3;

  return countOfNumbers;
}

function hasPair(drawNumbers) {
  const countOfNumbers = Object.values(
    returnCountOfNumbers(drawNumbers)
  ).includes(2);

  return countOfNumbers;
}

function sPair(drawNumbers) {
  const countOfNumbers = returnCountOfNumbers(drawNumbers);

  const qualifiedAsPair = Object.values(
    returnCountOfNumbers(drawNumbers)
  ).includes(2);

  const pairNumbers = qualifiedAsPair
    ? drawNumbers.filter((key) => countOfNumbers[key] >= 2)
    : [];

  return [pairNumbers.length > 0, pairNumbers.map(String)];
}

console.log(
  // fast3FantanResults([1, 3, 6], "main area")
  // fast3FantanResults([1, 3, 3], "Short deck dice", 1),
  // getNumbersInDraw([0, 5, 2])
  // sPair([0, 0, 2])
  fast3FantanResults([1, 4, 6], "Miscellaneous Long Deck", 2)
);

function generateAllPairs(numbers) {
  const pairs = [];
  const uniquePairs = Array.from(new Set(numbers));
  for (let i = 0; i < uniquePairs.length; i++) {
    for (let j = i + 1; j < uniquePairs.length; j++) {
      pairs.push([uniquePairs[i], uniquePairs[j]]);
    }
  }

  return pairs;
}

function miscellaneousGames(drawNumbers) {
  let values = sortNumbersInArray(
    Object.values(returnCountOfNumbers(drawNumbers)),
    "asc"
  );
  let b = [];
  let sorted = JSON.stringify(values);

  switch (sorted) {
    case "[3]":
      b.push(expectedResults[0]);
      break;
    case "[1,1,1]":
      if (isStreak(drawNumbers, 3)) {
        b.push(expectedResults[1]);
      } else if (isStreak(drawNumbers, 2)) {
        b.push(expectedResults[3]);
      } else {
        b.push(expectedResults[4]);
      }
      break;
    case "[1,2]":
      b.push(expectedResults[2]);
      break;
    default:
      return [];
  }
  return b;
}

function sortNumbersInArray(drawNumbers, order = "asc") {
  if (order === "desc") {
    return drawNumbers.sort((a, b) => b - a);
  } else {
    return drawNumbers.sort((a, b) => a - b);
  }
}

function isStreak(drawNumber, streakLength) {
  const sortedDrawNumbers = [...drawNumber].sort((a, b) => a - b);

  for (let i = 0; i < sortedDrawNumbers.length; i++) {
    let count = 1;
    let currentIndex = i;

    for (let j = 0; j < streakLength - 1; j++) {
      const nextIndex = (currentIndex + 1) % sortedDrawNumbers.length;

      if (
        sortedDrawNumbers[nextIndex] === sortedDrawNumbers[currentIndex] + 1 ||
        (sortedDrawNumbers[nextIndex] === 0 &&
          sortedDrawNumbers[currentIndex] === 9)
      ) {
        count++;
        currentIndex = nextIndex;
      } else {
        break;
      }
    }

    if (count === streakLength) {
      return true;
    }
  }

  return false;
}

function isHalfStreak(array) {
  let streak = sortNumbersInArray(array).some((_, i, arr) => {
    return arr[i] + 1 === arr[i + 1] || arr[i] + 9 === arr[arr.length - 1];
  });
  return streak;
}
