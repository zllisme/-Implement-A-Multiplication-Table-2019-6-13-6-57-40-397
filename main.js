function isStartLessThanEnd(start, end) {
    return start <= end;
}
function isInputInRange(startNum, endNum) {
    return startNum >= 1 && startNum <=1000 && endNum >=1 && endNum <= 1000;
}

function createMultiplyTable(start, end) {
    if(!isStartLessThanEnd(start, end)) {
        return null; 
    }
    if(!isInputInRange(start, end)){
        return 'out of range';
    }
    var result = "";
    for(let i = start; i <= end; i++){
        var rowStr = "";
        for(let j = start; j <= i; j++){
            rowStr += j + "X" + i + "=" + j * i + " ";
        }
        result += rowStr + "\n";
    }
    return result;
}

module.exports = {
    isInputInRange,
    isStartLessThanEnd,
    createMultiplyTable
};
