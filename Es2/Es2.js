const GeometricShape = require ("./GeometricShape");

const Quadrato = new GeometricShape("Asdrubale", "quadrato", 4, 3, 3);

Quadrato.setType("triangolo");
console.log(Quadrato);
console.log(Quadrato.calculatePerimeters());
console.log(Quadrato.calculateAreas());