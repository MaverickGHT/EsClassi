const Stringsplitter = require ("./Stringsplitter");

const Stringa1 = new Stringsplitter ("Latino");
const Stringa2 = new Stringsplitter ("Banana");

console.log(Stringa1.getSplits(2));

console.log(Stringa1.getEachOtherSplits(Stringa1.getSplits(2), Stringa2.getSplits(3)));