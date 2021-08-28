const { expect } = require("@jest/globals");

test('checks to ensure engineers generate', () => {
    const engineer = new Engineer('Jane Doe');

    expect(engineer.name).toBe('Jane Doe')
});

test('checks to ensure engineers have github', () => {
    const engineer = new Engineer('Jane Doe');

    expect(engineer.github).toEqual(expect.any(String));
});

test('checks to ensure engineers getGitHub() function works', () => {
    const engineer = new Engineer('Jane Doe');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('checks to ensure engineers getRole() function works', () => {
    const engineer = new Engineer('Jane Doe');

    expect(engineer.getRole()).toBe(expect.any(String));
});

