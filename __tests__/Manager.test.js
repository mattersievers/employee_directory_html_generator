const { test } = require("@jest/globals");

test('checks to ensure manager generates', () => {
    const manager = new Manager('Joey Doughy');

    expect(manager.name).toBe('Joey Doughy')
});

test('checks to ensure manager generates office number', () => {
    const manager = new Manager('Joey Doughy');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ('checks the getRole() function', () => {
    const manager = new Manager('Joey Doughy');

    expect(manager.getRole()).toBe('Manager');
});
