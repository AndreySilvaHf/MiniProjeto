import promptSync from "prompt-sync";
import listarLivros from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import cadastrarLivro from "./cadastrarLivro.js";
import exibirEstatisticas from "./exibirEstatisticas.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js"
import { realizarDevolucao } from "./realizarDevolucao.js";
import listarDisponiveis from "./listarDisponiveis.js";

const prompt = promptSync();

let opcao;

do {
  console.clear();

  console.log("===== SISTEMA DE BIBLIOTECA =====");
  console.log("1 - Listar livros");
  console.log("2 - Buscar livro");
  console.log("3 - Listar livros disponíveis");
  console.log("4 - Cadastrar livro");
  console.log("5 - Realizar empréstimo");
  console.log("6 - Realizar devolução");
  console.log("7 - Exibir estatísticas");
  console.log("0 - Sair");

  opcao = Number(prompt("\nEscolha uma opção: "));

  console.clear();

  switch (opcao) {
    case 1:
        listarLivros();
        prompt("\nPressione ENTER para voltar ao menu...");
        break;

    case 2:
        const titulo = prompt("Digite o título do livro: ");
        buscarLivro(titulo);
        prompt("\nPressione ENTER para voltar ao menu...");
        break;

    case 3:
        listarDisponiveis();
        prompt("\nPressione ENTER para voltar ao menu...");
        break;;

    case 4:
        cadastrarLivro();
        prompt("\nPressione ENTER para voltar ao menu...");
        break;

    case 5: {
        const titulo = prompt("Digite o título do livro para empréstimo: ");
        realizarEmprestimo(titulo);
        prompt("\nPressione ENTER para voltar ao menu...");
        break;
}

    case 6: {
        const titulo = prompt("Digite o título do livro para devolução: ");
        realizarDevolucao(titulo);
        prompt("\nPressione ENTER para voltar ao menu...");
        break;
}

    case 7:
        exibirEstatisticas();
        prompt("\nPressione ENTER para voltar ao menu...");
        break;

    case 0:
        console.log("Sistema encerrado.");
        break;

    default:
        console.log("Opção inválida.");
        prompt("\nPressione ENTER para voltar ao menu...");
    }

} while (opcao !== 0);