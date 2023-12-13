const Filter = require("bad-words");
const filter = new Filter();


const cleanTextFunction = (input) => {

    input = input.toLowerCase();

    // const badWordsRemoved = filter.clean(input)

    // console.log(filter)
    // console.log(badWordsRemoved)

    return input;
};


module.exports = cleanTextFunction;