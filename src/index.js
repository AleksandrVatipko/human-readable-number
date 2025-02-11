module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const additionalNumbers = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let difArr = number.toString().split("");
    switch (difArr.length) {
        case 1:
            return units[difArr[0]];
        case 2:
            if (+difArr[0] === 1) {
                // 10 - 19
                return additionalNumbers[difArr[1]];
            } else {
                // 20 - 99
                let result = dozens[difArr[0] - 2];
                return +difArr[1] === 0
                    ? result
                    : `${result} ${units[difArr[1]]}`;
            }
        case 3: // 100 - 999
            let remainder = number - 100 * difArr[0];
            let result = `${units[difArr[0]]} hundred`;
            return remainder === 0
                ? result
                : `${result} ${toReadable(remainder)}`;
    }
};
