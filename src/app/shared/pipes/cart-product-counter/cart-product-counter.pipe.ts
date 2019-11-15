import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Pipe({
  name: 'cartProductCounter'
})
export class CartProductCounterPipe implements PipeTransform {

  transform(currentProduct: Product, cartProducts: Product[] ): number {
    return cartProducts.filter(product => product.id === currentProduct.id).length;
  }

}
