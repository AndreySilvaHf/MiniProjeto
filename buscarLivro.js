import { dadosLivros } from "./dadosLivros.js";

export function buscarLivro(titulo) {
  const livroEncontrado = dadosLivros.find(
    (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
  );

  if (livroEncontrado) {
    console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`);
    console.log(`Autor: ${livroEncontrado.autor}`);
    console.log(`Categoria: ${livroEncontrado.categoria}`);
    console.log(`Número de páginas: ${livroEncontrado.paginas}`);
    console.log(`Disponível: ${livroEncontrado.disponivel ? "Sim" : "Não"}`);
  } else {
    console.log("Livro não encontrado.");
  }
}