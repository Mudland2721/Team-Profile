class Manager {
    constructor(name, id, email, officePhone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officePhone = officePhone;
    };
    getName();
    getId();
    getEmail();
    getProfession();
}
module.exports = Manager
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
