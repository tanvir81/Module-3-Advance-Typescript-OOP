// ? Exemple -1
class Employee {
  name: string;
  bsaeSalary: number;

  constructor(name: string, baseSalary: number) {
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
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user = new User("tanvir", 2424);
const user2 = new User("khan", 2524);
console.log(user);
console.log(user2);
