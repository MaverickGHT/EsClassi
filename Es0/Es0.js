const Student= require ("./Student");

const Alessio = new Student ("Alessio", "Bianchi", 2001, "Tennis", "Viva la vita",);
const Lea = new Student ("Lea", "Rossi", 2004, "Calcio", "Viva la vit");

console.log("Il motto è: " + Alessio.getMotto());
console.log(Alessio.getAge());

console.log("Stesso motto: " +Alessio.haveSameMotto(Alessio.getMotto(), Lea.getMotto()));
console.log("Compara età: " +Alessio.compareAge(Alessio.data, Lea.data));

