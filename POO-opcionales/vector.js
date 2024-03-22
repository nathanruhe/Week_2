class Vector {
    constructor() {
        this.arrayNumeros = [];
    };

    Constructor(n,m) {
        for (let i = 0; i < n; i++) {
            this.arrayNumeros.push(Math.trunc(Math.random() * m + 1));
        };
        return this.arrayNumeros;
    };

    add(a) {
        if (a.length == this.arrayNumeros.length) {
            for (let i = 0; i < a.length; i++) {
                this.arrayNumeros[i] += a[i];
            };
        };
        return this.arrayNumeros;
    };

    productNum(n) {
        for (let i = 0; i < this.arrayNumeros.length; i++) {
            this.arrayNumeros[i] *= 2;
        };
        return this.arrayNumeros;
    };

    subs(a) {
        if (a.length == this.arrayNumeros.length) {
            for (let i = 0; i < a.length; i++) {
                this.arrayNumeros[i] -= a[i];
            };
        };
        return this.arrayNumeros;
    };

    product(a) {
        if (a.length == this.arrayNumeros.length) {
            for (let i = 0; i < a.length; i++) {
                this.arrayNumeros[i] *= a[i];
            };
        };
        return this.arrayNumeros;
    };
};


module.exports = {Vector};

