// ? Polymorphism

class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negitive value");
    }
    this._baseSalary = newSalary;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay() {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }
  override calculatePay(taxRate: number) {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
}

const employee = new Employee("Mir", 20000);
const manager = new Manager("Bir", 20000);
const developer = new Developer("Nir", 20000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.3));
