const mergeSort = (array)=> {
    if (array.length <= 1){
        return array
    } else {
        let midPoint = Math.floor(array.length/2);
        let leftHalf = array.slice(0, midPoint);
        let rightHalf = array.slice(midPoint);

        leftHalf = mergeSort(leftHalf);
        rightHalf = mergeSort(rightHalf);

        let sortedArray = [];
        let leftIteration = 0;
        let rightIteration = 0;

        while (sortedArray.length < array.length) {
            if (leftHalf[leftIteration] < rightHalf[rightIteration] || rightHalf[rightIteration] === undefined){
                sortedArray.push(leftHalf[leftIteration]);
                leftIteration++;
            } else {
                sortedArray.push(rightHalf[rightIteration]);
                rightIteration++;
            }
        }
        return sortedArray
    }
}

export default mergeSort