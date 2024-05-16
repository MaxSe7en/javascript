const fantanResult = {
  1: [
    "Big",
    "Small",
    "Odd",
    "Even",
    "Ones",
    "Tens",
    "Hundreds",
    "Thousands",
    "Ten Thousands",
    "Dragon",
    "Tiger",
    "Tie",
    "1,2",
    "2,3",
    "1,3",
    "1,4",
    "2,4",
    "3,4",
    "2,3,4",
    "3,4,1",
    "2,4,1",
    "3,2,1",
    "1",
    "2",
    "3",
    "4",
  ],
  2: [],
  3: [],
  4: [],
  5: [],
};

// function fantan5d(drawNumbers){}

// class FantanGame {
//   constructor(lotteryType, drawNumbers) {
//     this.lotteryType = lotteryType;
//     this.drawNumbers = drawNumbers;
//   }

// }

function bigSmall(num, bigMin, bigMax, smallMin, smallMax) {
  if (num >= bigMin && num <= bigMax) {
    return "Big";
  } else if (num >= smallMin && num <= smallMax) {
    return "Small";
  } else {
    return "Invalid input";
  }
}

console.log(
  bigSmall(
    [9, 8, 1, 2, 0].slice(2).reduce((acc, curr, array) => acc + curr, 0),
    23,
    45,
    0,
    22
  )
);
console.log(
  oddEven([9, 8, 1, 2, 0].reduce((acc, curr, array) => acc + curr, 0))
);

function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const tripleComb = ["2,3,4", "1,3,4", "1,2,4", "1,2,3"];

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

// function fantan3() {}

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

function getWinCombinations(num1, num2, num3) {
  const isBig = (num) => num >= 5 && num <= 9;
  const isSmall = (num) => num >= 0 && num <= 4;
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num !== 0 && num % 2 !== 0; // Corrected isOdd function

  const isPair = (num1, num2, num3) => num1 === num2 && num2 === num3;
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

  if (isPair(num1, num2, num3)) {
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
  if (!isPair(num1, num2, num3)) {
    winCombinations.push("No Pair");
  }

  return winCombinations;
}

// console.log(getWinCombinations(...[9,2,1,2,5].slice(2)));

// console.log([1, 0, 9, 3, 0].slice(2));

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

// console.log(sumAndRange([8, 8, 8]));

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

// console.log(positionOfBallNode([4, 2, 2, 1, 7]));

// console.log(
//   getColorRange(
//     [9,2,1,2,5].slice(2).reduce((acc, curr, array) => acc + curr, 0)
//   )
// );
// console.log("fantan 2", fantan1([9,1,5,0,1].slice(2).reduce((acc, curr, array) => acc + curr, 0)))

// const a = [1, 2, 3, 4];

// console.log("min", Math.max(...a), a[0]);

// let g = a.map((item, ind, arr) => [Math.max(...arr), ind]);

// console.log([1, 2, 3, 4].findIndex(() => Math.max(...[1, 2, 3, 4])));

function findHighestPosition(arr) {
  const maxValue = Math.max(...arr);
  const position = ["Ten Thousand", "Thousand", "Hundred", "Ten", "Zero"]
  const maxIndexes = arr.reduce((indexes, value, index) => {
    if (value === maxValue) {
      indexes.push(position[index]);
    }
    return indexes;
  }, []);
  return maxIndexes;
}

console.log(findHighestPosition([9, 2, 3, 4, 9]));




function fiveDFantanResults(drawNumber){

}