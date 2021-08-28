const Intern = require('../lib/Intern');

test('checks to ensure interns generate', () => {
    const intern = new Intern('Jain Dough',182,'jough_dain@gmail','AcmeLooniversity');

    expect(intern.name).toBe('Jain Dough')
});

test('checks to ensure intern school generates', () => {
    const intern = new Intern('Jain Dough',182,'jough_dain@gmail','AcmeLooniversity');

    expect(intern.school).toEqual(expect.any(String));
});

test('checks to ensure getSchool() function works', () => {
    const intern = new Intern('Jain Dough',182,'jough_dain@gmail','AcmeLooniversity');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('checks to ensure getRole() function works', () => {
    const intern = new Intern('Jain Dough',182,'jough_dain@gmail','AcmeLooniversity');

    expect(intern.getRole()).toBe('Intern');
});
