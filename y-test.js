const quranData = require('./quran.json')


let tmp = [...Array(6236).keys()];
let error = [];
tmp.forEach(res => {
    if (quranData.find(p => p.aya_id === res)) {

    } else
        error.push(res);
});

console.log(error);