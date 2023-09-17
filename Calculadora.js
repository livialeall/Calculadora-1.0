function Calculadora() {
    this.display = document.querySelector('#display');
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target; /* botoao que esta sendo pressionado */
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.addNumDisplay(el);
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        });

    }
    this.addNumDisplay = el => this.display.value += el.innerText;

    this.inicia = () => {
        this.capturaCliques();
    };

}

const calculadora = new Calculadora()
calculadora.inicia()