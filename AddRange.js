module.exports = function addRange(ranges) {
    if (!(ranges && ranges.length)) {
        return [];
    }

    // Stack of final ranges
    const stack = [];

    // Sort according to start value
    ranges.sort(function(a, b) {
        return a[0] - b[0];
    });

    // Add first range to stack
    stack.push(ranges[0]);

    ranges.slice(1).forEach(function(range) {
        const last = stack[stack.length - 1];

        if (last[1] < range[0]) {
            // No overlap, push range at the end of the stack
            stack.push(range);
        } else if (last[1] < range[1]) {
            // Update previous range
            last[1] = range[1];
        }
    });

    return stack;
};
