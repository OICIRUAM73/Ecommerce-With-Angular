import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  tableDataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.tableDataSource = new MatTableDataSource(products);
      this.products = products;
    });
  }

  deleteProduct(id: string, index: number) {
    this.productsService.deleteProduct(id)
    .subscribe(result => {
      console.log(index);
      this.products.splice(index, 1);
      this.tableDataSource = new MatTableDataSource(this.products);
    });
  }

}
