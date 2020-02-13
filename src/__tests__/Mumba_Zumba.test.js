const Mumba_Zumba = require('../Mumba_Zumba');

test('returns Mumba for 1 2', () => {
    const input = '1 2';
    let result = Mumba_Zumba('1 2');
    expect(result).toBe('Mumba');
});

test('returns Zumba for 1 3', () => {
   const input = '1 3';
   let result = Mumba_Zumba('1 3');
   expect(result).toBe('Zumba');
});

test('returns Mumba\nMumba for 2 6 10', () => {
   const input = '2 6 10';
   let result = Mumba_Zumba('2 6 10');
   expect(result).toBe('Mumba\n'+ 'Mumba');
});

test('returns Zumba\nMumba for 2 3 8', () => {
   const input = '2 3 8';
   let result = Mumba_Zumba('2 3 8');
   expect(result).toBe('Zumba\n' + 'Mumba');
});