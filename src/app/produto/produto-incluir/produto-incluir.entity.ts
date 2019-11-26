import { IProduto } from './produto-incluir.interface';

export class ProdutoIncluir {
    codigo?: number;
    produto: string;
    quantidade: number;
    precoCompra: number;
    precoVenda: number;

    constructor ( produto: IProduto) {
        this.codigo = produto.ProviderId;
        this.produto = produto.Name;
        this.quantidade = produto.Quantity;
        this.precoCompra = produto.PurchasePrice;
        this.precoVenda = produto.SellPrice;
    }
}