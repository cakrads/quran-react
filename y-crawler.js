const fs = require('fs');
const axios = require('axios');
const quranData = require('./quran.json')

async function getData() {
    let data = quranData;
    // let tmp = [...Array(50).keys()];
    // let jlhSurah = tmp.filter(x => x >= 1);
    // let tmp = [...Array(100).keys()];
    // let jlhSurah = tmp.filter(x => x >= 50);
    let tmp = [...Array(115).keys()];
    let jlhSurah = tmp.filter(x => x >= 100);
    console.log(jlhSurah);

    for await (const index of jlhSurah) {
        let response = await axios.get(`https://quran.kemenag.go.id/index.php/api/v1/ayatweb/${index}/0/0/1000`);
        data = [...data ,...response.data.data];
    }
    return data
}

getData().then(result => {
    // console.log(result);
    let quran = JSON.stringify(result);
    fs.writeFile("quran.json", quran, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})