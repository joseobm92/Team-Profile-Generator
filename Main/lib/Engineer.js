const Employee = require('./Employee')

// Engineer extends Employee class
class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email); // inherit this from employee class
        this.github = github; // github is exclusive for Engineer class (extends)
    }

    getRole(){
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}
// export module to be used in other files
module.exports = Engineer;