let prompt = require("prompt-sync")();

let alunos = []; // Lista da alunos
let cursos = []; // lista de cursos disponíveis para matrícula, cursar

let opcao; //Variável para usuário escolher opção do menu
let senha = prompt("Digite a senha:");
if (senha === "senai1") {
    //Validação de senha padrão para acesso ao sistema
    console.log("Senha correta, acesso permitido.");

do {
    //exibe o menu das opções criadas

    opcao = prompt(
                  'Sistema Escolar\n\n'+
                  '1 - Cadastrar aluno\n' + 
                  '2 - Excluir aluno\n' +
                  '3 - Cadastrar curso\n' +
                  '4 - Excluir curso\n' +
                  '5 - Visualizar Informações\n'+
                  '6 - Matricular aluno em curso\n'+
                  '7 - Sair\n\n'+
                  'Escolha uma opção:\n ' );

    switch(opcao){
        case '1':
            let nomeAluno = prompt('Digite o nome do aluno: ');
            if (nomeAluno !== null && nomeAluno.trim() !== '') {
                alunos.push(nomeAluno.trim());  
                console.log("Aluno cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break; 

        case '2':
            //Exclusão do aluno
            let nomeExcluirAluno = prompt('Digite o nome do aluno a ser excluído: ');
            let indexAluno = -1;
            for (let i = 0 ; i < alunos.length; i ++) {
                if (alunos[i].nome === nomeExcluirAluno){
                    indexAluno = i;
            break;
                }
            }
            if (indexAluno !== -1) {
                alunos.splice(indexAluno, 1);
                //Remova o aluno do array
                console.log('Aluno excluido com sucesso!');
            } else {
                console.log('Aluno nao encontrado.');
            }

                
        case '3':
            //cadastro de novo curso 
            let nomeCurso = prompt('Digite nome do curso:');
            if (nomeCurso && nomeCurso.trim() !== '') {
                cursos.push(nomeCurso.trim());
                //Adiciona o curso ao array 
                console.log("Curso cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break;

        case '4':
            //Exclusão de curso
            let nomeExcluircurso = prompt('Digite o nome do curso a ser excluído:');
            let indexCurso = curso.indexOf(nomeExcluirCurso);
            if (indexCurso !== -1) {
                cursos.splice(indexCurso, 1);
            for (let i = 0; i < alunos.length; i++){
                if (alunos[i].curso === nomeExcluirCurso){
                    alunos[i].curso = null;
                }
            }
            console.log("Curso excluído com sucesso!");
            } else {
                console.log("Curso não encontrado.");
            }
            break;
        
        case '5':
            console.log("\nAlunos Cadastrados:");    
            if (alunos.length > 0) { 
                for (let i = 0; i < alunos.length; i++) { 
                let curso;
                if (alunos[i].curso) {
                    curso = alunos[i].curso;
                    } else {
                    curso = "Não matriculado";   
                    }
                    console.log("-" + alunos[i].nome + " (Curso: " + curso + ")");
                }
            } else {
                console.log("Nenhum aluno cadastrado.");
            }
            break;
                 
        case "6":  
            if (alunos.length === 0 || cursos.length === 0){
                console.log("É necessário ter alunos e cursos cadastrados para realizar a matrícula.");
            break; 
            }
                let nomeMatricula = prompt("Digite o nome do aluno para matrícula:");
                let aluno = null;
                for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].nome === nomeMatricula) {
                        aluno = alunos[i];
                        break;
                    }
                }
                if (aluno) {
                    let nomeCursoMatricula = prompt("Digite o nome do curso para matrícula:");
                    if (cursos.includes(nomeCursoMatricula)) {
                        aluno.curso = nomeCursoMatricula;
                        console.log("Matrícula realizada com sucesso!");
                    } else {
                        console.log("Curso não encontrado.");
                    }
                } else {
                    console.log("Aluno não encontrado.");
                }
                break;
    
            case "7":
                console.log("Saindo do sistema...");
                break;
    
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
        } while (opcao !== "7");
    } else {
        console.log("Senha incorreta, acesso negado.");
    }