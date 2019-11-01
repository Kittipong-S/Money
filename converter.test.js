const changeM = require('./converter.js')

test('return $0.00 when input is 0', () => {
    expect(changeM(0)).toEqual('$0.00');
});

test('return $ 0.03 when input is 1', () => {
    expect(changeM(1)).toEqual('$0.03');
});

test('return $ -0.03 when input is -1', () => {
    expect(changeM(-1)).toEqual('$-0.03');
});

