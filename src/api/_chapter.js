// let dbBahasa = require('./database/indonesia.json');
let dbSurahList = require('./database/surah-list.json');
let dbQuranKemenag = require('./database/quran-kemenag.json');
let dbQuranMadinah = require('./database/quran-madinah.json');

// let quran = [];


const QuranAPI = {
    surahs: dbSurahList,
    allSurah: function () {
        return this.surahs
    },
    slugToId: function (slug) {
        const isSurah = p => p.slug === slug
        return this.surahs.find(isSurah)
    },
    kemenag: {
        contents: dbQuranKemenag,
        getChapter: function (id) {
            return this.contents.filter(p => p.sura_id === id)
        }
    },
    madinah: {
        contents: dbQuranMadinah,
        getChapter: function (id) {
            return this.contents.filter(p => p.SuraID === id)
        }
    }
}

export default QuranAPI