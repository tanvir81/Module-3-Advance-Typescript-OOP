// ? Polymorphism
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
            throw new Error("Salary cannot be negitive value");
        }
        this._baseSalary = newSalary;
    }
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.baseSalary + 3000 - this.baseSalary * taxRate;
    }
}
const employee = new Employee("Mir", 20000);
const manager = new Manager("Bir", 20000);
const developer = new Developer("Nir", 20000, "Backend");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.3));
export {};
