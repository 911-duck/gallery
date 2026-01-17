class SortArr {
    constructor(arr) {
        this.arr = arr
    }

    sortAZ() {
        return this.arr.sort((a, b) => a.name.localeCompare(b.name))
    }

    sortRandom() {
        let randomArr = this.arr.map((element, index, array) => Math.floor(Math.random() * array.length));
        return this.arr.sort((a, b) => randomArr[a.id-1] - randomArr[b.id-1])
    }

    updateArr(newArr){
        this.arr = newArr
    }
}

export default SortArr