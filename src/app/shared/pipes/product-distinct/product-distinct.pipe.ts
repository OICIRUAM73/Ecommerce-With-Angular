import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Pipe({
  name: 'productDistinct'
})
export class ProductDistinctPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return [... new Set(products)];
  }

}
