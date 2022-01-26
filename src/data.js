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
        img: "dp10",
        height: 300,
      },
      {

        header: "Creational",
        title: "Builder",
        text: " It allows to create complex object step by step. Builder uses the same code to create different object representations.",
        img: "dp11",
        height: 300,
      },
      {
        header: "Creational",
        title: "Prototype",
        text: "It lets you copy existing objects without making your code dependent on their classes. <b>It creates new instances of objects by cloning them from a prototype</b>. The main focus of prototype pattern is to create an object used as a blueprint for each object constructor created.",
        img: "dp8",
        height: 300,
      },
      {
        header: "Creational",
        title: "Singleton",
        text: "It lets you ensure that a <b>class has only one instance</b>, while providing a global access point to this instance.",
        img: "dp9",
        height: 300,
      },
      {
        header: "Structural",
        title: "Adapter",
        text: "It allows objects with incompatible interfaces to collaborate. This is a special <b>object that converts the interface of one object so that another object can understand it</b>.",
        img: "dp3",
        height: 300,
      },
      {
        header: "Structural",
        title: "Decorator",
        text: "It lets you <b>attach new behaviors to objects</b> by placing these objects inside special wrapper objects that contain the behaviors.<br/><br/>Example: Any clothes are decorators. They don't change the Object but add some weather protection functions.",
        img: "dp4",
        height: 300,
      },
      {
        header: "Structural",
        title: "Facade",
        text: "It <b>provides a simplified interface</b> to a library, a framework, or any other complex set of classes. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.",
        img: "dp5",
        height: 300,
      },
      {
        header: "Structural",
        title: "Flyweight",
        text: "It lets you <b>fit more objects into the available amount of RAM</b> by sharing common parts of state between multiple objects instead of keeping all of the data in each object.",
        img: "dp6",
        height: 300,
      },
      {
        header: "Structural",
        title: "Bridge",
        text: "It lets you to devide one or several classes into two separate hierarchy - abstraction and realisation. That allows to change them separately.",
        img: "dp7",
        height: 300,
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
        img: "dp12",
        height: 300,
      },
      {
        header: "Behaviour",
        title: "State",
        data: [
          {
            text: "It lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",
            img: "dp12",
            height: 300,
          },
          {
            text: "Your mobile phone will act differently:<ul>\
            <li>when it's unlocked, pressing keys will lead to some actions.</li>\
            <li>when it's lockedК, pressing keys will lead to unlock screen.</li>\
            <li>when it's out of power, pressing keys will show low power icon.</li>"
          }
        ]
      },
      {
        header: "Behaviour",
        title: "Observer",
        data: [
          {
            text: "It lets you define a subscription mechanism to <b>notify multiple objects about any events that happen to the object they’re observing</b>.",
            img: "dp2",
            height: 300,
          },
          {
            text: "After you subscribed to a newspaper you don't need to go to the shop and check if there is a new one.",
            img: "dp14",
            height: 300,
          },

        ],
      },
      {
        header: "Behaviour",
        title: "Mediator",
        text: "Restricts direct communications between the objects and <b>forces them to collaborate only via a mediator object</b>. It lets you reduce chaotic dependencies between objects. ",
        img: "dp1",
        height: 300,
      },
      {
        header: "Behaviour",
        title: "Command",
        text: "It turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.",
        img: "dp15",
        height: 300,
      },
      {
        header: "Behaviour",
        title: "Itterator",
        text: "It is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.",
        img: "dp16",
        height: 300,
      },
    ],
  },
  {
    id: "a2",
    title: "SOLID",
    data: [
      {
        header: "Single Responsibility",
        text: "<em>A class should have only one reason to change</em><br/><br/>This means that a <b>class should have only one job</b>. <br/><br/>If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.",
        img: "solid1",
        height: 400,
      },
      {
        header: "Open-Closed",
        text: "<em>Objects or entities should be open for extension but closed for modification.</em><br/><br/>Changing the current behaviour of a Class will affect all the systems using that Class. If you want the Class to perform more functions, the ideal approach is to <b>add to the functions that already exist NOT change them</b>.",
        img: "solid2",
        height: 300,
      },
      {
        header: "Liskov Substitution",
        text: "<em>Every subclass or derived class should be substitutable for their base or parent class.</em><br/><br/> The <b>child Class</b> should be able to process the <b>same requests and deliver the same result as the parent</b> Class or it could deliver a result that is of the same type.",
        img: "solid3",
        height: 500,
      },
      {
        header: "Interface Segregation",
        text: "<em>A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.</em><br/><br/>Many client-specific interfaces are better than one general-purpose interface.<br/><br/> <b>A class should perform only those operations that are necessary for the implementation of its functions</b>. All other actions should either be deleted completely or moved if there is a chance that they will be needed by another class in the future.",
        img: "solid4",
        height: 400,
      },
      {
        header: "Dependency Inversion",
        text: "<em>Entities must depend on abstractions, not on concretions.</em><br/><br/> It states that the <b>high-level module must not depend on the low-level module</b>, but they should depend on abstractions.<br/><br/> According to this principle, the class should not be connected to the tool that it uses to perform the operation. Instead, it should be connected to an interface that helps establish a connection between the tool and the class.",
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
        img: "o1",
        height: 400,
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
        text: "There is no direct vulnerability that can arise due to these issues but in general, logging and monitoring are quite critical and their absence or failures can directly impact visibility, incident alerting, and forensics. Thus, it’s quite important to have a functional logging and monitoring system to collect logs and also give alerts if any malfunctions or errors happen, else these can go unnoticed for a long time and cause a lot more damage. \
        <ul> \
          <li>Ensure that you log all login and failed attempts</li> \
          <li>Maintain a copy of the logs in case the server suffers issues</li> \
          <li>Ensure that the logs contains all the relevant data and are well-formatted to be consumed by other tools or log management solutions</li> \
          <li>Test if your monitoring systems that can suspicious activity and ensure the alerting is done in near real time</li> \
          <li>Ensure that your logs are tamper-proof</li> \
          </ul>",
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
        text: "Testing Pyramid is a framework that can help both developers and QAs create high-quality software. It reduces the time required for developers to identify if a change they introduced breaks the code. It can also be helpful in building a more reliable test suite.",
        img: "t1",
        height: 500
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
  {
    id: "a8",
    title: "Data structures",
    data: [
      {
        title: "Stack",
        text: "Stack follows the principle of LIFO (<b>Last In First Out</b>). If you stack books, the top book will be taken before the bottom one. Or when you browse on internet, the back button leads you to the most recently browsed page.<br/><br/><ul>\
          <li>push: input a new element</li>\
          <li>pop: remove the top element, return the removed element</li>\
          <li>peek: return the top element</li>\
          <li>length: return the number of element(s) in Stack</li>\
        </ul><b>Array</b> in Javascript has the attributes of Stack\
        ",
        img: "ds1",
        height: 200
      },
      {
        title: "Queue",
        text: "Queue is similar to Stack. The only difference is that Queue uses the FIFO principle (<b>First In First Out</b>). In other words, when you queue for bus, the first in the queue will always board first.<br/><br/><ul>\
          <li>enqueue: enter queue, add an element at the end</li>\
          <li>dequeue: leave queue, remove the front element and return it</li>\
          <li>front: get the first element</li>\
          <li>isEmpty: determine whether the queue is empty</li>\
          <li>size: get the number of element(s) in queue</li>\
        </ul><b>Array</b> in Javascript has some attributes of Queue\
        ",
        img: "ds2",
        height: 200
      },
      {
        title: "Linked List",
        text: "Literally, a linked list is a chained data structure, with each node consisting of two pieces of information: the data of the node and the pointer to the next node. Linked list and conventional array are both linear data structures with serialised storage. Of course, they also have differences:<br/><br/><ul>\
          <li>Array read from index, faster speeed.</li>\
          <li>Array add/deletes slower</li>\
        </ul>\
        ",
        img: "ds3",
        height: 200
      },
      {
        title: "Set",
        text: "A set is a basic concept in mathematics: a collection of well defined and distinct objects. ES6 introduced the concept of set, which has certain level of similarity with array. However, a set does not allow repeating elements and is not indexed. You cannot add element that is already exist in the set.<br/><br/><ul>\
          <li>values: Return all elements in a set.</li>\
          <li>size: Return the number of elements.</li>\
          <li>has: Determine whether an element exists.</li>\
          <li>add: Insert elements into set.</li>\
          <li>delete: Delete elements from set.</li>\
        </ul>",
        img: "ds4",
        height: 200
      },
      {
        title: "Hash table",
        text: "A hash table is a key-value data structure. Due to the lightning speed of querying a value through key, it is commonly used in <b>Map</b>, Dictionary or <b>Object</b> data structures. As shown in the graph above, the hash table uses a hash function to convert keys into a list of numbers, and these numbers serve as the values of corresponding keys. To get value using key is dashingly fast, time complexity can achieve O(1). The same keys must return the same values — this is the basis of the hash function.",
        img: "ds5",
        height: 200
      },
      {
        title: "Tree",
        text: "Tree data structure is a multi-layer structure. It is also a non-linear data structure, compared to Array, Stack, and Queue. This structure is highly efficient during insert and search operations. Let’s take a look at some concepts of tree data structure:<br/><br/><ul>\
          <li>root: Root node of a tree, no parent node for root.</li>\
          <li>parent node: Direct node of the upper layer, only has one.</li>\
          <li>child node: Direct node(s) of the lower layer, can have multiple.</li>\
          <li>siblings: Share the same parent node.</li>\
          <li>leaf: Node with no child.</li>\
          <li>Edge: Branch or link between nodes.</li>\
          <li>Path: The edges from a starting node to the target node.</li>\
          <li>Height of Node: Number of edges of the longest path of a specific node to leaf node.</li>\
          <li>Height of Tree: Number of edges of the longest path of the root node to the leaf node.</li>\
          <li>Depth of Node: Number of edges from root node to specific node.</li>\
          <li>Degree of Node: Number of child nodes.</li>\
        </ul>",
        img: "ds6",
        height: 300
      },
      {
        title: "Trie (pronounced try)",
        text: "Trie, or “Prefix Tree”, is also a type of search tree. Trie stores the data step-by-step — each node in the tree represents a step. Trie is used in storing vocabularyso it can be quickly searched, especially for an auto-complete function. Each node in Trie has an alphabet — following the branch can form a complete word. It also comprises a boolean indicator to show whether is this the last alphabet.",
        img: "ds7",
        height: 300
      },
      {
        title: "Graph",
        data: [
          {
            text: "Graph, sometimes known as network, refers to sets of nodes with linkages (or edges). It could be further divided into two groups (ie. directed graphs and undirected graphs), according to whether the linkages have direction. Graph is widely used in our lives — to calculate the best route in navigation apps, or to recommended friends in social media, to take two examples.<br/>",
            img: "ds8",
            height: 300
          },
          {
            text: "<br/>Graph has two types of presentation:<br/><br/>\
              <b>Adjacency List</b><br/>In this method, we list all the possible nodes on the left and show the connected nodes on the right.",
            img: "ds8a",
            height: 200
          },
          {
            text: "<b>Adjacency Matrix</b><br/>Adjacency matrix shows nodes in row and column, intersections of the row and column interpret the relationship between nodes, 0 means not linked, 1 means linked, >1 means different weightage.",
            img: "ds8b",
            height: 200
          },
          {
            text: "To query for nodes in graph, one must search through the entire tree network with either the Breath-First-Search (BFS) method or the Depth-First-Search (DFS) method.",
          }
        ],
      }
    ]
  },
  {
    id: "a9",
    title: "Functional Programming / FRP",
    data: [
      {
        header: "Functional Composition",
        text: "Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions."
      },
      {
        header: "High ordered functions",
        text: "Functions which returns/recieves as an argument other function."
      },
    ]
  },
  {
    id: "a10",
    title: "Development methodology: Agile, Scrum, Kanban",
    data: [
      {
        header: "Agile",
        text: "Instead of betting everything on a \"big bang\" launch, an agile team delivers work in small, but consumable, increments.\
        12 principles: <ul>\
          <li>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li> \
          <li>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li> \
          <li>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li> \
          <li>Business people and developers must work together daily throughout the project.</li> \
          <li>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li> \
          <li>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li> \
          <li>Working software is the primary measure of progress.</li> \
          <li>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li> \
          <li>Continuous attention to technical excellence and good design enhances agility.</li> \
          <li>The best architectures, requirements, and designs emerge from self-organizing teams.</li> \
          <li>Simplicity--the art of maximizing the amount of work not done--is essential.</li> \
          <li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li> \
        </ul>\
        ",
        img: "dm2",
        height: 500
      },
      {
        header: "Scrum",
        text: "",
        img: "dm1",
        height: 400
      },
      {
        header: "Kanban",
        text: "",
        img: "dm3",
        height: 400
      },
      {
        header: "Extreme Programming",
        text: "",
        img: "dm4",
        height: 500
      },
    ]
  },
  {
    id: "a11",
    title: "Performance",
    data: [
      {
        header: "Network optimisations",
        text: "Network optimization is an umbrella term that refers to a range of tools, strategies, and best practices for monitoring, managing, and improving network performance. The primary goal of network optimization is to ensure the best possible network design and performance at the lowest cost structure. \
        <h4>Top network optimization metrics are:</h4> \
        <ul> \
            <li><b>Latency and round-trip time</b> - “Latency” is a synonym for “delay”. Network latency is the measurement of delays that occur in data communication, either in a one-way or round trip of a packet of data. </li> \
            <li><b>Packet Loss</b> - A network packet is a small segment of data that may be transmitted from one point to another within a network. Complete messages, files, or other types of information are broken down into packets which are then individually sent and recombined to reconstruct the original file at the destination. In the event that a packet fails to arrive intact, the origin will need to resend only the lost packet, instead of resending the entire file.</li> \
            <li>Availability</li> \
            <li><b>Network Jitter</b> - This occurs when a stream of data is not constant, resulting in some packets of data taking longer than others to be delivered. Jitter is a sign of an overloaded router due to network congestion, and usually results in poor online video or voice quality.</li> \
            <li>Utilization</li> \
          </ul> \
          <h4>Common network optimization strategies:</h4>\
          <ul> \
            <li><b>Data caching</b> for a more flexible means of data storage and retrieval.</li> \
            <li><b>Traffic shaping</b> to maximize the speed and access to your highest-traffic network infrastructure.</li> \
            <li><b>Prioritizing SD-WAN over WAN</b>, further improving traffic shaping and supporting the most business-critical pieces of your network. </li> \
            <li><b>Data compressing</b> to further eliminate redundant data and encourage more efficient data packet transfers. </li> \
            <li>...</li> \
          </ul>",
      },
    ]
  },
  {
    id: "a12",
    title: "React / Redux",
    data: [
      {
        header: "Refs",
        text: "Refs in React provides a way to access the React elements (or DOM nodes) created in the render() method."
      },
      {
        header: "React hooks",
        text: "<ul>\
        <li><b>useEffect</b> - adds the ability to perform side effects from a function component. It serves the same purpose as <b>componentDidMount</b>, <b>componentDidUpdate</b>, and <b>componentWillUnmount</b> in React classes, but unified into a single API.</li>\
        <li><b>useLayoutEffect</b> - Same as <b>useEffect</b> but acts more like ComponentDidMount - <b>blocks render while executing (sync.)</b> </li>\
        <li><b>useState</b> - Returns a stateful value, and a function to update it. During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).</li>\
        <li><b>useCallback</b> </li>\
        <li><b>useMemo</b> - </li>\
        <li><b>useRef</b> - </li>\
        <li><b>useContext</b> - </li>\
        <li><b>useReducer</b> - </li>\
        </ul>",
      },
    ]
  },
  {
    id: "a13",
    title: "CORS, Authorization (OAuth, JWT, Basic, ...)",
    data: [
      {
        header: "CORS",
        text: "<b>Cross-Origin Resource Sharing</b> is an important way for a restricted resource on a specific web page to get requested from a website which sits on a different domain. <br/>Modern CORS-supporting browsers will require an additional “preflight” request when some cross-domain Ajax resources are requested. This is done to determine whether the browser has the permission to take the action it wants to take.  \
        <h4>Request Headers</h4><ul> \
          <li>Origin</li> \
          <li>Access-Control-Request-Method: one of [GET/POST/...]</li>\
          <li>Access-Control-Request-Headers </li></ul>\
          <h4>Response headers</h4><ul> \
          <li>Access-Control-Allow-Origin : * / http://www.mydo...</li> \
          <li>Access-Control-Allow-Credentials: only [true] or ommit this header</li> \
          <li>Access-Control-Expose-Headers</li> \
          <li>Access-Control-Max-Age</li> \
          <li>Access-Control-Allow-Methods</li> \
          <li>Access-Control-Allow-Headers</li></ul>"
      },
      {
        header: "OAuth",
        text: "OAuth is an open-standard authorization protocol or framework that provides applications the ability for “secure designated access.” For example, you can tell Facebook that it’s OK for ESPN.com to access your profile or post updates to your timeline without having to give ESPN your Facebook password.<br/><br/> OAuth doesn’t share password data but instead uses authorization tokens to prove an identity between consumers and service providers. OAuth is an authentication protocol that <b>allows you to approve one application interacting with another</b> on your behalf <b>without giving away your password</b>."
      },
      {
        header: "JWT",
        text: "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.",
        img: "a1",
        height: 500
      }
    ]
  },
  {
    id: "a14",
    title: "Web Protocols: HTTP, REST, RPC(JRPC), GraphQL...",
    data: [
      {
        header: "HTTP / HTTPS / HTTP 2.0 / HTTP 3.0 (QUIC - UDP)",
        text: "Client - server architecture. <br/><ul>Hyper Text Transfer Protocol is a rule of interacting between \
        \
        </ul> ",
        data: [
          {
            img: "n7",
            height: 500,
          },
          {
            img: "n6",
            height: 500,
          }
        ]
      },
      {
        header: "RPC(JRPC)",
        text: "",
        img: "n5",
        height: 500
      },
      {
        header: "GraphQL",
        text: "Get many resources in a single request. <br/>",
        img: "n3",
        height: 500
      },
      {
        header: "Rest",
        text: "",
        img: "n1",
        height: 500
      },
      {
        header: "SOAP",
        text: "SOAP messages are encoded as XML documents and can be exchanged using various underlying protocols.",
        img: "n2",
        height: 500
      },
      {
        header: "Cookies",
        text: "Cookies are <b>text files with small pieces of data</b> — like a username and password — that are used to identify your computer as you use a computer network. <br/><br/> Data stored in a cookie is <b>created by the server</b> upon your connection. This data is labeled with an ID unique to you and your computer. \
        <br/><br/>HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, and save information about each user’s session. A “session” just refers to the time you spend on a site. \
        <br/><br/>The server only sends the cookie when it wants the web browser to save it. If you’re wondering “where are cookies stored,” it’s simple: your web browser will store it locally to remember the “name-value pair” that identifies you. \
        <br/><br/>They can't infect computers with viruses or other malware. However, some cyberattacks can <b>hijack</b> cookies and enable access to your browsing sessions.",
        img: "n4",
        height: 300
      },
    ]
  },
  {
    id: "a15",
    title: "Algorithms",
    data: [
      {
        header: "Algorithms complexity",
        text: "Algorithmic complexity is a measure of <b>how long an algorithm would take to complete given an input of size n</b>. If an algorithm has to scale, it should compute the result within a finite and practical time bound even for large values of n.",
        data: [
          {
            img: "al1",
            height: 500
          },
          {
            img: "al2",
            height: 400
          }
        ]
      },
    ]
  },
];
