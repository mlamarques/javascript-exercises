const removeFromArray = function(array, ...elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array.indexOf(elem[i]) == -1) {
            continue
        } else {
            let pos = array.indexOf(elem[i])
            array.splice(pos, 1)
        }
    } return array
}

module.exports = removeFromArray
