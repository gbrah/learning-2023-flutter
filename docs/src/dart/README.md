# DART

Dart is the programming language used in Flutter development. It is an object-oriented, class-based language with a syntax that will feel familiar to developers coming from various programming backgrounds.

Dart offers features like strong typing, garbage collection, and a rich standard library, making it a robust language for building complex applications. It also supports just-in-time (JIT) and ahead-of-time (AOT) compilation, allowing for both fast development and optimized production builds.

## Basics

Dart provides a wide range of data types, including numbers, strings, booleans, lists, maps, and more. You can use various operators to manipulate data and control flow in your code.

Functions are essential in Dart, and it supports both named and anonymous functions, making it flexible for different use cases. Dart also has a comprehensive exception handling mechanism to deal with errors and exceptions gracefully.

### Types

```dart
int age = 30;
String name = "John";
bool isStudent = true;
List<int> numbers = [1, 2, 3, 4];
Map<String, int> scores = {"Math": 90, "Science": 85};
int a = 5;
int b = 3;

int sum = a + b; // Addition
int difference = a - b; // Subtraction
int product = a * b; // Multiplication
double quotient = a / b; // Division
int remainder = a % b; // Modulus (Remainder)
```

### Control Flow


In Dart, control flow structures allow you to manage the flow of your program, make decisions, and repeat actions. This chapter covers various control structures, including conditional statements, loops, and error handling.


#### `if`, `else if`, `else` Statements

The `if` statement allows you to execute a block of code if a condition is true. You can use `else if` and `else` to handle multiple conditions.

```dart
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if neither condition1 nor condition2 is true
}
```
#### switch and case Statements

The switch statement is used to select one of many code blocks to be executed. Each block is defined using case and terminated with break.

```dart
switch (variable) {
  case value1:
    // Code to execute if variable equals value1
    break;
  case value2:
    // Code to execute if variable equals value2
    break;
  default:
    // Code to execute if variable doesn't match any case
}
```
#### Loops

 for loop is used to execute a block of code a specific number of times. You can define an initialization, condition, and increment/decrement expression.

```dart
Copy code
for (int i = 0; i < 5; i++) {
  // Code to execute in each iteration
}
```

A while loop repeats a block of code while a condition is true. The condition is evaluated before each iteration.

```dart
while (condition) {
  // Code to execute while the condition is true
}
```

A do-while loop is similar to a while loop, but it guarantees that the block of code is executed at least once before checking the condition.
```dart
do {
  // Code to execute at least once
} while (condition);
```


### Null Safety

Dart introduced null safety as a major feature, aiming to eliminate one of the most common sources of bugs in software development: null pointer exceptions. In a null-safe Dart, variables can be non-nullable (the default) or nullable.

Non-nullable variables must always have a value, and you can't assign `null` to them, preventing accidental null pointer exceptions. Nullable variables can hold a value or be `null`.

```dart
String name = 'John'; // Non-nullable, must have a value
int? age; // Nullable, can be assigned null
```

#### Conditional Access

Dart provides the `?.` operator for conditional access. It allows you to access a property or method on an object only if the object is not `null`.

``` dart 
tring? maybeName;
String? lengthString = maybeName?.length.toString(); // Will be null if maybeName is null
```
####  Null Checking

Use conditional statements and null checks to handle nullable variables gracefully, such as `if (variable != null)`.

Dart's type system helps you catch null-related errors during development, improving code reliability and safety. You can use the null safety feature to make your code more robust and less prone to runtime errors.


#### Late Variables

In some cases, you may need to initialize non-nullable variables at a later time. Dart provides the `late` modifier for such scenarios, indicating that the variable will be assigned a value before it's used.

``` dart
late int lateAge;
// Later in the code
lateAge = 30;
```

### Exceptions 

``` dart
try {
  int result = 10 ~/ 0; // Division by zero
  print('Result: $result');
} catch (e) {
  print('An error occurred: $e');
} finally {
  print('Execution completed.');
}
```

### Lambdas

Lambdas allow you to define small, inline functions on the fly. Here's an example of a lambda that squares a number:

```dart
int square(int x) => x * x;

void main() {
  final result = square(5); // result is 25
}
```

### Functions 

```dart
// Function that adds two numbers and returns the result
int add(int a, int b) {
  return a + b;
}

// Function with optional parameters
String greet(String name, [String greeting = 'Hello']) {
  return '$greeting, $name!';
}
```
#### Objects, classes

```dart
class Person {
  String name;
  int age;

  Person(this.name, this age);

  void introduceYourself() {
    print('My name is $name, and I am $age years old.');
  }
}

// Creating an instance of the Person class
var person1 = Person('Alice', 28);
person1.introduceYourself();
```

### Higher-Order Functions

Higher-order functions take one or more functions as arguments or return a function as a result. Here's an example of a higher-order function that applies a function to a list of values

``` dart

int applyFunctionToValues(List<int> values, int Function(int, int) func) {
  int result = 0;
  for (final value in values) {
    result = func(result, value);
  }
  return result;
}

void main() {
  final values = [1, 2, 3, 4, 5];

  final product = applyFunctionToValues(values, (int result, int value) {
    // A more complex lambda function to compute the product
    return result + (value * 2); // Doubling each value and adding to the result
  });

  print('Product: $product'); // Product is 40
}
```

###  IDE : DartPad

To write Dart code, developers have multiple options. 

You can download the SDK for integrated development environment [here](https://dart.dev/get-dart)

[DartPad](https://dartpad.dev/) is an online platform that allows you to write and run Dart code directly in your browser, making it accessible for quick experimentation.

## 🧪 Exercices 

```dart
/* Types
 * Define variables of different data types (int, double, String, List) and print their values in Dart.*/

/* Control Flow 
 * 
 * Exercise 1
 * Even or Odd
 * Write a Dart program that takes an integer as input and determines if it's even or odd. 
 * Use an if-else statement to make the decision.
*/

/* Exercise 2
 * Grade Classification
 * Create a program that calculates and displays the letter grade based on a numeric score. 
 * Use a switch statement to handle different score ranges (e.g., A for 90-100, B for 80-89, etc.).
*/

/* Null Safety
 * Exercice 1 : 
 * Declare variables for a user's name and age, and make sure they are non-nullable. 
 * Try to assign `null` to these variables and observe the null safety error.*/

/* Exercice 2
 * Create a Dart program that simulates a user management system with null safety. 
 * The goal is to manage user data, including their names, emails, and roles, while handling null values appropriately.
*/

/* Hints 
 * Define a User class to represent a user with the following properties:
 * - id 
 * - name 
 * - email 
 * - role 
 * Ensure that the class is designed with null safety in mind.
 * Implement a function printUserInfo that takes a User object as a parameter and prints their information. 
 * In the main function, create instances of the User class with various scenarios. 
 */


/* Objects
 * Create a class `Person` with properties `name` and `age`. Write a Dart program that creates two instances of `Person` and prints their information.*/


/* Functions
 * Write a Dart function called `calculateSum` that takes two integers as arguments and returns their sum. Call this function in your program.*/


/* Exceptions
 * Write a Dart program that divides two numbers, but handle the exception if the denominator is zero. */ 


/* Lambdas and Higher-Order Functions
 * Write a higher-order function called `operateOnList` that takes a list of integers and a function as parameters. 
 * The function should apply the given function to each element in the list and return a list of the results. */

```

## 🎯 Solutions 
::: details click here to view the solutions

```dart
/* Types
 * Define variables of different data types (int, double, String, List) and print their values in Dart.*/

void main() {
  int age = 30;
  double price = 19.99;
  String name = 'Alice';
  List<int> numbers = [1, 2, 3, 4, 5];

  print('Age: $age');
  print('Price: $price');
  print('Name: $name');
  print('Numbers: $numbers');
}

/* Control Flow 
 * 
 * Exercise 1
 * Even or Odd
 * Write a Dart program that takes an integer as input and determines if it's even or odd. 
 * Use an if-else statement to make the decision.
*/

void main() {
  int number = 7;
  
  if (number % 2 == 0) {
    print('$number is even.');
  } else {
    print('$number is odd.');
  }
}

/* Exercise 2
 * Grade Classification
 * Create a program that calculates and displays the letter grade based on a numeric score. 
 * Use a switch statement to handle different score ranges (e.g., A for 90-100, B for 80-89, etc.).
*/

void main() {
  int score = 85;
  String grade;

  switch (score ~/ 10) {
    case 10:
    case 9:
      grade = 'A';
      break;
    case 8:
      grade = 'B';
      break;
    case 7:
      grade = 'C';
      break;
    case 6:
      grade = 'D';
      break;
    default:
      grade = 'F';
  }

  print('Score: $score\nGrade: $grade');
}

/* Null Safety
 * Exercice 1 : 
 * Declare variables for a user's name and age, and make sure they are non-nullable. 
 * Try to assign `null` to these variables and observe the null safety error.*/

void main() {
  String name = 'John'; // Non-nullable, must have a value
  int age; // Non-nullable, uninitialized, must be assigned a value

  // This line will result in a null safety error
  // age = null; // Error: A value of type 'Null' can't be assigned to a variable of type 'int'.
}

/* Exercice 2
 * Create a Dart program that simulates a user management system with null safety. 
 * The goal is to manage user data, including their names, emails, and roles, while handling null values appropriately.
*/

/* Hints 
 * Define a User class to represent a user with the following properties:
 * - id 
 * - name 
 * - email 
 * - role 
 * Ensure that the class is designed with null safety in mind.
 * Implement a function printUserInfo that takes a User object as a parameter and prints their information. 
 * In the main function, create instances of the User class with various scenarios. 
 */

class User {
  final int id;
  String? name;
  final String email;
  String? role;

  User(this.id, this.email, {this.name, this.role});
}

void printUserInfo(User user) {
  print('User Information:');
  print('ID: ${user.id}');
  print('Name: ${user.name ?? "Not provided."}');
  print('Email: ${user.email}');
  print('Role: ${user.role ?? "Not provided."}');
  print('---------------------');
}

void main() {
  // Create user instances with different scenarios
  final user1 = User(1, 'user1@example.com', name: 'Alice', role: 'Admin');
  final user2 = User(2, 'user2@example.com', name: 'Bob');
  final user3 = User(3, 'user3@example.com', role: 'User');
  final user4 = User(4, 'user4@example.com');

  // Print user information
  printUserInfo(user1);
  printUserInfo(user2);
  printUserInfo(user3);
  printUserInfo(user4);
}

/* Objects
 * Create a class `Person` with properties `name` and `age`. Write a Dart program that creates two instances of `Person` and prints their information.*/

class Person {
  String name;
  int age;

  Person(this.name, this.age);
}

void main() {
  Person person1 = Person('John', 30);
  Person person2 = Person('Alice', 28);

  print('Person 1: Name - ${person1.name}, Age - ${person1.age}');
  print('Person 2: Name - ${person2.name}, Age - ${person2.age}');
}


/* Functions
 * Write a Dart function called `calculateSum` that takes two integers as arguments and returns their sum. Call this function in your program.*/

int calculateSum(int a, int b) {
  return a + b;
}

void main() {
  int result = calculateSum(5, 3);
  print('Sum: $result'); // Sum: 8
}


/* Exceptions
 * Write a Dart program that divides two numbers, but handle the exception if the denominator is zero. */ 

void divideNumbers(int numerator, int denominator) {
  try {
    if (denominator == 0) {
      throw Exception("Division by zero is not allowed.");
    }
    double result = numerator / denominator;
    print('Result: $result');
  } catch (e) {
    print('An error occurred: $e');
  }
}

void main() {
  divideNumbers(10, 2); // Result: 5.0
  divideNumbers(8, 0);  // An error occurred: Exception: Division by zero is not allowed.
}


/* Lambdas and Higher-Order Functions
 * Write a higher-order function called `operateOnList` that takes a list of integers and a function as parameters. 
 * The function should apply the given function to each element in the list and return a list of the results. */

List<int> operateOnList(List<int> numbers, int Function(int) operation) {
  List<int> result = [];
  for (var number in numbers) {
    result.add(operation(number));
  }
  return result;
}

void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  List<int> squaredNumbers = operateOnList(numbers, (x) => x * x);
  print('Squared numbers: $squaredNumbers');
}
```
:::

## Advanced features 

### Mixin

Dart introduces advanced language features like mixins, which allow you to reuse code across multiple classes without inheritance.

### Future, Stream
For handling asynchronous operations, Dart provides two essential constructs: `Future` and `Stream`. Futures represent a single value that may be available in the future, while Streams represent a sequence of values over time. This is crucial for managing asynchronous tasks effectively.

### Isolate
Isolates in Dart are lightweight concurrent processes that allow your application to take full advantage of multi-core processors. They enable parallel execution and can be instrumental in optimizing performance.


## 📖 Further reading

- [Dart SDK](https://dart.dev/get-dart)
- [Dart language official docs](https://dart.dev/language)
- [DartPad](https://dartpad.dev/?)

