const sumAll = function(numOne, numTwo) {
    //allNumbers = []
    count = 0
    initialNum = Math.min(numOne, numTwo)
    lastNum = Math.max(numOne, numTwo)
    
    if (numOne < 0 || numTwo < 0 || typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return "ERROR"
    } else {
        for (let  i = initialNum; i <= lastNum; i++) {
            //allNumbers.push(i)
            count = count + i
        } return count
    }
    
}

module.exports = sumAll
