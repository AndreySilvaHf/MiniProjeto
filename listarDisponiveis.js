import { dadosLivros } from "./dadosLivros.js";

function listarDisponiveis() {
  const livrosDisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel === true
  );

  for (const livro of livrosDisponiveis) {
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Número de páginas: ${livro.paginas}`);
    console.log(`Disponível: ${livro.disponivel ? "Sim" : "Não"}`);
    console.log("------------------------------------");
  }
}

export default listarDisponiveis;