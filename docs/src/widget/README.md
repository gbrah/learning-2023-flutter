#  Widgets


- What are widgets in Flutter?
- The importance of widgets in building user interfaces.
- Different types of widgets in Flutter.


In Flutter, everything is a widget. Widgets are the building blocks of your app's user interface. They control what is displayed on the screen and how it responds to user interactions.

Widgets are divided into two main categories: StatelessWidget and StatefulWidget. You'll learn the key differences between them and when to use each.

## Widget Tree and Element Tree


The Widget tree represents the hierarchy of widgets in your app. Each widget is a part of this tree. When changes occur, Flutter creates a new Widget tree. The Element tree, on the other hand, represents the corresponding elements for each widget in the Widget tree.


## Overview of Widgets and Layout

- Text, Container, Row, Column.
- Layout widgets for structuring your UI.
- Working with Alignment and CrossAxisAlignment.


We'll explore some frequently used widgets like Text for displaying text, Container for layout, and Row and Column for organizing widgets. You'll also discover how to align and position widgets within your layout using Alignment and CrossAxisAlignment.

## Classifications of Widgets: Stateful and Stateless

Flutter Stateful and Stateless widgets are two fundamental kinds of widgets that Flutter provides. As their names imply, Stateless Widgets are static and don't hold mutable state, while Stateful Widgets are dynamic, and they maintain a mutable state that can change over time.

### Stateless Widgets

Stateless widgets are those in which you want to make a UI that does not need to be dynamically changed whenever you update any value bound to it. For example, if you want to make a button whose title doesn’t need to change dynamically, then you can create a separate widget for a button as a Stateless widget.
As the name suggests, Stateless widgets are immutable.
Stateless widgets remain the same even if the user interacts with them. This kind of widget has no state, so they can’t change according to an internal state. They can only react to higher widget changes.
Stateless widgets cannot change their state during the runtime of the app, which means the widgets cannot be redrawn while the app is in action.

Example :

```dart
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return Container();
    }
}
```

### Stateful Widgets

Stateful widgets are just the reverse of Stateless widgets. This means when you want to make something that you want to change dynamically according to how a user interacts with it, then you can use the Stateful widget. For example, if you want to change the background color of the app on click of a button, you can make use of Stateful widget in this case.
A Stateful widget can contain another Stateless widget and vice-versa.

```dart
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatefulWidget {
    @override
    _MyAppState createState() => _MyAppState();
}
class _MyAppState extends State<MyApp> {
    @override
    Widget build(BuildContext context) {
        return Container();
    }
}
```

### Difference between Stateful and Stateless Widgets

| Stateless Widget | Stateful Widget |
| ---------------- | --------------- |
| Static widgets   | Dynamic Widgets |
| They do not depend on any data change or any behavior change.   | They can be updated during runtime based on user action or data change.        |
|  Stateless Widgets do not have a state.  | Stateful Widgets have an internal state. |
|  They will be rendered once and will not update themselves, but will only be updated when external data changes.  | They can re-render if the input data changes or if Widget’s state changes. |
|  For Example, Text, Icon, and RaisedButton are Stateless Widgets.   | For Example Checkbox, Radio Button, and Slider are Stateful Widgets |

## Passing Data Between Widgets

In complex apps, different widgets often need to share data. We'll discuss various methods for passing data between widgets, including constructor arguments, callback functions, and InheritedWidget.

## Resource Management

Learn how to manage resources like images, strings, and fonts in Flutter.

- Loading and displaying images in your app.
- Accessing and using strings and fonts.
- Best practices for resource management.

You'll discover how to load and display images in your Flutter app. We'll also explore accessing and using strings and fonts, vital for creating a well-rounded user interface. Best practices for resource management will be emphasized.

## Material Design and Cupertino Widgets

- Overview of Material Design widgets.
- Introduction to Cupertino widgets.
- Considerations for choosing between the two.

Flutter provides two main design languages: Material Design and Cupertino. You'll explore the widgets associated with each and learn when to use one over the other based on platform-specific design guidelines.

## 🧪 Exercices 

1. **Build a form with validation**

The purpose of this part is to set up an information entry form.
The information to be collected is: name, first name, address (number, street, city, code
postal and country), an email address and a telephone number.
At the end of the form a button will validate the form, when clicking on this
button validation of the fields must take place: the fields must not be
empty, the telephone number and email must respect the following regex:

```dart
final RegExp _email = RegExp(
      r"^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$");
      
final RegExp _phone = RegExp(r'^(?:(?:\+|00)33|0)\s*(3|6|7)(?:[\s.-]*\d{2}){4}$');
```

If the validation is OK: we display a popup summarizing the information of the
form. If validation is KO: error messages corresponding to
Problems should be displayed below the offending form fields.
Fields linked to the address must display a hint allowing you to know which
field it is. The fields linked to email and telephone number must display a
hint and an icon. The other fields must display a label.
If the fields take up too much space on the screen, it must be scrollable.

![Form validation](../assets/images/form.png)

2. **List**

The goal of this part is to set up a list screen.
In a new screen you will have to display a list whose content is generated by the
getRandomItem method of utils.dart (file provided to add to the project). Each tile in the list corresponds to an item in the list, you only need
to display only the iconData and the title of the item.

![List](../assets/images/list.png)

3. **PageView**

The goal of this part is to set up a PageView as the first cell of the list created in Part 2.
 
This will be composed of 3 pages, each page must be a rectangle of
different colors.
A number must be displayed centered in the middle of the page, this number must not move when scrolling on the PageView, this number must indicate the number of the active page of the PageView (see: video).

![List](../assets/videos/pageview.mp4)

## 🎯 Solutions

::: details click here to view the solutions
```dart
```
::: 

## 📖 Further reading
