module.exports = function check(str, bracketsConfig) {
    var testStr = str //str that will iteratively be reduced and compared to input 

    if (str.length % 2 != 0) return false //check for odd-length input

    for (let i = 0; i < bracketsConfig.length; i++) { //loop through the samples array
        for (let j = 0; j < str.length; j++) { //loop through the input str
            if (str[j] == bracketsConfig[i][0] && str[j+1] == bracketsConfig[i][1]) { //check for adjacent pairs 
                testStr = str.replace(bracketsConfig[i][0]+bracketsConfig[i][1], '') //redefine testString as the same string but without the adjacent pair
            }
        }
    }
//if nothing's been done this iteration ? (yes) if test is empty : (no) recurse with altered testString
    return testStr == str ? testStr == '' : check(testStr, bracketsConfig)
}
