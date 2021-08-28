const { test } = require("@jest/globals");

test('checks to ensure interns generate', () => {
    const intern = new Intern('Jain Dough');

    expect(intern.name).toBe('Jain Dough')
});

test('checks to ensure intern school generates', () => {
    const intern = new Intern('Jain Dough');

    expect(intern.school).toEqual(expect.any(String));
});

test('checks to ensure getSchool() function works', () => {
    const intern = new Intern('Jain Dough');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('checks to ensure getRole() function works', () => {
    const intern = new Intern('Jain Dough');

    expect(intern.getRole()).toBe('Intern');
});
