class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Bob");
console.log(person.greet());

class Employee {
  public name: string;
  private salary: number;
  readonly id: number;

  constructor(name: string, salary: number, id: number) {
    this.name = name;
    this.salary = salary;
    this.id = id;
  }

  getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("Alice", 50000, 101);
console.log(emp.name);
console.log(emp.getSalary());
