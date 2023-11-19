class Employee {
    constructor(name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = null;
        this.subordinates = [];
    }
    addSubordinate(subordinate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
    }
    // Get the number of subordinates of an employee
    get numberOfSubordinates() {
        return this.subordinates.length;
    }
    // Get the number of people in between an employee and the CEO
    get numberOfPeopleToCEO() {
        let numberOfPeople = 0;
        let currentEmployee = this;

        // Climb "up" the tree (using iteration), counting nodes, until no boss is found
        while (currentEmployee.boss) {
            currentEmployee = currentEmployee.boss;
            numberOfPeople++;
        }

        return numberOfPeople;
    }
    // function that returns true if 2 employees share the same boss and false otherwise
    hasSameBoss(employee) {
        return this.boss === employee.boss;
    }
}

// Declare all the employee instances
const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

// Add subordinates to Ada
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

console.log(craig.boss);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);