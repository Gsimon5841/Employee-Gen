const Manager = require("../lib/Manager")

test("create a Manager", () => {
    const manager = new Manager("Jack Fenton","Jack@fenton.com",2,431);
    
    expect(manager.getName()).toBe("Jack Fenton");
    expect(manager.getId()).toBe(2);
    expect(manager.getEmail()).toBe("Jack@fenton.com");
    expect(manager.getOfficeNumber()).toBe(431);
    expect(manager.getRole()).toBe('Manager');

});