import { Pound2kgPipe } from './pound2kg.pipe';

describe('Pound2kgPipe', () => {
  it('create an instance', () => {
    const pipe = new Pound2kgPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert 0 Pounds to Kg', () => {
    // * arrange
    const pipe = new Pound2kgPipe();
    // * act
    const ret = pipe.transform(0);
    // * asser
    expect(ret).toBe(0);
  });

  it('convert -10 Pounds to Kg', () => {
    // * arrange
    const pipe = new Pound2kgPipe();
    // * act
    const ret = pipe.transform(-10);
    // * asser
    expect(ret).toBe(0);
  });

  it('convert 150 Pounds to Kg', () => {
    // * arrange
    const pipe = new Pound2kgPipe();
    // * act
    const ret = pipe.transform(150);
    // * asser
    expect(ret).toBe(68.0272);
  });

});
