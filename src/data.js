export const DATA = [
  {
    title: "Clean code (Robert Martin)",
    data: [
      {
        header: "General",
        text: "<ul>\
          <li>Follow standard conventions</li>\
          <li>Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.</li>\
          <li>Boy scout rule. Leave the campground cleaner than you found it.</li>\
          <li>Always look for the root cause of a problem.</li>\
        </ul>",
      },
      {
        header: "Naming",
        text: "<ul>\
          <li>Choose descriptive and unambiguous names.</li>\
          <li>Make meaningful distinction.</li>\
          <li>Use pronounceable names.</li>\
          <li>Use searchable names.</li>\
          <li>Replace magic numbers with named constants.</li>\
          <li>Avoid encodings. Don't append prefixes or type information.</li>\
        </ul>",
      },
      {
        header: "Functions",
        text: "<ul>\
          <li>Small.</li>\
          <li>Do one thing.</li>\
          <li>Use descriptive names.</li>\
          <li>Prefer fewer arguments.</li>\
          <li>Have no side effects.</li>\
          <li>Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag.</li>\
        </ul>",
      },
      {
        header: "Formatting and rules",
        text: "<ul><li>functions should be short and compact</li></ul>",
      },
      {
        header: "Objects and data structures",
        text: "<ul>\
          <li>Hide internal structure.</li>\
          <li>Prefer data structures.</li>\
          <li>Avoid hybrids structures (half object and half data).</li>\
          <li>Should be small.</li>\
          <li>Do one thing.</li>\
          <li>Small number of instance variables.</li>\
          <li>Base class should know nothing about their derivatives.</li>\
          <li>Better to have many functions than to pass some code into a function to select a behavior.</li>\
          <li>Prefer non-static methods to static methods.</li>\
        </ul>",
      },
      {
        header: "Comments",
        text: "<ul>\
          <li>Always try to explain yourself in code.</li>\
          <li>Don't be redundant.</li>\
          <li>Don't add obvious noise.</li>\
          <li>Don't use closing brace comments.</li>\
          <li>Don't comment out code. Just remove.</li>\
          <li>Use as explanation of intent.</li>\
          <li>Use as clarification of code.</li>\
          <li>Use as warning of consequences.</li>\
        </ul>",
      },
      {
        header: "Errors",
        text: "<ul><li>functions should be short and compact</li></ul>",
      },
      {
        header: "Code smells",
        text: "<ul>\
          <li>Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.</li>\
          <li>Fragility. The software breaks in many places due to a single change.</li>\
          <li>Immobility. You cannot reuse parts of the code in other projects because of involved risks and high effort.</li>\
          <li>Needless Complexity.</li>\
          <li>Needless Repetition.</li>\
          <li>Opacity. The code is hard to understand.</li>\
        </ul>",
      },
    ],
  },
  {
    title: "Design Patterns",
    data: [
      {
        header: "Creational",
        title: "Constructor",
        text: "You are familiar with constructors as functions that initialize objects with specific properties and methods. The constructor pattern is similar to that definition. We use this pattern to <b>create multiple instances of the same object</b>.",
      },
      {
        header: "Creational",
        title: "Factory",
        text: "It provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.",
      },
      {
        header: "Creational",
        title: "Prototype",
        text: "It lets you copy existing objects without making your code dependent on their classes. <b>It creates new instances of objects by cloning them from a prototype</b>. The main focus of prototype pattern is to create an object used as a blueprint for each object constructor created.",
      },
      {
        header: "Creational",
        title: "Singleton",
        text: "It lets you ensure that a <b>class has only one instance</b>, while providing a global access point to this instance.",
      },
      {
        header: "Structural",
        title: "Adapter",
        text: "It allows objects with incompatible interfaces to collaborate. This is a special <b>object that converts the interface of one object so that another object can understand it</b>.",
      },
      {
        header: "Structural",
        title: "Decorator",
        text: "It lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.",
      },
      {
        header: "Structural",
        title: "Facade",
        text: "It provides a simplified interface to a library, a framework, or any other complex set of classes. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.",
      },
      {
        header: "Structural",
        title: "Flyweight",
        text: "It lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.",
      },
      {
        header: "Structural",
        title: "Proxy",
        text: "It lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. Like decorator but <b>restricting access to the object</b>.",
      },
      {
        header: "Behaviour",
        title: "Chain of responsibility",
        text: "It lets you pass requests along a chain of handlers. Upon receiving a request, each <b>handler decides either to process the request or to pass it to the next handler</b> in the chain.",
      },
      {
        header: "Behaviour",
        title: "State",
        text: "It lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",
      },
      {
        header: "Behaviour",
        title: "Observer",
        text: "It lets you define a subscription mechanism to <b>notify multiple objects about any events that happen to the object they’re observing</b>.",
      },
      {
        header: "Behaviour",
        title: "Mediator",
        text: "It lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.",
      },
      {
        header: "Behaviour",
        title: "Command",
        text: "It turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.",
      },
    ],
  },
  {
    title: "SOLID",
    data: [
      {
        header: "Single Responsibility",
        text: "A class should have one and only one reason to change, meaning that a class should have only one job.",
      },
      {
        header: "Open-Closed",
        text: "Objects or entities should be open for extension but closed for modification.",
      },
      {
        header: "Liskov Substitution",
        text: "Every subclass or derived class should be substitutable for their base or parent class.",
      },
      {
        header: "Interface Segregation",
        text: "A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.",
      },
      {
        header: "Dependency Inversion",
        text: "Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.",
      },
    ],
  },
  {
    title: "KISS, YAGNI",
  },
  {
    title: "OWASP Top-10",
  },
  {
    title: "Testing",
  },
  {
    title: "Git branching strategies",
  },
];
