import { dadosLivros } from "./dadosLivros.js";

function exibirEstatisticas() {
  const totalLivros = dadosLivros.length;

  const livrosDisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel
  ).length;

  const livrosIndisponiveis = dadosLivros.filter(
    (livro) => !livro.disponivel
  ).length;

  const totalPaginas = dadosLivros.reduce(
    (total, livro) => total + livro.paginas,
    0
  );

  const mediaPaginas = totalPaginas / totalLivros;

  console.log("===== ESTATÍSTICAS DA BIBLIOTECA =====");
  console.log(`Total de livros cadastrados: ${totalLivros}`);
  console.log(`Livros disponíveis: ${livrosDisponiveis}`);
  console.log(`Livros indisponíveis: ${livrosIndisponiveis}`);
  console.log(`Total de páginas: ${totalPaginas}`);
  console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);
}

export default exibirEstatisticas;