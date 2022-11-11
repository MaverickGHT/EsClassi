const Student = class {
    constructor (nome, cognome, data, hobby, motto) {
        this.nome = nome;
        this.cognome= cognome;
        this.data= data;
        this.hobby= hobby;
        this.motto=motto;
    }

    getAge(){
        let currentYear= 2022;
        let age= currentYear - this.data;
        return (this.nome + " ha " + age + " anni");
    };

    getMotto(){
        return this.motto;
    };

    haveSameMotto (motto1, motto2) {
        if (motto1==motto2) {
            return true;
        }
        return false;
    }

    compareAge(age1, age2) {
        if (age1 < age2) {return true;}
        return false;
    }
}

module.exports = Student