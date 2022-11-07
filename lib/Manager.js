const Employee = require('./Employee')

//Manager extends Employee Class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email); // inherit this from Employee Class
        this.officeNumber = officeNumber; // officeNumber is exclusive to Managers (extends)
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
// export module to be used in other files
module.exports = Manager;