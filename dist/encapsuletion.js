// Todo- Encapsulation: Protect a State and Change it  Through Method
//* Access Modifire
// ? Public
// ? Private
// ? Protected
//? Readonly
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
    get baseSalaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary can not be nagitive value");
        }
        this._baseSalary = newSalary;
    }
}
const employee = new Employee("tanvir", 22000);
const employee2 = new Employee("jani", 44000);
employee.baseSalary = 40000;
console.log(employee.baseSalaryWithBonus);
export {};
