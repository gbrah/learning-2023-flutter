# Other features 

## Architectural Patterns

- Introduction to architectural patterns.
- Why architectural patterns are important.
- Common architectural patterns in Flutter.

Architectural patterns provide a structured way to organize your app's code. This lesson introduces various architectural patterns and explains why they are important. You'll also explore common architectural patterns used in Flutter development.

###  Implementing the MVVM Pattern
![architecture](../assets/images/mvvm.png)

Google recently introduced the MVVM (Model-View-ViewModel) pattern as a recommended architecture for Flutter apps. This lesson guides you through implementing the MVVM pattern in your Flutter app, including how to structure your code and manage state effectively.

The documentation for the flutter architecture can be found [here](https://docs.flutter.dev/app-architecture/guide).

## Native Code Binding

In some cases, you may need to incorporate native code into your Flutter app. Implementing native modules involves writing native code, creating platform-specific APIs, and integrating these modules into your Flutter app. 

You can make it thanks to method channels, which allow you to communicate between Flutter and native code.  The full documentation for method channels can be found [here](https://docs.flutter.dev/platform-integration/platform-channels).

MethodChannel is only available for Android and iOS, but there are other options for other platforms, such as FFI (Foreign Function Interface) for desktop applications.

Here is an example of declaring a method channel in Flutter and invoking a method to get the battery level from the native code:

```dart
import 'package:flutter/services.dart';
class BatteryLevel {
  static const platform = MethodChannel('com.example.battery');

  Future<String> getBatteryLevel() async {
    try {
      final int batteryLevel = await platform.invokeMethod('getBatteryLevel');
      return 'Battery level: $batteryLevel%';
    } on PlatformException catch (e) {
      return "Failed to get battery level: '${e.message}'.";
    }
  }
}
```
on the native side (Android), you would implement the method to get the battery level and handle the method call from Flutter:

```java
public class MainActivity extends FlutterActivity {
  private static final String CHANNEL = "com.example.battery";    
   @Override
   public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
      super.configureFlutterEngine(flutterEngine);
      new MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), CHANNEL)
         .setMethodCallHandler(
         (call, result) -> {  
            if (call.method.equals("getBatteryLevel")) {
               int batteryLevel = getBatteryLevel();
               if (batteryLevel != -1) {
                  result.success(batteryLevel);
               } else {
                  result.error("UNAVAILABLE", "Battery level not available.", null);
               }
            } else {
               result.notImplemented();
            }
         }
      );
   }

   private int getBatteryLevel() {
      int batteryLevel = -1;
      // Implement your battery level retrieval logic here
      return batteryLevel;
   }
}

```

## Internationalization

::: warning TODO
To make your app accessible to users in different languages and regions, you need to localize it effectively. This lesson covers the steps involved in preparing your app for localization, adding language-specific resources, and testing and validating localized content.
:::

## Accessibility

::: warning TODO
Implementing accessibility features involves adding semantic labels and descriptions, handling focus and navigation for screen readers, and ensuring a smooth experience for users with disabilities. This lesson provides practical guidance on how to achieve these goals.
:::

## (Project: Creating a Flutter Application )

Propose and develop an application of your choice in Flutter, with support for at least 2 platforms (e.g. Android and iOS).
You must have all your functionalities validated by the **MONTH , YEAR** session at the latest (if you don't, you risk going off-topic during the defense).
The list of functionalities must be detailed in a document/schema with priorities.

Your application should include the following technical elements:

1. Custom widgets based on material or cupertino
2. One or 2 animations
3. One or more calls to a REST API (e.g. OpenWeather, PokeAPI, etc.)
4. Local storage (e.g. SharedPreferences AND SQLite, etc.)

Your project presentation will take place on **MONTH , YEAR** and will last 15 minutes.
The project is to be carried out alone.

Your presentation will be based on a medium of your choice and should present :

1. A description of the initially chosen functionalities (originality and complexity will be taken into account) /5
2. A summary of what has been achieved, including a technical explanation and any difficulties encountered /5
   3. a demo of the application /5
3. A series of technical questions from the teacher /5

## 📖 Further reading

- [Code generation with Freezed](https://pub.dev/packages/freezed)
- [bloc](https://github.com/felangel/bloc)
- [A clean architecture for Flutter](https://github.com/bugragoksu/flutter_clean_architecture)
