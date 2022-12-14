const GeometricShape = class {
    constructor (name, type, numberOfSides, base, height) {
        this.name= name;
        this.type= type;
        this.numberOfSides= numberOfSides;
        this.base= base;
        this.height= height;
    }

    getName () {return this.name};
    setName (nome) {this.name=nome;};

    getType () {return this.type};
    setType (tipo) {this.type= tipo;};
    
    getNumberOFSides () {return this.numberOfSides};
    setNumberOfSides (nside) {this.numberOfSides= nside;};

    getBase () {return this.base};
    setBase (base) {this.base=base};

    getHeight () {return this.height};
    setHeight (alt) {this.height=alt;};

    calculatePerimeters () {
        return (this.base+this.height)*2;
    }

    calculateAreas() {
        return this.base*this.height;
    }

    compareShapes (shape1, shape2) {
        if (shape1 > shape2) {return true;}
        return false;
    }

    drawShapes() {
        for (let i=0; i<this.height; i++) {
            console.log("-  ".repeat(this.base));
        }
    }
}

module.exports = GeometricShape;