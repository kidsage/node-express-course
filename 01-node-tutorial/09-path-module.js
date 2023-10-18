const path = require("path")

console.log(path.sep)

// str 병합인데 path 형태로
const filePath = path.join("/content/", "subfolder", "test.txt")
console.log(filePath)

// filename만 출력
const base = path.basename(filePath)
console.log(base)

// 절대경로 출력
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)

// 현재 디렉토리 위치
console.log(__dirname)
