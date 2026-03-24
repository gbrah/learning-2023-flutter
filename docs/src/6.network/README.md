#  Networking 

## Managing Asynchronous Programming

In the world of modern app development, asynchronous programming is crucial for responsive and non-blocking applications. This lesson introduces you to the concept of asynchronous programming, explains the need for it, and dives into Futures as the core mechanism for handling asynchronous operations.

### Futures and FutureBuilder

Futures play a vital role in managing asynchronous tasks in Flutter. 
It represents a potential value or error that will be available at some point in the future. You'll learn how to create and work with Futures, and how to use the FutureBuilder widget to build your UI based on the state of a Future.

here is a simple example of using FutureBuilder to fetch data from the internet and display it in a widget:

```dart
Future<String> fetchData() async {
  final response = await http.get(Uri.parse('https://api.example.com/data'));
  if (response.statusCode == 200) {
    return response.body;
  } else { 
    throw Exception('Failed to load data');
  }
}
```

Future can then be used in a FutureBuilder to build the UI based on the state of the Future:

```dart
FutureBuilder<String>(
  future: fetchData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    } else if (snapshot.hasError) { 
      return Text('Error: ${snapshot.error}');
    } else {
      return Text('Data: ${snapshot.data}');
    }
  },
);
```

Then the FutureBuilder can be called in the build method of a widget to display the data once it's fetched from the internet. This allows you to create a responsive UI that updates based on the state of the asynchronous operation.

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: Text('Async Data')),
    body: Center(
      child: FutureBuilder<String>(
        future: fetchData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          } else {
            return Text('Data: ${snapshot.data}');
          }
        },
      ),
    ),
  );
}
```


### Streams and StreamBuilder


Streams are another powerful tool for handling asynchronous data in Flutter. They allow you to work with a sequence of asynchronous events or data. It's particularly useful for scenarios like real-time data updates, user input, or any situation where you need to handle a continuous flow of data. You'll learn how to create and manage Streams, and how to use the StreamBuilder widget to build your UI based on the state of a Stream.

Here is a simple example of using StreamBuilder to listen to a stream of data and update the UI accordingly:

```dart
Stream<int> numberStream() async {
  for (int i = 0; i < 10; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}
```

You can then use StreamBuilder to build the UI based on the state of the Stream:

```dart
StreamBuilder<int>(
  stream: numberStream(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    } else if (snapshot.hasError) {
      return Text('Error: ${snapshot.error}');
    } else {
      return Text('Data: ${snapshot.data}');
    }
  },
);
```


## Json deserialization

When working with data from the internet, it's common to receive data in JSON format. Here is how to deserialize JSON data into Dart objects, making it easier to work with the data in your Flutter application.

```dart
import 'dart:convert';
class Example {
  final String name;
  final int age;

  Example({required this.name, required this.age});

  factory Example.fromJson(Map<String, dynamic> json) {
    return Example(
      name: json['name'],
      age: json['age'],
    );
  }
}
```
You can then use the fromJson factory constructor to create an instance of the Example class from a JSON string:

```dart
String jsonString = '{"name": "John", "age": 30}';
Map<String, dynamic> jsonMap = jsonDecode(jsonString);
Example example = Example.fromJson(jsonMap);
print(example.name); // Output: John
print(example.age);  // Output: 30
```



## API we will use 

For now, we will request a simple plain text json file hosted on this repo that will simulate a REST API call to be able to use our Ktor client.

The request & answers details are specified below :

::: details Request
```bash
POST
content-type: text/plain  
url: https://github.com/worldline/learning-kotlin-multiplatform/raw/main/quiz.json
```
::: 

::: details Answer
```bash
code:200
body: 
{
  "questions": [
    { 
    "id":1, 
    "label":"You can create an emulator to simulate the configuration of a particular type of Android device using a tool like", 
    "correct_answer_id":3, 
    "answers":[
      {"id":1, "label":"Theme Editor"},
      {"id":2, "label":"Android SDK Manager"},
      {"id":3, "label":"AVD Manager"},
      {"id":4, "label":"Virtual Editor"}
     ]
    },
    {
    "id":2, 
    "label":"What parameter specifies the Android API level that Gradle should use to compile your app?", 
    "correct_answer_id":2, 
    "answers":[
      {"id":1, "label":"minSdkVersion"},
      {"id":2, "label":"compileSdkVersion"},
      {"id":3, "label":"targetSdkVersion"},
      {"id":4, "label":"testSdkVersion"}
     ]
    },
  ]
}
```
:::


## 🧪 Exercises : Making HTTP Requests on RESTful APIs 

Retrieve the previous Quiz data and create a widget statefull with future builder to show a list of questions retrieved from internet.


::: warning Step 1 - Add the http library to your project.

HTTP is a package that provides a convenient way to make HTTP requests in Flutter. To add it to your project, you can use the following command:

::: tip Solution 

::: details Expand
``` bash 
flutter pub add http
```

or  add to the pubspec.yaml file 

``` yaml
dependencies:
  http: ^0.13.4
```
:::

::: warning Step 2 - add the android permission 

To fetch data from the internet, you need to add the following permission to your `AndroidManifest.xml` file:


::: tip Solution 

::: details Expand
```xml
<!-- Required to fetch data from the internet. -->
<uses-permission android:name="android.permission.INTERNET" />
```
:::


::: warning Step 3 - Create a function to make the HTTP request & Import http request on your dart file

* Create a file called 'api_service.dart' to handle the http request with a future that will return the quiz data 

::: tip Solution 

::: details Expand
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String apiUrl = ' '
  Future<Map<String, dynamic>> fetchQuizData() async {
    final response = await http.get(Uri.parse(apiUrl));
    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load quiz data');
    }
  }
}
```
:::

::: warning Step 4 - Make the quiz object deserialization

To work with the quiz data more effectively, you can create Dart classes that represent the structure of the quiz data and implement a factory constructor to deserialize the JSON data into Dart objects.

::: tip Solution 

::: details  
``` dart 
class Quiz {
  List<Question> questions;
  Quiz({required this.questions});

  factory Quiz.fromJson(Map<String, dynamic> json) {
    List<Question> questions = (json['questions'] as List)
        .map((question) => Question.fromJson(question))
        .toList();

    return Quiz(questions: questions);
  }
}

class Question {
  int id;
  String label;
  int correctAnswerId;
  List<Answer> answers;

  Question({
    required this.id,
    required this.label,
    required this.correctAnswerId,
    required this.answers,
  });

  factory Question.fromJson(Map<String, dynamic> json) {
    List<Answer> answers = (json['answers'] as List)
        .map((answer) => Answer.fromJson(answer))
        .toList();

    return Question(
      id: json['id'],
      label: json['label'],
      correctAnswerId: json['correct_answer_id'],
      answers: answers,
    );
  }
}

class Answer {
  int id;
  String label;

  Answer({
    required this.id,
    required this.label,
  });

  factory Answer.fromJson(Map<String, dynamic> json) {
    return Answer(
      id: json['id'],
      label: json['label'],
    );
  }
}
```
:::


::: warning Step 5 - Use FutureBuilder to fetch and display the quiz data in your widget.

To display the quiz data in your Flutter application, you can use a FutureBuilder widget to fetch the data asynchronously and build the UI based on the state of the Future.

:::

::: tip Complete solution 

::: details Expand
[https://zapp.run/edit/flutter-zx6k067tx6l0](https://zapp.run/edit/flutter-zx6k067tx6l0)
:::

## 📖 Further reading

* [Fetch DATA from Internet](https://docs.flutter.dev/cookbook/networking/fetch-data)
* [Json parsing with DIO](https://medium.com/@bobbykboseoffice/json-parsing-using-dio-in-flutter-9c870d3d1759)