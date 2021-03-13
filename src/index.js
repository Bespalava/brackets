module.exports = function check(str, bracketsConfig) {
    var St = str;
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= bracketsConfig.length; j++) {
            St = St.replace(bracketsConfig.map((item) => item.join(''))[j], '')
        }
    }
    if (St.length == 0) {
        return true
    } else {
        return false
    }
}
