const Intern = require("../lib/Intern");


test("Can instantiate Engineer instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set intern name
test("can set name via constructor arguments", () => {
    const intern = new Intern("Jose");
    expect(intern.name).toBe("Jose");
});

// testing set intern id
test("can set name id constructor arguments", () => {
    const intern = new Intern("Jose", 15);
    expect(intern.id).toBe(15);
});

// testing set intern email
test("can set name email constructor arguments", () => {
    const intern = new Intern("Jose", 24, "test@email.com");
    expect(intern.email).toBe("test@email.com");
});

// testing set intern school
test("can set name github constructor arguments", () => {
    const intern = new Intern("Jose", 24, "test@email.com", "ucf" );
    expect(intern.school).toBe("ucf");
});

// TESTS FOR GETTERS //

// testing for getName() intern
test("can get name via getName()", () => {
    const intern = new Intern("Jose");
    expect(intern.getName()).toBe(intern.name);
});

// testing for getId() intern
test("can get id via getId()", () => {
    const intern = new Intern("Jose", 199);
    expect(intern.getId()).toBe(intern.id);
});