export const DATA = [
  {
    id: 'a0',
    title: "Clean code (Robert Martin)",
    data: [
      {
        id: 'a0b0',
        header: "General",
        text: "<ul>\
          <li>Follow standard conventions</li>\
          <li>Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.</li>\
          <li>Boy scout rule. Leave the campground cleaner than you found it.</li>\
          <li>Always look for the root cause of a problem.</li>\
        </ul>",
      },
      {
        id: 'a0b1',
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
        id: 'a0b2',
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
        id: 'a0b3',
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
        id: 'a0b4',
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
        id: 'a0b5',
        header: "Understandability",
        text: "<ul>\
          <li>Be consistent. If you do something a certain way, do all similar things in the same way.</li>\
          <li>Use explanatory variables.</li>\
          <li>Encapsulate boundary conditions. Boundary conditions are hard to keep track of. Put the processing for them in one place.</li>\
          <li>Prefer dedicated value objects to primitive type.</li>\
          <li>Avoid logical dependency. Don't write methods which works correctly depending on something else in the same class.</li>\
          <li>Avoid negative conditionals.</li>\
        </ul>",
      },
      {
        id: 'a0b6',
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
    id: "a1",
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
    id: "a2",
    title: "SOLID",
    data: [
      {
        header: "Single Responsibility",
        text: "A class should have one and only one reason to change, meaning that a class should have only one job. If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.",
        img: "solid1",
        height: 400,
      },
      {
        header: "Open-Closed",
        text: "Objects or entities should be open for extension but closed for modification. Changing the current behaviour of a Class will affect all the systems using that Class. If you want the Class to perform more functions, the ideal approach is to add to the functions that already exist NOT change them.",
        img: "solid2",
        height: 300,
      },
      {
        header: "Liskov Substitution",
        text: "Every subclass or derived class should be substitutable for their base or parent class. The <b>child Class</b> should be able to process the <b>same requests and deliver the same result as the parent</b> Class or it could deliver a result that is of the same type.",
        img: "solid3",
        height: 500,
      },
      {
        header: "Interface Segregation",
        text: "A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use. A class should perform only those operations that are necessary for the implementation of its functions. All other actions should either be deleted completely or moved if there is a chance that they will be needed by another class in the future.",
        img: "solid4",
        height: 400,
      },
      {
        header: "Dependency Inversion",
        text: "Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions. According to this principle, the class should not be connected to the tool that it uses to perform the operation. Instead, it should be connected to an interface that helps establish a connection between the tool and the class.",
        img: "solid5",
        height: 300,
      },
    ],
  },
  {
    id: "a3",
    title: "KISS, YAGNI",
  },
  {
    id: "a4",
    title: "OWASP Top-10",
    data: [
      {
        header: "#1",
        title: "Broken Access Control",
        text: "Acceess control is an access restrictions for users to certain parts of the page (f.e to admin page, FTP/SSH, hosting admin panel). Depending on the specific vulnerability, the consequences can be devastating. The worst case scenario is when an unauthorized user has access to a privileged function. This can give them the ability to modify or delete contents on the website, or even worse, gain full control over the web application.<br /><b>Problems:</b><ul>\
          <li>Violation of the principle of least privilege or <b>deny by default</b>.</li>\
          <li>Accessing API with missing access controls for POST, PUT and DELETE.</li>\
          <li>CORS misconfiguration allows API access from unauthorized/untrusted origins.</li>\
          <li>Acting as a user without being logged in or acting as an admin when logged in as a user.</li>\
          <li>Permitting viewing or editing someone else's account, by providing its unique identifier.</li>\
        </ul>",
      },
      {
        header: "#2",
        title: "Cryptographic Failures (aka Sensitive Data Exposure)",
        text: "Sensitive data can be exposed by applications or APIs that do not have adequate built-in protections. For strong security, it is important to provide protective measures for data in transit or at rest. Sensitive data is a valuable commodity for threat actors, making data security particularly important. Stolen data may be monetized through committing fraud, blackmail, identity-related crimes, or sold on the dark web.<br /><b>PREVENT:</b><ul>\
        <li>Identify which data is sensitive according to privacy laws, regulatory requirements, or business needs.</li>\
        <li>Don’t store sensitive data unnecessarily.</li>\
        <li>Make sure to encrypt all sensitive data at rest.</li>\
        <li>Ensure up-to-date and strong standard algorithms, protocols, and keys are in place; use proper key management.</li>\
        <li>Disable caching for responses that contain sensitive data.</li>\
        <li>Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt, or PBKDF2.</li>\
        <li>Encrypt all data in transit with secure protocols such as TLS (HTTPS).</li>\
      </ul>",
      },
      {
        header: "#3",
        title: "Injection (+XSS)",
        text: "A code injection happens when an attacker sends invalid data to the web application with the intention to make it do something that the application was not designed/programmed to do.<br /><b>PREVENT:</b><ul>\
        <li>The preferred option is to use a safe API, which avoids using the interpreter entirely, provides a parameterized interface, or migrates to Object Relational Mapping Tools (ORMs).</li>\
        <li>Use positive server-side input validation. This is not a complete defense as many applications require special characters, such as text areas or APIs for mobile applications.</li>\
        <li>For any residual dynamic queries, escape special characters using the specific escape syntax for that interpreter.</li>\
        <li>Use LIMIT and other SQL controls within queries to prevent mass disclosure of records in case of SQL injection.</li>\
      </ul>",
      },
      {
        header: "#4",
        title: "Insecure Design",
        text: "",
      },
      {
        header: "#5",
        title: "Security Missconfiguration",
        text: "",
      },
      {
        header: "#6",
        title: "Vulnerable and outdated components",
        text: "",
      },
      {
        header: "#7",
        title: "Identification and Authentication Failures",
        text: "",
      },
      {
        header: "#8",
        title: "Software and Data Integrity Failures",
        text: "",
      },
      {
        header: "#9",
        title: "Security Logging and Monitoring Failures",
        text: "",
      },
      {
        header: "#10",
        title: "Server Side Request Forgery",
        text: "",
      },
    ]
  },
  {
    id: "a5",
    title: "Testing",
    data: [
      {
        header: "F.I.R.S.T Testing Principles",
        text: "<b>Fast</b> Test should run fast, noone will wait too long.<br/>\
        <b>Independant</b> One run should not depend on other runs results.<br/>\
        <b>Repeatable</b> Test can be repeated on any device (screen resolution, ...).<br/>\
        <b>Self-validating</b> Must return true or false without any other interpretation.<br/>\
        <b>Timely</b> They should be written before or with the code."
      },
      {
        header: "Testing Pyramid",
        text: ""
      },
    ]
  },
  {
    id: "a6",
    title: "Git Basics",
  },
  {
    id: "a7",
    title: "Git branching strategies",
    data: [
      {
        header: "Git flow",
        text: "GitFlow is ideally suited for projects that have a scheduled release cycle. The workflow consistes of two main branches that last forever. These are <b>master</b> and <b>develop</b>. Well structurized but slow.",
        img: "gitFlow",
        height: 300
      },
      {
        header: "GitHub flow",
        text: "This flow is ideal for organizations that need <b>simplicity, and roll out frequently</b>. Every unit of work, whether it be a bugfix or feature, is done through a branch that is <b>created from master</b>. After the work has been completed in the branch, it is reviewed and tested before being merged into master and pushed out to production. Simplier and quicker. Oriented on more mature developers.",
        img: "gitHubFlow",
        height: 300
      },
      {
        header: "GitLab flow",
        text: "Workflow for organizations that need to release frequently, rather than having scheduled releases. Added production(pre-prod) brunches.",
        img: "gitLabFlow",
        height: 300
      },
    ],
  },
];
