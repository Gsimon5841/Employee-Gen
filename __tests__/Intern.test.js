const Intern = require('../lib/Intern.js');

test('Create an Intern', () => {
    const intern = new Intern('Jazz Fenton', 'Jazz@fenton.com', 4, 'Casper High School' );

    expect(intern.getName()).toBe('Jazz Fenton');
    expect(intern.getId()).toBe(4);
    expect(intern.getEmail()).toBe('Jazz@fenton.com');
    expect(intern.getSchool()).toBe('Casper High School');
    expect(intern.getRole()).toBe('Intern');
})