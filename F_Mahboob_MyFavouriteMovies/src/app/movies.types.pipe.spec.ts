import { Movies.TypesPipe } from './movies.types.pipe';

describe('Movies.TypesPipe', () => {
  it('create an instance', () => {
    const pipe = new Movies.TypesPipe();
    expect(pipe).toBeTruthy();
  });
});
