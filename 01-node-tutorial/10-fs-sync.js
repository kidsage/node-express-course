const { readFileSync, writeFileSync } = require("fs") // python의 from ~ import ~ 개념인듯
// const fs = reuqire("fs")
// import fs from "fs";
console.log("start")
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}\n`, // 개행 테스트
  { flag: "a" }
)
console.log("done with this task")
console.log("starting the next one")
