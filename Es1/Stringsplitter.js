const Stringsplitter = class {
    constructor (toBeSplit) {
        this.toBeSplit= toBeSplit;
    }

    getSplits (numberOfLetters) {
        let splits = [];
        let n=0;
        let j=numberOfLetters;this

        if (numberOfLetters > this.toBeSplit.length) {
            console.log("Hai scelto uno split maggiore della parola");
            return this.toBeSplit;}


        for (let i=0; i<this.toBeSplit.length; i++) {
            splits[n]= this.toBeSplit.substring(i, j);
            n++;
            j++;
            if (j==this.toBeSplit.length+1) {break;}
        }

        return splits;
    };

    getEachOtherSplits (splits1, splits2) {
        let splits3 = [];
        splits3.push(splits1);
        splits3.push(splits2);
        return splits3;
    }
    

}

module.exports = Stringsplitter;