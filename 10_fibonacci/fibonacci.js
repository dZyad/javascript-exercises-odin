const fibonacci = function(value) {
    //(1, 1, 2, 3)
    if ( +value === 0 ) return 0;
    if ( value > 0 ) {
        const sequence = [1, 1]
        for ( let i = 2 ; i < value ; i++ ) {
            let last = sequence[ i - 1];
            let prev = sequence[ i - 2];
            sequence.push( last + prev );
        }
        return sequence[value - 1];
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
