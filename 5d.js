function studBullSelections(selections, buttons) {
  let likes = []; // Array of arrays

  // Iterate over each key in the filtered selections object
  Object.keys(filterObjectSelections(selections)).forEach((arr) => {
    let innerLikes = [];

    console.log(arr);

    selections[arr].forEach((number) => {
      let index = number;
      console.log(index - 5, buttons[index - 5]);
      if (index >= 1 && index <= 4) {
        innerLikes.push(buttons[index - 1]);
      } else if (index >= 5 && index <= 10) {
        innerLikes.push(buttons[index - 5]);
      } else if (index >= 16 && index <= 30) {
        innerLikes.push(buttons[index - 16]);
      }
    });

    likes.push(innerLikes);
  });

  return likes;
}

function filterObjectSelections(selections) {
  return Object.fromEntries(
    Object.entries(selections).filter(([_, value]) => value.length !== 0)
  );
}

const Buttons = [
  "Four of a kind",
  "Gourd",
  "Streak",
  "Three of a Kind",
  "2 pairs",
  "1 pair",
  "High Card",
];

console.log(
  returnIds({
    firstRow: [
      [1, "Four of a Kind"],
      [2, "Gourd"],
      [3, "Streak"],
      [4, "Three of a Kind"],
      [5, "2 Pairs"],
      [6, "1 Pair"],
      [7, "High Card"],
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
    fifthRow: [],
    sixthRow: [],
    seventhRow: [],
    eighthRow: [],
    ninthRow: [],
    tenthRow: [],
  })
    .map((item) => item.name)
    .join(", ")
    .split(", ")
);

function filterSelections(selections) {
  // Log the selections array and filter out any empty arrays
  // console.log(Object.values(selections).filter((arr) => arr.length > 0));
  const filteredSelections = Object.values(selections).filter(
    (arr) => arr.length > 0
  );

  // Log the original selections array
  // console.log(selections);

  // Return the filtered selections array
  return filteredSelections;
}

// function returnIds(selections) {
//   const aa = Object.values(selections)[0].filter((item) => {
//     return item;
//   });

//   // console.log(aa[0].filter((items) => typeof items === "number"));
//   return aa[0].filter((items) => typeof items === "number");
// }

function returnIds(obj) {
  const result = [];
  const rows = Object.entries(obj);

  for (let [key, value] of rows) {
    for (let [id, name] of value) {
      result.push({ id, name });
    }
  }

  return result;
}
