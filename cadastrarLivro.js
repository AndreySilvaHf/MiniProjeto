import promptSync from "prompt-sync";
import { dadosLivros } from "./dadosLivros.js";
import Livro from "./Livro.js";

const prompt = promptSync();

function cadastrarLivro() {
  const titulo = prompt("Digite o título do livro: ").toUpperCase();
  const autor = prompt("Digite o autor: ");
  const categoria = prompt("Digite a categoria: ");
  const paginas = Number(prompt("Digite o número de páginas: "));

 const novoLivro = new Livro(
  titulo,
  autor,
  categoria,
  paginas,
  true
);

  dadosLivros.push(novoLivro);

  console.log("Livro cadastrado com sucesso!");
}

export default cadastrarLivro;