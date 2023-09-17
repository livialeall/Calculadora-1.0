function Calculadora() {

    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()

}

this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if(e.key == 'Enter') {
        e.preventDefault()
        this.realizaConta()
      }
      else{
        return
      }
    })
}
    this.display = document.querySelector('#display');
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            e.preventDefault()
            if(this.display.value == 'Conta Invalida') {
                this.clear()

            }
                const el = e.target; /* botoao que esta sendo pressionado */
                if (el.classList.contains('btn-num')) this.addNumDisplay(el);
                if (el.classList.contains('btn-clear')) this.clear();
                if (el.classList.contains('btn-del')) this.del();
                if (el.classList.contains('btn-eq')) this.realizaConta();
        
          
        });
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clear = () => this.display.value = ""

    this.del = () => this.display.value = this.display.value.slice(0,-1)

    this.realizaConta = () =>{
    try{
        const conta = eval(this.display.value)

        if(!conta) {
            this.display.value = 'Conta Invalida'
        }

        this.display.value = conta

    }catch(err) {
        this.display.value = 'Conta Invalida'
        
    }
       
}

}

const calculadora = new Calculadora()
calculadora.inicia()