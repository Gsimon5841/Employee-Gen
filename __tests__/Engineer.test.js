const Engineer = require("../lib/Engineer")


test("Create an Enginner", () => {
    const engineer = new Engineer('Maddie Fenton','Maddie@fenton.com', 3,'https://github.com/maddiebustghosts');

    expect(engineer.getName()).toBe('Maddie Fenton');
    expect(engineer.getEmail()).toBe('Maddie@fenton.com');
    expect(engineer.getId()).toBe(3);
    expect(engineer.getGithub()).toBe('https://github.com/maddiebustghosts');
    expect(engineer.getRole()).toBe('Engineer');
    
})