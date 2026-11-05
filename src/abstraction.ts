//? Abstraction

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = newSalary;
  }

  abstract calculatePay(): number;
  abstract getResourses(): string[];
  abstract registerEntryTime(): string;
}

class Manager extends Employee {
  calculatePay(): number {
    return this.baseSalary + 5000;
  }

  getResourses(): string[] {
    return ["Laptop", "Company Car", "Office Room"];
  }

  registerEntryTime(): string {
    return `${this.name} entered the office at 9:00 AM`;
  }
}

class Developer extends Employee {
  calculatePay(): number {
    return this.baseSalary + 3500;
  }

  getResourses(): string[] {
    return ["Laptop", "VS Code", "GitHub Access"];
  }

  registerEntryTime(): string {
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
