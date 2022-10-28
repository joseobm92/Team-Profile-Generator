const Employee = require('./Employee')
//Intern extends Employee class
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email); // inherit this from Employee class
        this.school = school; // school is exclusive to Intern class (extends)
    }
    
    getRole(){
        return 'Intern'
    }

    getSchool() {
        return this.school
    }
}
// export module to be used in other files
module.exports = Intern;