const Employee = require('../lib/Employee');

test('checks to ensure parent class of employees has all the correct properties', () => {
    const employee = new Employee('John Doe',898,'john_doe@gmail.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('checks the getName() function', () => {
    const employee = new Employee('John Doe',898,'john_doe@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test ('checks the getId() function', () => {
    const employee = new Employee('John Doe',898,'john_doe@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test ('checks the getEmail() function', () => {
    const employee = new Employee('John Doe',898,'john_doe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test ('checks the getRole() function', () => {
    const employee = new Employee('John Doe',898,'john_doe@gmail.com');
    
    expect(employee.getRole()).toBe('Employee');
});
