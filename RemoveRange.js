module.exports = function removeRange(ranges, removeRange) {
    if (!(ranges && ranges.length)) {
        return [];
    }

    // Stack of final ranges
    const stack = [];

    ranges.forEach(function(range) {

        if (range[1] < removeRange[0] || range[0] > removeRange[1]) {
            // Deleted range outside of the current range, no removal required
            stack.push(range);
        } else {
            // Splitting range into two pieces
            if (range[0] < removeRange[0]) stack.push([range[0], removeRange[0] - 1]);
            if (range[1] > removeRange[1]) stack.push([removeRange[1] + 1, range[1]]);
        }

    });

    return stack;
};
