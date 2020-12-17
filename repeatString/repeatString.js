const repeatString = function(word, n) {
    let ans = ''
    if (n < 0) {
        ans = 'ERROR'
        return ans
    } else {
        for (let i = 1; i <= n; i++) {
            if (n === 0) {
                break
            } else {
                ans = ans.concat(word)
            }
        } return ans
    }
}

module.exports = repeatString
