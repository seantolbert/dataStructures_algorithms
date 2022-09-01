// what is a class?
// a class is like a blueprint for creating objects
// with predefined properties and methods

// the method to create new objects must be called constructor
// class keyword creates a constant so you don't have to redefine

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // instance mnethods provide functionality towards a single instance of the class
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `${this.firstName} is expelled!`;
    }
    return `${this.firstName} has been late ${this.tardies} time(s).`;
  }
  addScore(newScore) {
    this.scores.push(newScore);
    return this.scores;
  }
  calculateAverage() {
    if (this.scores.length === 0) return "No scores to average.";
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }
  // static methods are pertinent to classes, but not to a
  // specific instance of that class
  // cannot be called at the instance level
  // rare
  static enrollStudents(...students) {
    // maybe send emails to each associated student email for example
    return "ENROLLING STUDENTS!";
  }
}

// use the new keyword to create new instances of the class
let firstStudent = new Student("Sean", "Tolbert", 12);
let secondStudent = new Student("Kyle", "Tolbert", 10);

firstStudent.fullName(); // 'Your full name is Sean Tolbert.'
firstStudent.markLate(); // 'Sean has been late 1 time(s).'
firstStudent.addScore(92); // [92]
firstStudent.addScore(87); // [92, 87]
firstStudent.calculateAverage(); // 89.5

// static function invocation
Student.enrollStudents(); // 'ENROLLING STUDENTS!'