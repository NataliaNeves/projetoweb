import { IProduto } from './produto-incluir.interface';

export class ProdutoIncluir {
  codigo?: number;
  fornecedor: string;
  nome: string;
  quantidade: number;
  precoCompra: number;
  precoVenda: number;

  constructor(produto: IProduto) {
    this.codigo = produto.id;
    this.fornecedor = produto.fornecedor;
    this.nome = produto.nome;
    this.quantidade = produto.quantidade;
    this.precoCompra = produto.precoCompra;
    this.precoVenda = produto.precoVenda;
  }
}
