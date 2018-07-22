
const fs = require('fs');
const format = require('string-format')
// create write stream
let ofs = fs.createWriteStream("Shop.sql");
const ShopJson = [fs.readFileSync("./example/example1.txt"), fs.readFileSync("./example/example2.txt"), fs.readFileSync("./example/example3.relim"), fs.readFileSync("./example/example4.relim"), fs.readFileSync("./example/example.js")];
console.log(ShopJson.toString(), 22)


for (let i = 0; i < 5; i++) {
    ofs.write(`INSERT INTO supermarket(USERID, USERNAME,USERWORD) VALUES(AA, BB, ${ShopJson[i]})\n`);
}

console.log("Done!") 
