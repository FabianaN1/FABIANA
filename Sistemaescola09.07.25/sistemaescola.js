let prompt = require("prompt-sync")();
let alunos = [];
let opcao;
do{
    opcao = prompt("1 - Cadastrar aluno\n" + 
                    "2 - Excluir aluno\n" + 
                    "3 - Relatório aluno\n" +
                    "4 - Sair sitema\n\n" +
                    "Escolha uma opção\n");

 switch(opcao){
    case "1":
    let nomealuno = prompt("Digite o nome do aluno:");
    if (nomealuno !== null && nomealuno.trim() !== ''){
    alunos.push(nomealuno.trim);
console.log(alunos)
    }Fa
    break;

    case "2":

    break;
    case "3":

        //visualizar informações
        let info = "alunos cadastrados:\n";
        if (alunos.lenght > 0) {
        for (let i = 0; i < alunos.length; i++) {
            info += "-" + alunos [i] + "\n";
        }}

        }else{

        info += 'Nenhum aluno cadastrado.\n';
        }
    
    console.log(info);
    break;

    }while(opcao !=4);
    