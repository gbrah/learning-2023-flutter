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

// Constructor 
class Point {
  final double x;
  final double y;

  // Sets the x and y instance variables
  // before the constructor body runs.
  Point(this.x, this.y);
}
```

### Single line fuction

 allow you to define small, inline functions on the fly. Here's an example of a  that squares a number:

```dart
int square(int x) => x * x;

void main() {
  final result = square(5); // result is 25
}
```

### Lambda/Anonymous function 

```dart
const list = ['apples', 'bananas', 'oranges'];

list.map(
  // the lamda passed in parameter
  (item) {
  return item.toUpperCase();
   }
).forEach(
  // second lamdas
  (item) {
  print('$item: ${item.length}');
  }
);
```
Even shorter if you have only one instruction:

```dart
list
    .map((item) => item.toUpperCase())
    .forEach((item) => print('$item: ${item.length}'));
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

###  IDE : SDK or DartPad 

To write Dart code, developers have multiple options. 

You can download the SDK for integrated development environment [here](https://dart.dev/get-dart)

``` shell
 dart create -t console my_app
 cd my_app
 dart analyze
 dart test
 dart run bin/my_app.dart
 dart compile exe <DART_FILE>

#You can also run pub commands using the dart tool:
 dart pub get
 dart pub outdated
 dart pub upgrade
```

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

Concurrency is an important aspect of Dart programming that enables you to perform multiple tasks simultaneously. This chapter explores `Future`, `async` functions, and `Isolate` to help you better understand concurrency in Dart.

### `async/await` functions

The `async` keyword before a function indicates that it performs asynchronous operations. The `await` keyword is used within async functions to wait for the completion of a future before continuing.

```dart
Future<void> performAsyncOperation() async {
  final result = await fetchData();
  // Continue execution after the Future is complete.
}
```

### Future

A `Future` represents a potential value or error that will be available at some time in the future. `Future` is used for asynchronous programming and allows you to perform non-blocking operations. Creating a `Future` using the `Future` constructor.

Using `async` and `await` to work with `Future` for cleaner asynchronous code.
Handling completed, error, and uncompleted `Future` using `then`, `catchError`, and `whenComplete`.

```dart
Future<void> fetchData() async {
  try {
    final data = await fetchDataFromServer();
    print('Data received: $data');
  } catch (error) {
    print('Error: $error');
  }
}
```

### Isolates

Isolates in Dart are lightweight concurrent processes that allow your application to take full advantage of multi-core processors. They enable parallel execution and can be instrumental in optimizing performance.


```dart
import 'dart:isolate';

void isolateFunction(SendPort sendPort) {
  // Perform work in the isolate.
  final result = performIsolateTask();
  sendPort.send(result);
}

void main() async {
  final receivePort = ReceivePort();
  final isolate = await Isolate.spawn(isolateFunction, receivePort.sendPort);
  final result = await receivePort.first;
  print('Isolate result: $result');
  receivePort.close();
  isolate.kill();
}
```

A `ReceivePort` is a non-broadcast stream. This means that it buffers incoming messages until a listener is registered. Only one listener can receive messages

### Streams 

Streams in Dart facilitate asynchronous data flow, enabling real-time data processing and event handling. Streams represent a sequence of values over time. 
In this example, we create a stream that emits integers at regular intervals and listen to the stream to print the received values.

``` dart
import 'dart:async';

void main() {
  // Create a StreamController to manage the stream
  final StreamController<int> streamController = StreamController<int>();

  // Create a stream that emits values every second
  final Stream<int> dataStream = Stream.periodic(Duration(seconds: 1), (count) => count);

  // Start listening to the stream
  final subscription = dataStream.listen((data) {
    print('Received data: $data');
  });

  // After 5 seconds, stop listening to the stream and close the controller
  Future.delayed(Duration(seconds: 5), () {
    subscription.cancel(); // Stop listening
    streamController.close(); // Close the stream controller
  });
}
```

### Mixin

Dart introduces advanced language features like mixins, which allow you to reuse code across multiple classes without inheritance.


## 🧪 Exercices 

1. **Future Handling**

Write a Dart program that simulates fetching data asynchronously from a server using a Future. Create a function fetchDataFromServer that returns a 
``` dart
Future<String>
```
representing data retrieval. Implement error handling using the catchError method and display the result when the Future is complete.

2.  **Async Function**

Create an async function called downloadData that simulates downloading a large file. Use a Future to represent the download process and await to wait for it to complete. Display a message when the download is finished.

3. **Using Isolates**

Write a program that uses an isolate to calculate the factorial of a number. Create a function calculateFactorial that takes an integer and returns its factorial. Use message passing to communicate with the isolate and display the result in the main thread.

4. **Using MixIn**

Create a mixin called Loggable that provides logging functionality to classes. The mixin should include a method log that takes a message as a parameter and prints it with a timestamp. Create a class Logger that uses the Loggable mixin to log messages. Demonstrate the use of the Loggable mixin in the Logger class to log messages.

5. **Streams : Real-time Data Dashboard**

Create a Dart program that simulates a real-time data dashboard using streams. The dashboard should display live data updates and visualize data in real-time. Use stream controllers and subscriptions to manage the data flow and update the dashboard interface.

## 🎯 Solutions 

::: details click here to view the solutions

```dart 
// Exercice 1
Future<String> fetchDataFromServer() async {
  await Future.delayed(Duration(seconds: 2)); // Simulate async operation
  return 'Data from the server';
}

void main() {
  fetchData().then((data) {
    print('Data received: $data');
  }).catchError((error) {
    print('Error: $error');
  });
}

Future<void> fetchData() async {
  try {
    final data = await fetchDataFromServer();
    print('Data received: $data');
  } catch (error) {
    print('Error: $error');
  }
}

//Exercice 2

Future<void> downloadData() async {
  print('Downloading data...');

  // Simulate a delay for downloading
  await Future.delayed(Duration(seconds: 3));

  print('Download complete.');
}

void main() {
  downloadData();
}

// Exercice 3 
import 'dart:isolate';

int calculateFactorial(int n) {
  if (n == 0) return 1;
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

void isolateFunction(SendPort sendPort) {
  final receivePort = ReceivePort();
  sendPort.send(receivePort.sendPort);

  receivePort.listen((message) {
    if (message is int) {
      final result = calculateFactorial(message);
      sendPort.send(result);
    }
  });
}

void main() async {
  final receivePort = ReceivePort();
  final isolate = await Isolate.spawn(isolateFunction, receivePort.sendPort);

  final sendPort = await receivePort.first;
  sendPort.send(5);

  final result = await receivePort.first;
  print('Factorial result: $result');

  receivePort.close();
  isolate.kill();
}

// Exercice 4 
mixin Loggable {
  void log(String message) {
    final timestamp = DateTime.now();
    print('$timestamp: $message');
  }
}
class Logger with Loggable {
  // Additional properties and methods specific to the Logger class, if needed.
}

void main() {
  final logger = Logger();
  logger.log('This is an info message.');
  logger.log('Another info message.');
}

// Exercice 5 
import 'dart:async';

class DataDashboard {
  StreamController<int> _dataStreamController = StreamController<int>.broadcast();

  Stream<int> get dataStream => _dataStreamController.stream;

  DataDashboard() {
    // Simulate data updates at regular intervals (e.g., every 2 seconds)
    Timer.periodic(Duration(seconds: 2), (timer) {
      // Generate random data
      final data = _generateRandomData();
      // Add the data to the stream
      _dataStreamController.add(data);
    });
  }

  int _generateRandomData() {
    // Simulate data generation (replace with your actual data source)
    return DateTime.now().second; // Example: Display seconds as data
  }

  void dispose() {
    _dataStreamController.close();
  }
}

void main() {
  final dashboard = DataDashboard();

  // Subscribe to the data stream and display updates
  final subscription = dashboard.dataStream.listen((data) {
    print('Received data update: $data');
  });

  // To stop the dashboard, uncomment the following line after some time
  // Future.delayed(Duration(seconds: 10), () {
  //   dashboard.dispose();
  // });

  // Keep the program running to receive real-time updates
  // To stop the program, press Ctrl+C
}
```
:::

## 🧪 Mini project 1: Guess the Number

Create a command-line game where the player tries to guess a randomly generated number.

1. The program generates a random number between 1 and 100 (inclusive).
2. The player is given a limited number of attempts (e.g., 10) to guess the number correctly.
3. After each guess, the program provides feedback, indicating if the guessed number is too high or too low.
4. The game ends when the player guesses the correct number or runs out of attempts.
5. Keep track of high scores and display them.
6. Implement multiple difficulty levels with different number ranges.

**More features**
- Introduce more complex rules, such as time limits.
- Add animations or graphical elements (e.g., ASCII art) to make the CLI game more engaging.

This project allows students to practice and consolidate various programming concepts while creating an entertaining game. It can be completed in a few hours and serves as a great summary of the topics covered.

## 🎯 A solution 

::: details click here to view a solution
```dart 
import 'dart:io';
import 'dart:math';

class Game {
  late int targetNumber;
  late int maxAttempts;
  late int attempts;
  late List<int> guesses;
  late List<String> highScores;

  Game(int maxAttempts) {
    targetNumber = Random().nextInt(100) + 1;
    this.maxAttempts = maxAttempts;
    attempts = 0;
    guesses = [];
    highScores = [];
  }

  void start() {
    print('Welcome to Guess the Number Game!');
    print('You have $maxAttempts attempts to guess the number between 1 and 100.');

    while (attempts < maxAttempts) {
      stdout.write('Guess #${attempts + 1}: ');
      final input = stdin.readLineSync();
      if (input == null || input.isEmpty) {
        print('Please enter a valid number.');
        continue;
      }

      try {
        final guess = int.parse(input);
        attempts++;
        guesses.add(guess);
        if (guess == targetNumber) {
          print('Congratulations! You guessed the correct number in $attempts attempts.');
          saveHighScore(attempts);
          break;
        } else if (guess < targetNumber) {
          print('Try a higher number.');
        } else {
          print('Try a lower number.');
        }
      } catch (e) {
        print('Invalid input. Please enter a valid number.');
      }
    }

    if (attempts == maxAttempts) {
      print('Out of attempts. The correct number was $targetNumber.');
    }

    printHighScores();
  }

  void saveHighScore(int score) {
    highScores.add('$score attempts');
    highScores.sort((a, b) => int.parse(a.split(' ')[0]).compareTo(int.parse(b.split(' ')[0])));
    if (highScores.length > 5) {
      highScores.removeLast();
    }
  }

  void printHighScores() {
    if (highScores.isNotEmpty) {
      print('\nHigh Scores:');
      for (final score in highScores) {
        print(score);
      }
    }
  }
}

void main() {
  print('Choose a difficulty level:');
  print('1. Easy (1-50)');
  print('2. Medium (1-100)');
  print('3. Hard (1-200)');
  print('Enter the corresponding number:');
  final input = stdin.readLineSync();
  int maxNumber;
  switch (input) {
    case '1':
      maxNumber = 50;
      break;
    case '2':
      maxNumber = 100;
      break;
    case '3':
      maxNumber = 200;
      break;
    default:
      print('Invalid choice. Defaulting to medium difficulty.');
      maxNumber = 100;
  }

  final game = Game(maxNumber == 50 ? 10 : maxNumber == 200 ? 20 : 15);
  game.start();
}
```
:::

## 🧪 Mini-project 2: Chat Application

Create a real-time CLI chat application using Dart that allows multiple users to exchange messages in real-time. The application should provide the following features:
* User registration with usernames.
* Chat rooms for group conversations.
* Sending and receiving messages in real-time.
* Real-time notifications for new messages.
* Message history and chat room management.
* Emoji support in messages.

## 🎯 A solution

::: details click here to view a solution

``` dart
import 'dart:io';

void main() {
  final users = <String>{};
  final messages = <String>[];

  print('Welcome to the CLI Chat App!');

  stdout.write('Enter your username: ');
  final username = stdin.readLineSync();

  if (username == null || username.isEmpty) {
    print('Invalid username. Exiting...');
    return;
  }

  users.add(username);
  print('Hello, $username! Type "/quit" to exit the chat.');

  final userStream = stdin.transform(Utf8Decoder()).transform(LineSplitter());

  userStream.listen((input) {
    if (input == '/quit') {
      users.remove(username);
      print('$username has left the chat.');
    } else {
      final message = '$username: $input';
      messages.add(message);
      users.forEach((user) {
        if (user != username) {
          print('[$user]: $input');
        }
      });
    }
  });

  messages.forEach(print);
}
```
:::

## 🧪 Mini project 3 : To-Do List with async

Create a command-line to-do list application using Dart that allows users to manage their tasks. The application should support asynchronous operations, such as saving tasks to a file and reading tasks from the file. It provides features to add, view, and remove tasks.

To implement this project, you can use async/await for reading and writing tasks to a file asynchronously. Here's an outline of the project:

Task Management: Implement a class to represent tasks, allowing users to create, view, and remove tasks.
File Operations: Use dart:io to read tasks from a file when the application starts and save tasks to a file when they are added or removed. Use async/await to perform these file operations asynchronously.
CLI User Interface: Create a user-friendly CLI interface where users can interact with the to-do list by typing commands (e.g., add, view, remove).
Asynchronous Operations: Use async/await for reading and writing tasks to the file to ensure the application remains responsive while performing file operations.
Data Persistence: Tasks should persist between application runs. Implement reading and writing tasks to/from a text file as JSON.

## 🎯 A solution 

::: details click here to view the answer

``` dart 
import 'dart:io';
import 'dart:convert';

class Task {
  final String title;
  bool isCompleted;

  Task(this.title, this.isCompleted);

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'isCompleted': isCompleted,
    };
  }
}

Future<void> main() async {
  final toDoList = <Task>[];
  final file = File('tasks.json');

  // Read tasks from the file if it exists
  if (await file.exists()) {
    final contents = await file.readAsString();
    final tasksData = json.decode(contents) as List<dynamic>;
    toDoList.addAll(tasksData.map((taskData) =>
        Task(taskData['title'] as String, taskData['isCompleted'] as bool)));
  }

  print('Welcome to the To-Do List CLI App!');
  while (true) {
    print('\nOptions:');
    print('1. Add a task');
    print('2. View tasks');
    print('3. Quit');
    stdout.write('Choose an option (1/2/3): ');
    final option = int.tryParse(stdin.readLineSync());

    switch (option) {
      case 1:
        stdout.write('Enter the task title: ');
        final title = stdin.readLineSync();
        toDoList.add(Task(title!, false));
        break;
      case 2:
        print('\nYour To-Do List:');
        for (var i = 0; i < toDoList.length; i++) {
          final task = toDoList[i];
          print('${i + 1}. ${task.isCompleted ? '[X]' : '[ ]'} ${task.title}');
        }
        break;
      case 3:
        // Save tasks to the file and exit
        final tasksData = toDoList.map((task) => task.toJson()).toList();
        final tasksJson = json.encode(tasksData);
        await file.writeAsString(tasksJson);
        print('Goodbye!');
        return;
      default:
        print('Invalid option. Please choose 1, 2, or 3.');
    }
  }
}
```

## 📖 Further reading
- [Dart SDK](https://dart.dev/get-dart)
- [Dart language official docs](https://dart.dev/language)
- [DartPad](https://dartpad.dev/?)

