const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager=null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        // bonus = (manager's salary + total salary of
        //          all employees under them) * multiplier
        return (this.salary + this._totalSubSalary()) * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;

        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }
}


try {
    module.exports = Manager;
} catch {
    module.exports = null;
}
