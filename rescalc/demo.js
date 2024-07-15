class Person {
    // Constructor method with parameters
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display the person's details
    displayInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Creating instances of the Person class with different parameters
  person1 = new Person('Peter', 19);
  person2 = new Person('Grace', 20);
  
  // Calling the method
  console.log(person1.displayInfo());
  console.log(person2.displayInfo());