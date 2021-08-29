const countSort = (arr, exp) => {
    let bucket = new Array(10).fill([])
    let div = 1
    /*
        exp = 1 -> (num/1) % 10
        exp = 2 -> (num/10) % 10
        exp = 3 -> (num/100) % 10
    */
    while (exp > 1) {
        div *= 10
        exp -= 1
    }
    arr.map(num => {
        let last = (Math.floor(num / div)) % 10
        bucket[last] = [...bucket[last], num]
    })
    return bucket.flat()

}
let radixSort = (arr) => {
    let max = Math.max(...arr)
    let numberOfdigital = 0
    while (max > 0) {
        max = Math.floor(max / 10)
        numberOfdigital += 1
    }

    for (let i = 1; i <= numberOfdigital; i++) {
        arr = countSort(arr, i)
    }
    return arr
}
export default radixSort