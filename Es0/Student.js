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
        return console.log("Il motto di "+ this.nome + " è: " + this.motto);
    };
}

module.exports = Student