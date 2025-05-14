export function saudacao(){
    return console.log('Olá mundo!')
}
export function getEndereco(cep){
    const consultaCEP = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(responde => responde.json())
    return consultaCEP
}