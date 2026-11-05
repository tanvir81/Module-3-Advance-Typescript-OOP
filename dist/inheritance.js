// ? Inheritance:
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
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
//? Manager Class
// class Manager extends Employee {
//   teamMemberCount: number;
//   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
//     super(name, _baseSalary);
//     this.teamMemberCount = teamMemberCount;
//   }
// }
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    discribeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary} people`;
    }
}
const employee = new Employee("tanvir", 22000);
const manager = new Manager("sunny", 24000, 20);
console.log(manager.discribeWork());
console.log(manager.describeManager());
export {};
