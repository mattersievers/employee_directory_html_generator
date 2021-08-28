const Engineer = require('../lib/Engineer');

test('checks to ensure engineers generate', () => {
   const engineer = new Engineer('Jane Doe',878,'jane_doe@gmail','janeydoeyhub')

    expect(engineer.name).toBe('Jane Doe')
});

test('checks to ensure engineers have github', () => {
   const engineer = new Engineer('Jane Doe',878,'jane_doe@gmail','janeydoeyhub')

    expect(engineer.github).toEqual(expect.any(String));
});

test('checks to ensure engineers getGitHub() function works', () => {
   const engineer = new Engineer('Jane Doe',878,'jane_doe@gmail','janeydoeyhub')

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('checks to ensure engineers getRole() function works', () => {
   const engineer = new Engineer('Jane Doe',878,'jane_doe@gmail','janeydoeyhub')

    expect(engineer.getRole()).toBe('Engineer');
});

