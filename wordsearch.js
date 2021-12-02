/*
//This function fixes test 1 and 2 - if a word is horizontal + present or not present
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false; //if the word is not present
};

*/

const transpose = function(array){
    let results = [];
    for (let i = 0; i < array[0].length; i++) {
        let row = [];
        for (let j = 0; j < array.length; j++) {
            row.push(array[j][i]);
        }
        results.push(row);
    }
    return results
};


//This function passes test 3 if the word is present and vertical- we need to use transpose (pasted right above this)
const wordSearch = (letters, word) => { 
    
    if (letters.length < 1 || word.length < 1) return false; //takes care of whether a word is not present
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    };

    const vertical = transpose(letters)
        const verticalJoin = vertical.map(ls => ls.join(''))
            for (l of verticalJoin) {
                if (l.includes(word)) {
                    return true;
                }
            }
        return false;
};

module.exports = wordSearch






