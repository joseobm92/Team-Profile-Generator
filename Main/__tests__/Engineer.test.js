const Engineer = require("../lib/Engineer");


test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set engineer name
test("can set name via constructor arguments", () => {
    const engineer = new Engineer("Jose");
    expect(engineer.name).toBe("Jose");
});

// testing set engineer id
test("can set name id constructor arguments", () => {
    const engineer = new Engineer("Jose", 15);
    expect(engineer.id).toBe(15);
});

// testing set engineer email
test("can set name email constructor arguments", () => {
    const engineer = new Engineer("Jose", 24, "test@email.com");
    expect(engineer.email).toBe("test@email.com");
});

// testing set engineer github
test("can set name github constructor arguments", () => {
    const engineer = new Engineer("Jose", 24, "test@email.com", "github" );
    expect(engineer.github).toBe("github");
});

// TESTS FOR GETTERS //

// testing for getName() engineer
test("can get name via getName()", () => {
    const engineer = new Engineer("Jose");
    expect(engineer.getName()).toBe(engineer.name);
});

// testing for getId() engineer
test("can get id via getId()", () => {
    const engineer = new Engineer("Jose", 199);
    expect(engineer.getId()).toBe(engineer.id);
});