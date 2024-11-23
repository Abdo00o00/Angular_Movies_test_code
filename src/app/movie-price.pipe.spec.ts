import { MoviePricePipe } from './movie-price.pipe';

describe('MoviePricePipe', () => {
  it('create an instance', () => {
    const pipe = new MoviePricePipe();
    expect(pipe).toBeTruthy();
  });
});
