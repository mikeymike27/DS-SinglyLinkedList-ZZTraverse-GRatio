function zigzagTraverse(arr) {
    let top = 0
    let bottom = arr.length - 1
    let left = 0
    let right = arr[0].length - 1
    let pointerPosX = 0
    let pointerPosY = 0
    let dir = 0

    while(true) {
        while(dir == 0) {
            console.log(arr[pointerPosY][pointerPosX])
            if(!(pointerPosX - 1 < left) && !(pointerPosY + 1 > bottom)) {
                pointerPosX--
                pointerPosY++
            } else {
                if(pointerPosY + 1 > bottom) {
                    pointerPosX++
                } else {
                    pointerPosY++
                }
                dir++
            }
        }

        if(pointerPosX == right && pointerPosY == bottom) {
            console.log(arr[pointerPosY][pointerPosX])
            break
        }

        while(dir == 1) {
            console.log(arr[pointerPosY][pointerPosX])
            if(!(pointerPosX + 1 > right) && !(pointerPosY - 1 < top)) {
                pointerPosX++
                pointerPosY--
            } else {
                if(pointerPosX + 1 > right) {
                    pointerPosY++
                } else {
                    pointerPosX++
                }
                dir--
            }
        }

        if(pointerPosX == right && pointerPosY == bottom) {
            console.log(arr[pointerPosY][pointerPosX])
            break
        }
    }
}

zigzagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
])