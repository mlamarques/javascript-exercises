const reverseString = function(word) {
    let reverseString = word.split("")
    reverseString = reverseString.reverse()
    reverseString = reverseString.join("")
    return reverseString
}

module.exports = reverseString
