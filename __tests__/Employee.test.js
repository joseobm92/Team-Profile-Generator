const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set employee name
test("can set name via constructor arguments", () => {
    const employee = new Employee("Jose");
    expect(employee.name).toBe("Jose");
});

// testing set employee id
test("can set name id constructor arguments", () => {
    const employee = new Employee("Jose", 15);
    expect(employee.id).toBe(15);
});

// testing set employee email
test("can set name email constructor arguments", () => {
    const employee = new Employee("Jose", 24, "test@email.com");
    expect(employee.email).toBe("test@email.com");
});

// TESTS FOR GETTERS //

// testing for getName() employee
test("can get name via getName()", () => {
    const employee = new Employee("Jose");
    expect(employee.getName()).toBe(employee.name);
});

// testing for getId() employee
test("can get id via getId()", () => {
    const employee = new Employee("Jose", 199);
    expect(employee.getId()).toBe(employee.id);
});


// testing for getEmail() employee
test("can get id via getEmail()", () => {
    const employee = new Employee("Jose", 199, "email@test.com");
    expect(employee.getEmail()).toBe(employee.email);
});


// testing for getRole() employee
test("can get id via getRole()", () => {
    const employee = new Employee("Jose", 199, "email");
    expect(employee.getRole()).toBe("Employee");
});