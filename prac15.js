class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }
}

let employee = new Employee("John", 50000);
console.log(employee.getSalary());
employee.setSalary(60000);
console.log(employee.getSalary()); 
