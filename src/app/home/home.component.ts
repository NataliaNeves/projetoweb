import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ExcelService]
})
export class HomeComponent implements OnInit {

  lucroMes = 0;

  constructor(
    public http: HttpClient,
    private excelService: ExcelService
  ) {
    this.valorTotalMes();
  }

  ngOnInit() { }

  valorTotalMes() {
    this.http.get('http://localhost:5000/api/compra/totalmes').subscribe((lucro: any) => {
      this.lucroMes = lucro.valorTotal;
    });
  }

  exportAsXLSX() {

    const data = [
      {
        codigo: 1200,
        produto: 'Rice',
        fornecedor: 'Angeloni',
        quantidade: 3,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1355,
        produto: 'Margarine',
        fornecedor: 'Giassi',
        quantidade: 1,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1496,
        produto: 'Wheat flour',
        fornecedor: 'Walmart',
        quantidade: 5,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1712,
        produto: 'Milk',
        fornecedor: 'Carrefour',
        quantidade: 10,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1881,
        produto: 'Oil',
        fornecedor: 'Carrefour',
        quantidade: 1,
        precoCompra: 2.99,
        precoVenda: 8.99
      }
    ];

    // this.http.get('https://localhost:44369/api/ExchangeType/').subscribe((compra : Array<object>) => {
    //   data = compra;
    // });
    this.excelService.exportAsExcelFile(data, 'sample');
  }

}
