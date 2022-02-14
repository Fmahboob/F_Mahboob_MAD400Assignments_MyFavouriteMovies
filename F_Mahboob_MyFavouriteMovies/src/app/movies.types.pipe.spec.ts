import { MoviesTypesPipe } from './movies.types.pipe';

describe('Movies.TypesPipe', () => {
  it('create an instance', () => {
    const pipe = new MoviesTypesPipe();
    expect(pipe).toBeTruthy();
  });
});
