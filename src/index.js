module.exports = function check(str, bracketsConfig) {
    let round = /\)$/
    let square = /\]$/
    let curly = /\}$/
    let straight = /\|$/

    let beg = str.slice(0, 1)

    switch (beg) {
        case '(':
            return str.endsWith(')') ? true : false
        case '[':
            return str.endsWith(']') ? true : false
        case '{':
            return str.endsWith('}') ? true : false
        case '|':
            return str.endsWith('|') ? true : false
    }
    //return
}
