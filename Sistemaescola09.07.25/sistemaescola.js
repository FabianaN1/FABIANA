let prompt = require('prompt-sync')();

let alunos = [];
let cursos = [];

let opcao;

do {
    opcao = prompt(
                  'Sistema Escolar\n\n'+
                  '1 - Cadastrar aluno\n' + 
                  '2 - Excluir aluno\n' +
                  '3 - Cadastrar curso\n' +
                  '4 - Excluir curso\n' +
                  '5 - Visualizar Informações\n'+
                  '6 - Sair\n\n'+
                  'Escolha uma opção:\n ' );

    switch(opcao){
        case '1':
            let nomeAluno = prompt('Digite o nome do aluno: ');
            if (nomeAluno !== null && nomeAluno.trim() !== '') {
                alunos.push(nomeAluno.trim);
                console.log("Aluno cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break; 

        case '2':
            let nomeExcluir = prompt('Digite o nome do aluno a excluir: ');
            let index = alunos.indexOf(nomeExcluir);
            if (index !== -1) {
                alunos.splice(index, 1);
                console.log("Aluno excluído com sucesso!");
            } else {
                console.log("Aluno não encontrado.");
            }
            break;

        case '3':
            //cadastrar curso 
            let nomeCurso = prompt('Digite nome do curso:');
            if (nomeCurso !== null && nomeCurso.trim() !== '') {
                cursos.push(nomeCurso.trim()); 
                console.log("Curso cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break;

        case '4':
            //Excluir curso
            let nomeExcluircurso = prompt('Digite o nome do curso a excluir:');
            let indexCurso = curso.indexOf(nomeExcluirCurso);
            if (indexCurso !== -1) {
                cursos.splice(indexCurso, 1);
                console.log("Curso excluido com sucesso!");
            } else {
                console.log("Curso não encontrado.");
            }
            break;
        
        case '5':
            //visualizar informações
            let info = "\nAlunos Cadastrados:\n";
            if (alunos.length > 0){ 
                for (let i = 0; i < alunos.length; i++) { 
                    info += "-" + alunos[i] + "\n";
                    }
                    } else {
                        info += 'Nenhum aluno cadastrado.\n';
                        }
                       info += "\nCursos Cadastrados:\n";
                       if (cursos.length > 0) {        
                            for (let i = 0; i < cursos.length; i++){
                                info += '- ' + cursos[i] + '\n';
                            }
                        } else {
                            info +='Nenhum curso cadastrado.\n';
                        }
                        console.log(info);
                        break;
                        
        case "6":
            //Sair do sistema
            console.log("Saindo do sistema...");
            break;

            default:
                console.log("Opção inválida. Tente novamente.");
                
    }
    } while (opcao !== "6");
    