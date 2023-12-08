# Async  & Network

## Managing Asynchronous Programming

Grasp the fundamentals of asynchronous programming in Flutter.

- Introducing Futures and their role.
- Working with asynchronous operations.


In the world of modern app development, asynchronous programming is crucial for responsive and non-blocking applications. This lesson introduces you to the concept of asynchronous programming, explains the need for it, and dives into Futures as the core mechanism for handling asynchronous operations.

### Futures and FutureBuilder

- In-depth understanding of Futures.
- Practical usage of the FutureBuilder widget.
- Building asynchronous workflows with Futures.


Futures play a vital role in managing asynchronous tasks in Flutter. This lesson provides a comprehensive understanding of Futures, and you'll explore their practical application using the FutureBuilder widget. You'll learn to build asynchronous workflows and handle data loading and processing.

### Streams and StreamBuilder

- Introduction to Streams and their use cases.
- Practical application of the StreamBuilder widget.
- Real-world examples of using Streams for event-driven apps.

Streams are essential for handling event-driven asynchronous tasks in Flutter. You'll learn what Streams are and when to use them. The practical application of Streams will be demonstrated using the StreamBuilder widget. Real-world examples will showcase how Streams are used for reactive and real-time applications.


## Connect my Quizz to the internet

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

## Making HTTP Requests on RESTful APIs 

Learn how to make HTTP requests to RESTful APIs in Flutter.

- The importance of communicating with APIs.
- Using the HTTP package in Flutter.
- Making GET, POST, and other types of requests.

This lesson explains the importance of API communication and demonstrates how to make HTTP requests in Flutter using the HTTP package. You'll learn to perform common request types such as GET and POST.

- Parsing JSON data from API responses.
- Error handling for network requests.
- Storing and managing data obtained from APIs.

Obtaining data from APIs is just the first step. This lesson guides you through the process of parsing JSON data from API responses and handling errors that might occur during network requests. You'll also learn how to store and manage data obtained from APIs efficiently.


#### add the http library 

``` bash 
flutter pub add http
```

#### import http request on your dart file

``` dart 
import 'package:http/http.dart' as http;
```

#### add the android permission 
``` xml
<!-- Required to fetch data from the internet. -->
<uses-permission android:name="android.permission.INTERNET" />
````

## 🧪 Exercices 

Retrieve the previous Quiz data and create a widget statefull with future builder to show a list of questions retrieved from internet.


## 🎯 Solutions

::: details click here to view the solutions
[Zapp.run project with http request](https://zapp.run/edit/quiz-z9q06jl9r06)
::: 

## 📖 Further reading

* [Fetch DATA from Internet](https://docs.flutter.dev/cookbook/networking/fetch-data)
* [Json parsing with DIO](https://medium.com/@bobbykboseoffice/json-parsing-using-dio-in-flutter-9c870d3d1759)