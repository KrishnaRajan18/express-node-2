// TIMEWORD: Turns a string of 24h time into words.

// blank map for words corresponding to minute inputs
const minutesMap = new Map();

// key/values for the minutesMap
const mKeyArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59
];

const mValArr = [
  "o'clock",
  "oh one",
  "oh two",
  "oh three",
  "oh four",
  "oh five",
  "oh six",
  "oh seven",
  "oh eight",
  "oh nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eigteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "thirty",
  "thirty one",
  "thirty two",
  "thirty three",
  "thirty four",
  "thirty five",
  "thirty six",
  "thirty seven",
  "thirty eight",
  "thirty nine",
  "forty",
  "forty one",
  "forty two",
  "forty three",
  "forty four",
  "forty five",
  "forty six",
  "forty seven",
  "forty eight",
  "forty nine",
  "fifty",
  "fifty one",
  "fifty two",
  "fifty three",
  "fifty four",
  "fifty five",
  "fifty six",
  "fifty seven",
  "fifty eight",
  "fifty nine"
];

// adding key/values to minutesMap
for (let i = 0; i < mKeyArr.length; i++) {
  minutesMap.set(mKeyArr[i], mValArr[i]);
}

// blank map for words corresponding to hour inputs
const hoursMap = new Map();

// key/values for the hoursMap
const hrKeyArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24
];
const hrValArr = [
  "midnight",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve"
];

for (let i = 0; i < hrKeyArr.length; i++) {
  hoursMap.set(hrKeyArr[i], hrValArr[i]);
}

// returns am or pm from hr given in military time
function AmOrPm(hr) {
  if (hr >= 12) {
    return "pm";
  } else {
    return "am";
  }
}

// initalize final output variable
let output;

// @param time will always be a valid string with format 00:00
function timeToWords(time) {
  // reformat time to take away the ':' and split into hr and min values
  let editedTime = Array.from(time);
  editedTime.splice(2, 1);
  let hrInput = Number(editedTime[0] + editedTime[1]);
  let minInput = Number(editedTime[2] + editedTime[3]);
  console.log("input:", hrInput, minInput);

  // Find hour from hoursMap
  let h = hoursMap.get(hrInput);

  // Find minute from minutesMap
  let m = minutesMap.get(minInput);

  // AM or PM
  amPm = AmOrPm(hrInput);

  output = "The time is :" + h + " " + m + " " + amPm;

  if (output === "The time is :midnight o'clock am") {
    output = "The time is :" + "midnight";
  }

  if (output === "The time is :twelve o'clock pm") {
    output = "The time is :" + "noon";
  }

  return output;
}
console.log(timeToWords("12:00"));
module.exports = timeToWords;
