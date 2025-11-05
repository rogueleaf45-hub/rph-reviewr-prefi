// HCI Module 1: UI Framework and Toolkit Questions
const hciModule1Questions = [
    {
        question: "What is a framework in the context of UI development?",
        options: ["A library of precomposed UI objects and predefined events", "A well-defined environment that exposes toolkits, functions, or algorithms for developing applications", "An essential part of a GUI that displays information or provides interaction", "A set of native user interface components for GUI programming"],
        answer: 1
    },
    {
        question: "What does a UI toolkit provide?",
        options: ["A mechanism for deploying and running applications", "A library of precomposed UI objects and predefined set of events or routines", "The main run loop for managing interactions", "Graphics and imaging tools including shape, color, and font classes"],
        answer: 1
    },
    {
        question: "What is a widget in a graphical user interface (GUI)?",
        options: ["A framework that supports large applications", "An essential part of a GUI that displays information or provides a specific way for users to interact", "A robust event-handling model", "A resource manager for accessing non-code resources"],
        answer: 1
    },
    {
        question: "How is the UI toolkit structured to support large applications?",
        options: ["It assumes individual events or routines will support major functions, with a main routine consisting of small decision kits", "It provides a rich and extensible View System", "It enables all applications to display custom alerts in the status bar", "It manages the lifecycle of applications"],
        answer: 0
    },
    {
        question: "What are the key features provided by the Android UI Execution Framework?",
        options: ["A rich and extensible View System, Resource Manager, Notification Manager, Activity Manager, and Content Provider", "Infrastructure for implementing interfaces and event handling", "Native user interface components and a robust event-handling model", "Animation support, document support, and accessibility support"],
        answer: 0
    },
    {
        question: "How does event processing work in the Android framework?",
        options: ["Events are placed in a queue and removed on a first-in, first-out basis", "Events are combined to represent higher-level gestures like flicks and swipes", "Sensor data is conveyed through a separate Core Motion framework", "Low-level events are sent as UIEvent objects to the view"],
        answer: 0
    },
    {
        question: "What does the iOS UIKit Framework provide?",
        options: ["The required infrastructure for iOS or tvOS applications, window and view architecture, and event handling", "A set of native user interface components", "Data transfer classes for cut-and-paste through native platform clipboard", "Layout managers for flexible window layouts"],
        answer: 0
    },
    {
        question: "What types of discrete events does iOS handle?",
        options: ["Multi-touch, motion, and remote control", "Touch gestures and virtual keyboard inputs", "Accelerometer and gyroscope data", "Mouse click and keyboard input"],
        answer: 0
    },
    {
        question: "What is JavaServer Faces (JSF)?",
        options: ["An open-source framework for creating Java applications based on MVC", "A lightweight Web framework for designing simple applications", "A framework supported by Oracle with in-depth documentation for Java Enterprise Edition", "A mobile toolkit with screen designs in PSD format"],
        answer: 2
    },
    {
        question: "What is Struts in Web UI Frameworks?",
        options: ["A framework for fast development and testing based on MVC, but not flexible due to coding rules", "A toolkit containing six screen designs in Photoshop format", "A framework that enables applications to access data from other applications", "A framework providing animation support and text management"],
        answer: 0
    },
    {
        question: "What is Wicket?",
        options: ["A mobile toolkit with 50 different screen designs in Sketch format", "A lightweight Web framework built for designing simple but elegant applications in a component-based language", "A toolkit powered by Envato with more than 55 high-quality screens", "A framework that manages the lifecycle of applications"],
        answer: 1
    },
    {
        question: "What is Spool UI Kit?",
        options: ["A free mobile toolkit with six screen designs in Photoshop Document format", "An open-source framework for Java applications", "A framework providing a robust event-handling model", "A toolkit for creating iOS mobile applications with high-quality screens"],
        answer: 0
    },
    {
        question: "What is Travel UI Kit?",
        options: ["A toolkit with more than 55 high-quality, ready-to-use screens", "A free mobile toolkit with 50 different screen designs in Sketch format", "A framework supported by Apache Software Foundation", "A framework for handling multi-touch and other inputs"],
        answer: 1
    },
    {
        question: "What is Splash UI Kit?",
        options: ["One of the best toolkits for creating iOS mobile applications with more than 55 high-quality screens", "A framework for flexible window layouts", "A toolkit designed by Sergey Melnik", "A framework providing graphics and imaging tools"],
        answer: 0
    },
    {
        question: "What is Java Abstract Window Toolkit (AWT)?",
        options: ["A library of object classes for creating 2D user interfaces and graphical objects", "A framework that exposes toolkits for developing applications", "A mobile toolkit with screen designs", "A framework for managing interactions among user, system, and application"],
        answer: 0
    },
    {
        question: "What features does Java AWT support for GUI programming?",
        options: ["A set of native user interface components, robust event-handling model, graphics and imaging tools, data transfer classes, and layout managers", "A rich View System and Resource Manager", "Infrastructure for implementing interfaces and event handling", "Animation support and accessibility support"],
        answer: 0
    },
    {
        question: "What are AWTEvents in Java AWT?",
        options: ["Descendants of EventObjects covering most useful UI events like mouse click and keyboard input", "Higher-level events like touch gestures", "Sensor data from accelerometers and gyroscopes", "Events placed in a queue and removed FIFO"],
        answer: 0
    }
];

// Expose the questions to the global window object as hciModule1Questions
if (typeof window !== 'undefined') {
    window.hciModule1Questions = hciModule1Questions;
    console.log('HCI Module 1 questions loaded:', hciModule1Questions.length);
}

// Support CommonJS (Node) require if used in tests or tooling
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hciModule1Questions;
}