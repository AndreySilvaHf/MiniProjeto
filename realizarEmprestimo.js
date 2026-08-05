import { dadosLivros } from './dadosLivros.js';

export function realizarEmprestimo(titulo) {
 
  const livroEmprestado = dadosLivros.find((livro) => 
    livro.titulo.toLowerCase().trim() === titulo.toLowerCase().trim()
  );

  if (livroEmprestado && livroEmprestado.disponivel === true) {
    
    livroEmprestado.disponivel = false; // Ajuda da IA

    console.log('Livro emprestado com sucesso!');
  } else {
    console.log('Livro indisponível!');
  }
}