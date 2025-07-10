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
                  '6 - Matricular aluno em curso\n'+
                  '7 - Sair\n\n'+
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
            console.log('\nAlunos Cadastrados:');    
            if (alunos.length > 0){ 
                for (let i = 0; i < alunos.length; i++) { 
                let curso;
                if(alunos[i].curso){
                    curso = alunos[i].curso;
                    } else {
                    curso = "Não matriculado";   
                    }
                    console.log("-" + alunos[i].nome + (curso: ";
                    }
                    break;
                 
        case "6":  
            if (alunos.lenght === 0 || cursos.lenght === 0){
                console.log("É necessário ter alunos e cursos cadastrados para realizar a matrícula.");
            break; 
            }
            letnomeMatricula = prompt("Digite o nome do aluno para matrícula:");
            let aluno = null;
            for (let i = 0; i < alunos.lenght; i ++){
                if (alunos[i].nome === nomeMatricula){
                    aluno = alunos[i];
            {
            break;

           
        case "7":
            console.log("Saindo do sistema...");
            break;

            default:
                console.log("Opção inválida. Tente novamente.");
                
    }

    } while (opcao !== "7");



    
