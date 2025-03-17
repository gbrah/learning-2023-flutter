import{_ as t,c as r,a as i,o as n}from"./app-DJ3SJ-hm.js";const a="/learning-2023-flutter/assets/arch-CBsK-RBS.png",o={};function s(l,e){return n(),r("div",null,e[0]||(e[0]=[i('<h1 id="let-s-start" tabindex="-1"><a class="header-anchor" href="#let-s-start"><span>Let&#39;s start</span></a></h1><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>Before developing in Flutter, it&#39;s beneficial to have some prerequisites and a foundation in the following areas:</p><ol><li><p><strong>Dart Programming Language:</strong> Flutter uses the Dart programming language. While you can learn Dart alongside Flutter, having a basic understanding of Dart before starting with Flutter development will be advantageous.</p></li><li><p><strong>Programming Fundamentals:</strong> Solid knowledge of programming fundamentals like variables, data types, control structures (if, for, while), and functions is essential.</p></li><li><p><strong>Object-Oriented Programming (OOP):</strong> Flutter and Dart are based on OOP principles. Understanding concepts like classes, objects, inheritance, and polymorphism is crucial.</p></li><li><p><strong>Integrated Development Environment (IDE):</strong> You&#39;ll need an IDE for Flutter development. Android Studio with the Flutter plugin or Visual Studio Code with the Dart and Flutter extensions are popular choices.</p></li><li><p><strong>User Interface (UI) Principles:</strong> An understanding of UI/UX design and layout concepts is valuable for creating user-friendly Flutter apps.</p></li><li><p><strong>Command-Line Interface (CLI):</strong> Flutter development involves using the command line for various tasks like project creation, running the app, and managing dependencies. Familiarity with CLI basics is necessary.</p></li><li><p><strong>APIs and Networking:</strong> If your app needs to interact with web services, having knowledge of API integration and networking concepts will be beneficial.</p></li><li><p><strong>Asynchronous Programming:</strong> Flutter apps often require asynchronous tasks. Understanding async/await and futures is important.</p></li></ol><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><h3 id="mobile-contraints" tabindex="-1"><a class="header-anchor" href="#mobile-contraints"><span>Mobile contraints</span></a></h3><table><thead><tr><th>OS (Operating System)</th><th>Mobile OS</th></tr></thead><tbody><tr><td>Link hardware and software</td><td>Battery</td></tr><tr><td>HMI: Human-Machine Interface</td><td>Touch screen, virtual keyboard, screen size</td></tr><tr><td>Perform calculations, execute calculations, provide services</td><td>Sensors (gyroscope, NFC, light meter, GPS chip, GSM chip, …)</td></tr><tr><td>Enigma, punched card, terminal, command-line interface, graphical interface</td><td>(Power) &lt;= no longer relevant, PCs now even have ARM chips</td></tr><tr><td></td><td>Ubiquity</td></tr><tr><td></td><td>Security</td></tr></tbody></table><h3 id="what-is-flutter" tabindex="-1"><a class="header-anchor" href="#what-is-flutter"><span>What is Flutter?</span></a></h3><p>Flutter is a groundbreaking open-source UI framework developed by Google that allows developers to build high-quality, natively compiled applications for various platforms, including mobile, web, and desktop, using a single codebase. Flutter&#39;s primary advantage lies in its extensive library of customizable widgets, which enables developers to create stunning and highly performant user interfaces.</p><h3 id="flutter-s-history" tabindex="-1"><a class="header-anchor" href="#flutter-s-history"><span>Flutter&#39;s History</span></a></h3><p>Flutter had its inception within Google under a project known as &quot;Sky.&quot; However, it was officially introduced as an open-source framework in May 2017, when Google announced its first stable version. Over the years, Flutter has undergone significant growth and evolution.</p><p>Here&#39;s a brief overview of some key Flutter versions:</p><ul><li><p><strong>Flutter 1.0 (December 2018)</strong>: This marked the official release of Flutter, providing a stable foundation for app development. It introduced core features and widgets.</p></li><li><p><strong>Flutter 1.12 (December 2019)</strong>: This version introduced major improvements, such as support for Android App Bundles and continued to enhance the developer experience.</p></li><li><p><strong>Flutter 2.0 (March 2021)</strong>: A milestone release that introduced several significant enhancements, including web and desktop support. Flutter 2.0 empowered developers to target more platforms with a single codebase.</p></li><li><p><strong>Here are the top 5 features of Flutter 3 (2022)</strong></p></li></ul><ol><li><p><strong>Full Support for International Text Input on Desktop Platforms:</strong> Flutter now offers comprehensive support for international text input, including languages with complex text input methods (IMEs), on all desktop platforms. This includes third-party IMEs like Sogou and Google Japanese Input.</p></li><li><p><strong>Accessibility on All Desktop Platforms:</strong> Flutter for Windows, macOS, and Linux now supports accessibility services, making it more accessible to users with disabilities. This includes screen-readers, accessible navigation, and inverted colors.</p></li><li><p><strong>Universal Binaries on macOS:</strong> Flutter macOS desktop apps are now built as universal binaries, ensuring native support for both Intel-based Macs and Apple Silicon devices.</p></li><li><p><strong>Deprecating Windows 7/8 for Development:</strong> The recommended Windows version for Flutter development has been raised to Windows 10. While older versions like Windows 7 and 8 are not blocked, they are no longer officially supported, encouraging developers to upgrade.</p></li><li><p><strong>Mobile Updates:</strong> Flutter 3 introduces several mobile updates, including support for foldable mobile devices, iOS variable refresh rate support for smoother animations, simplified iOS app releases, and a Gradle version update.</p></li></ol><h3 id="flutter-platforms-support" tabindex="-1"><a class="header-anchor" href="#flutter-platforms-support"><span>Flutter platforms support</span></a></h3><table><thead><tr><th>Platform</th><th>Supported</th><th>Best effort</th></tr></thead><tbody><tr><td>Android</td><td>21-34</td><td>19-20</td></tr><tr><td>iOS 16</td><td>11-15</td><td>10-, arm7v</td></tr><tr><td>Linux Debian</td><td>10-12</td><td>9-</td></tr><tr><td>Linux Ubuntu</td><td>18.04 LTS</td><td>20.04-23.04</td></tr><tr><td>macOS</td><td>Ventura (13+)</td><td>Mojave (10.14) to Monterey (12)</td></tr><tr><td>Windows</td><td>10</td><td>7, 8, and 11</td></tr><tr><td>Chrome - Firefox - Safari - Edge</td><td>latest 2 releases</td><td>96+ - 99+ - 14+ - 96+</td></tr></tbody></table><h3 id="the-flutter-architecture" tabindex="-1"><a class="header-anchor" href="#the-flutter-architecture"><span>The Flutter Architecture</span></a></h3><p><img src="'+a+'" alt="flutter architecture"></p><p>To understand how Flutter operates, it&#39;s essential to delve into its architecture. Flutter adheres to a layered architecture with the following components:</p><ul><li><p><strong>Framework Layer</strong>: This is where the core building blocks of Flutter reside. It provides a rich library of widgets for constructing user interfaces, manages gestures, animations, and layout, and is the foundation for app development.</p></li><li><p><strong>Engine Layer</strong>: The engine handles the rendering of the user interface. It offers a low-level rendering framework that interfaces with the graphics hardware of the target platform. Additionally, it manages platform-specific services like sensors and cameras.</p></li><li><p><strong>Embedder Layer</strong>: The embedder integrates Flutter into the specific platform, whether it&#39;s Android, iOS, web, or desktop. It facilitates communication between the Flutter engine and the host platform, ensuring seamless integration.</p></li></ul><p>Flutter&#39;s architecture is designed to deliver exceptional performance and responsiveness, making it a top choice for a wide range of development projects.</p>',21)]))}const p=t(o,[["render",s],["__file","index.html.vue"]]),u=JSON.parse(`{"path":"/overview/","title":"Let's start","lang":"en-US","frontmatter":{"description":"Let's start Prerequisites Before developing in Flutter, it's beneficial to have some prerequisites and a foundation in the following areas: Dart Programming Language: Flutter us...","head":[["meta",{"property":"og:url","content":"https://worldline.github.io/gbrah/learning-2023-flutter/learning-2023-flutter/overview/"}],["meta",{"property":"og:title","content":"Let's start"}],["meta",{"property":"og:description","content":"Let's start Prerequisites Before developing in Flutter, it's beneficial to have some prerequisites and a foundation in the following areas: Dart Programming Language: Flutter us..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-17T10:38:45.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-17T10:38:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Let's start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-17T10:38:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":3,"title":"Mobile contraints","slug":"mobile-contraints","link":"#mobile-contraints","children":[]},{"level":3,"title":"What is Flutter?","slug":"what-is-flutter","link":"#what-is-flutter","children":[]},{"level":3,"title":"Flutter's History","slug":"flutter-s-history","link":"#flutter-s-history","children":[]},{"level":3,"title":"Flutter platforms support","slug":"flutter-platforms-support","link":"#flutter-platforms-support","children":[]},{"level":3,"title":"The Flutter Architecture","slug":"the-flutter-architecture","link":"#the-flutter-architecture","children":[]}]}],"git":{"updatedTime":1742207925000,"contributors":[{"name":"Brah","email":"brah.gharbi@gmail.com","commits":1,"url":"https://github.com/Brah"},{"name":"A187839","email":"ibrahim.gharbi@worldline.com","commits":6,"url":"https://github.com/A187839"},{"name":"Ibrahim Gharbi","email":"brah.gharbi@gmail.com","commits":3,"url":"https://github.com/Ibrahim Gharbi"}]},"filePathRelative":"overview/README.md","autoDesc":true}`);export{p as comp,u as data};
