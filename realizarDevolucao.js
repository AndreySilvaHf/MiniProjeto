import { dadosLivros } from "./dadosLivros.js";

export function realizarDevolucao(titulo) {
  const livroEncontrado = dadosLivros.find(
    (livro) =>
      livro.titulo.toLowerCase().trim() === titulo.toLowerCase().trim()
  );

  if (!livroEncontrado) {
    console.log("Livro não encontrado.");
    return;
  }

  if (livroEncontrado.disponivel === false) {
    livroEncontrado.disponivel = true;
    console.log("Livro devolvido com sucesso!");
  } else {
    console.log("O livro já está disponível.");
  }
}