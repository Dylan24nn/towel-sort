// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if(!matrix){
      return res;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
            res = res.concat(matrix[i].reverse());
        } else {
            res = res.concat(matrix[i]);
        }
    }
    return res;
};
