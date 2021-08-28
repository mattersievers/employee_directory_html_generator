const Manager = require('../lib/Manager');

test('checks to ensure manager generates', () => {
    const manager = new Manager('Joey Doughy',7878,'joey_dough@gmail',665);

    expect(manager.name).toBe('Joey Doughy')
});

test('checks to ensure manager generates office number', () => {
    const manager = new Manager('Joey Doughy',7878,'joey_dough@gmail',665);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ('checks the getRole() function', () => {
    const manager = new Manager('Joey Doughy',7878,'joey_dough@gmail',665);

    expect(manager.getRole()).toBe('Manager');
});
