// ? Exemple -1
class Employee {
    name;
    bsaeSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.bsaeSalary = baseSalary;
    }
}
const employee = new Employee("tanvir", 22000);
const employee2 = new Employee("jani", 44000);
console.log(employee);
console.log(employee2);
// ? Exemple -2
class User {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new User("tanvir", 2424);
const user2 = new User("khan", 2524);
console.log(user);
console.log(user2);
export {};
