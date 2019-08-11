const fs = require('fs');
const response1 = require('./database/arabic.json')
const response2 = require('./database/indonesia.json')

let quran = [];
response1.forEach(element => {
    let tmp = {
        ...element,
        translate: {
            indonesia: response2[element.SuraID - 1].AyahText
        }
    };
    quran.push(tmp);
});
console.log(quran);
quran = JSON.stringify(quran);
fs.writeFile("quran.json", quran, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});