import { readFile, writeFile } from "fs"
// import util from "util"
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// async test
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         // console.log(data)
//         resolve(data)
//       }
//     })
//   })
// }

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// const start = async () => {
//   const first = await getText("./content/first.txt")
//   console.log(first)
// }

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8")
    const second = await readFilePromise("./content/second.txt", "utf8")
    await writeFilePromise(
      "./content/result-mind-grenade2.txt",
      `THIS IS AWESOME: ${first} ${second}`
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
