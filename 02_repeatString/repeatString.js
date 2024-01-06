const repeatString = function(word, repeat) {
    let repeatWord = '';
    if (repeat < 0) return 'ERROR';
    for (let i = 0; i < repeat ; i++) {
        repeatWord += word;
    }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
