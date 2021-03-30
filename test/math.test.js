const {suma,resta} = require('../practicaTest/math.js');
test('Testeando método suma', () => {
    const resultado = suma(10,10);
    // if(resultado !== 20)
    //     throw new Error;
    expect(resultado).toBe(20);
});

test('Testeando metodo resta', () => {
    const result = resta (10,9);
    expect(result).toBe(1);
})
