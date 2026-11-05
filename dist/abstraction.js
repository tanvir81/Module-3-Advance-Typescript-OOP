//? Abstraction
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
    getResourses() {
        return ["Laptop", "Company Car", "Office Room"];
    }
    registerEntryTime() {
        return `${this.name} entered the office at 9:00 AM`;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 3500;
    }
    getResourses() {
        return ["Laptop", "VS Code", "GitHub Access"];
    }
    registerEntryTime() {
        return `${this.name} entered the office at 10:00 AM`;
    }
}
// Creating objects
const manager = new Manager("Rahim", 50000);
const developer = new Developer("Karim", 40000);
console.log(manager.calculatePay());
console.log(manager.getResourses());
console.log(manager.registerEntryTime());
console.log(developer.calculatePay());
console.log(developer.getResourses());
console.log(developer.registerEntryTime());
export {};
