# Navigation

##  Routes : definition

- What are routes and their significance.
- Benefits of using routes for navigation.
- Basic structure of routes in a Flutter app.

Routes are a fundamental concept in Flutter app navigation. In this lesson, you'll understand what routes are and why they are crucial for creating a structured navigation flow in your app. You'll explore the basic structure of routes and their components.

## Declaring Routes

- Declaring routes in the MaterialApp widget.
- Associating routes with route names and widgets.
- Navigating between different routes.

To navigate between different screens in your app, you need to declare and define routes. This lesson covers the process of declaring routes in the MaterialApp widget, associating routes with route names and widgets, and implementing navigation between routes.


- Using named routes for navigation.
- Passing data and parameters to named routes.
- Handling route transitions and animations.

Named routes offer a structured way to navigate between screens in Flutter. This lesson guides you through using named routes for navigation, passing data and parameters to named routes, and customizing route transitions and animations.

```dart

@override
  Widget build(BuildContext context) {
  return MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => HomeScreen(),
      '/details': (context) => DetailScreen(),
    },
  );
}
```


## Navigate between screens 
```dart
onPressed: () {
  // Navigate to the second screen using a named route.
  Navigator.pushNamed(context, '/details');
}
```

## Transmitting Data 

- Using route parameters for data transmission.
- Strategies for complex data sharing between screens.
- Data validation and error handling.


Passing data between routes is a common requirement in app development. This lesson covers the use of route parameters for data transmission, strategies for handling complex data sharing between screens, and best practices for data validation and error handling.


Create a screen argument class 

```dart
class ScreenArguments {
  final String title;
  final String message;

  ScreenArguments(this.title, this.message);
}
```


Prepare the widget for taking argument param
```dart
// A Widget that extracts the necessary arguments from
// the ModalRoute.
class ExtractArgumentsScreen extends StatelessWidget {
  const ExtractArgumentsScreen({super.key});

  static const routeName = '/extractArguments';

  @override
  Widget build(BuildContext context) {
    // Extract the arguments from the current ModalRoute
    // settings and cast them as ScreenArguments.
    final args = ModalRoute.of(context)!.settings.arguments as ScreenArguments;

    return Scaffold(...
```

Create the route 
```dart
MaterialApp(
  routes: {
    ExtractArgumentsScreen.routeName: (context) =>
        const ExtractArgumentsScreen(),
  },
)
```

Use it
```dart
onPressed: () {
    // When the user taps the button,
    // navigate to a named route and
    // provide the arguments as an optional
    // parameter.
    Navigator.pushNamed(
      context,
      ExtractArgumentsScreen.routeName,
      arguments: ScreenArguments(
        'Extract Arguments Screen',
        'This message is extracted in the build method.',
      ),
    );
```

## State Management for Routes

- Sharing and managing state across routes.
- ScopedModel, Provider, and other state management solutions.
- Preventing data loss and maintaining UI consistency.

Effective state management between routes is essential for maintaining a consistent user experience. This lesson covers techniques for sharing and managing state across routes using solutions like ScopedModel, Provider, and more. You'll learn how to prevent data loss and ensure UI consistency.

## 🧪 Exercices 

```dart
```

## 🎯 Solutions

::: details click here to view the solutions
[Github repository sources](https://github.com/ibrahim-kasra/flutter-app-dev-course)
::: 

## 📖 Further reading

- [Navigation](https://docs.flutter.dev/ui/navigation)
- [Pass Arguments with navigation](https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments)