// ? Inheritance:
class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
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

  describe(): string {
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
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  discribeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this._baseSalary} people`;
  }
}

const employee = new Employee("tanvir", 22000);

const manager = new Manager("sunny", 24000, 20);

console.log(manager.discribeWork());
console.log(manager.describeManager());
