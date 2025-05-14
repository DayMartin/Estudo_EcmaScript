class Carro{
    
    ligar() {
        console.log('Ligando...')
        console.log('Carro ligado.')

    }

    mudarMarcha(){
        console.log('Pisar na embreagem')
        console.log('Trocar marcha')
    }

}

const carrinho = new Carro();


carrinho.ligar()
carrinho.mudarMarcha()