let nomeDoUsuario = "João";
let idadeDoUsuario = 20;
let anoAtual = 2022;

// Utilize a mensagem a seguir como base do retorno esperado:
// Olá João, você nasceu em XXXX.

// 1) Calcular a data de nascimento - ex.: 2022 - 20 = 2002
let dataNascimento = anoAtual - idadeDoUsuario; // 2002
// 2) Juntar os valores das variaveis em um texto.
let mensagem = 'Olá ' + nomeDoUsuario + ', você nasceu em'+ dataNascimento + '.';
mensagem = `Olá ${nomeDoUsuario}, você nasceu em ${dataNascimento}.`;

console.log(mensagem); // Olá João, você nasceu em 2002.