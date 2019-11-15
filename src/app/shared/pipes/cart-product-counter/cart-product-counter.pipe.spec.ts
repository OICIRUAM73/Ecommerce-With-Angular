import { CartProductCounterPipe } from './cart-product-counter.pipe';

describe('CartProductCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new CartProductCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
