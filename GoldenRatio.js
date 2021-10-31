// function getNthFib(n) {
//     if(n === 2) return 1
//     if(n === 1) return 0
//     return getNthFib(n - 1) + getNthFib(n - 2)
// }

// console.log(getNthFib(5))
// 0 1 1 2 3 5 8

function getNthFib(n) {
    arr = [0, 1]

    for(i = 1; i < n; i++) {
        let newNum = arr[0] + arr[1]
        arr.shift()
        arr.push(newNum)
    }

    return arr[0]
}

console.log(getNthFib(5))
