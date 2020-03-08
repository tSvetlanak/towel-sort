module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const matrixNew = [];
    matrix.forEach((element, i) => {
        if (i % 2 != 0) {
            matrixNew.push(...matrix[i].reverse());
        } else matrixNew.push(...matrix[i]);
    });
    return matrixNew;
}