const Manager = require("../lib/Manager");


test("Can instantiate Engineer instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set manager name
test("can set name via constructor arguments", () => {
    const manager = new Manager("Jose");
    expect(manager.name).toBe("Jose");
});

// testing set manager id
test("can set name id constructor arguments", () => {
    const manager = new Manager("Jose", 15);
    expect(manager.id).toBe(15);
});

// testing set manager email
test("can set name email constructor arguments", () => {
    const manager = new Manager("Jose", 24, "test@email.com");
    expect(manager.email).toBe("test@email.com");
});

// testing set manager officeNumber
test("can set name github constructor arguments", () => {
    const manager = new Manager("Jose", 24, "test@email.com", "2510" );
    expect(manager.officeNumber).toBe("2510");
});

// TESTS FOR GETTERS //

// testing for getName() manager
test("can get name via getName()", () => {
    const manager = new Manager("Jose");
    expect(manager.getName()).toBe(manager.name);
});

// testing for getId() manager
test("can get id via getId()", () => {
    const manager = new Manager("Jose", 199);
    expect(manager.getId()).toBe(manager.id);
});