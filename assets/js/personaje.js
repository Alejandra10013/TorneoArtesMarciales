class Personaje {
    constructor(nombre, img, poder, raza) {
        let _nombre = nombre;
        let _img = img;
        let _poder = poder;
        let _raza = raza;

        this.getNombre = () => _nombre;
        this.getImg = () => _img;
        this.getPoder = () => _poder;
        this.getRaza = () => _raza;

        this.setPoder = (poder) => _poder = poder;
    }
    // Getters
    get nombre() {
        return this.getNombre();
    }
    get img() {
        return this.getImg();
    }
    get poder() {
        return this.getPoder();
    }

    get raza() {
        return this.getRaza();
    }

    // Setter
    set poder(poder) {
        return this.setPoder(poder);
    }
}

export default Personaje;