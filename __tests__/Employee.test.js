const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Danny Fenton", "Danny@fenton.com", 1);

    expect(employee.getName()).toBe("Danny Fenton");
    expect(employee.getEmail()).toBe("Danny@fenton.com");
    expect(employee.getId()).toBe(1);
    expect(employee.getRole()).toBe("Employee");
});