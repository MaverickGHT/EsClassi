const GeometricShape = require ("./GeometricShape");

const Quadrato = new GeometricShape("Asdrubale", "triangolo", 4, 4, 4);
const Rettangolo = new GeometricShape("Gianni", "Rettangolo", 4, 5, 3);

Quadrato.setType("quadrato");
console.log(Quadrato);
console.log(Quadrato.calculatePerimeters());
console.log(Quadrato.calculateAreas());

console.log(Quadrato.compareShapes(Quadrato.calculateAreas(), Rettangolo.calculateAreas()));

Quadrato.drawShapes();
console.log("        ");
Rettangolo.drawShapes();