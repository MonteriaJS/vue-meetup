var app = new Vue({
    el: '#app',
    data: {
        genero: null,
        nombres: null,
        edad: null,
        parentesco: null,
        familia: [],
        warning: null,
    },
    methods: {
        onSubmit() {
            if (this.validate() ) {
                this.familia.push({
                    nombres: this.nombres,
                    edad: this.edad,
                    genero: this.genero,
                    parentesco: this.parentesco
                });
                this.nombres = null;
                this.edad = null;
                this.genero = null;
                this.parentesco = null;
            }
        },
        onDelete(index) {
            this.familia.splice(index, 1);
        },
        validate() {
            if (this.genero && this.nombres && this.edad && this.parentesco && this.warning == null) {
                return true;
            }
            return false;
        }
    },
    watch: {
        nombres(nuevoNombre) {
            var string = nuevoNombre.toString();
            var array = string.split(' ');
            console.log(string, array.length);
            if (array.length < 3) {
                this.warning = ' Ingrese un nombre completo';
            } else {
                this.warning = null;
            }
        }
    }
});