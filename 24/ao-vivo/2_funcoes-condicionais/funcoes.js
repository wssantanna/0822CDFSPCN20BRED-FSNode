

function cumprimentarUsuario(cumprimento, nomeDoUsuario){
    // Construo a mensagem.
    let mensagem = `${cumprimento} ${nomeDoUsuario}`;
    // Retorno a mensagem construída.
    return mensagem;
    // Após o retorno, nenhum trecho de código será executado.
    console.log('Este trecho de código não será executado!');
}

let cumprimentoEmIngles = cumprimentarUsuario("Hi", "Willian");
let cumprimentoEmPortugues = cumprimentarUsuario("Olá", "Eduardo");

console.log(cumprimentoEmIngles);
console.log(cumprimentoEmPortugues);