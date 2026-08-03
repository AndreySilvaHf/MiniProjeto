import { dadosLivros } from "./dadosLivros.js";

function listarLivros() {
  for (const livro of dadosLivros) {
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Número de páginas: ${livro.paginas}`);
    console.log(`Disponível: ${livro.disponivel ? "Sim" : "Não"}`);
    console.log("------------------------------------");
  }
}

export default listarLivros;