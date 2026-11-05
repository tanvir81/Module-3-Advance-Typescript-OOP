// Todo- Encapsulation: Protect a State and Change it  Through Method
//* Access Modifire
// ? Public
// ? Private
// ? Protected

//? Readonly
class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }
  get baseSalaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
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
