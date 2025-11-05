// HCI Module 2: MVC Framework Questions
const hciModule2Questions = [
    {
        question: "What is the MVC framework primarily used for?",
        options: ["Developing hardware components", "Developing and implementing user interfaces, especially Web applications", "Creating database schemas", "Designing network protocols"],
        answer: 1
    },
    {
        question: "Who initially proposed the MVC approach?",
        options: ["The designers of the C programming language", "The designers of the Smalltalk programming language", "The creators of Java", "The developers of Python"],
        answer: 1
    },
    {
        question: "What does the Model component in MVC represent?",
        options: ["The user interface logic", "The data and logic, including domain-specific representations", "The processing of user input", "The rendering of output"],
        answer: 1
    },
    {
        question: "In the banking application example, what does the Model handle?",
        options: ["Displaying windows and widgets", "Maintaining balance, computing interest, and making wire transfers", "Processing user requests", "Rendering the interface"],
        answer: 1
    },
    {
        question: "What is the primary role of the View component?",
        options: ["Processing business logic", "Presenting the user interface and rendering model data for interaction", "Handling user input", "Managing data storage"],
        answer: 1
    },
    {
        question: "Can multiple views exist for a single model in MVC?",
        options: ["No, each model has only one view", "Yes, for different purposes or platforms", "Only in web applications", "Only in desktop applications"],
        answer: 1
    },
    {
        question: "What does the Controller component do?",
        options: ["Stores data and logic", "Serves as an interface between model and view, processing requests and manipulating data", "Renders the user interface", "Manages database connections"],
        answer: 1
    },
    {
        question: "In many modern frameworks, what happens to the View and Controller?",
        options: ["They are separated into different modules", "They are merged into one module due to their close connection", "They are eliminated", "They are duplicated"],
        answer: 1
    },
    {
        question: "What is an advantage of the MVC framework?",
        options: ["Slower development process", "Allows parallel development of components", "Increases code duplication", "Makes SEO difficult"],
        answer: 1
    },
    {
        question: "How does MVC support multiple views for a model?",
        options: ["By tightly coupling data and display", "Through separation of data and business logic from display", "By requiring identical interfaces", "By limiting to one platform"],
        answer: 1
    },
    {
        question: "What makes MVC components reusable?",
        options: ["They apply formatting to data", "They return data without formatting", "They include platform-specific code", "They depend on views"],
        answer: 1
    },
    {
        question: "What is a disadvantage of the MVC framework?",
        options: ["Inefficiency of data access in view due to minimal code duplication", "Faster development", "Easy implementation with modern UI", "No need for business knowledge"],
        answer: 0
    },
    {
        question: "Why might MVC be difficult to implement with modern user interfaces?",
        options: ["Due to different modalities involved", "Because it's too simple", "Due to lack of components", "Because it's outdated"],
        answer: 0
    },
    {
        question: "What knowledge do developers need for MVC components?",
        options: ["Only programming syntax", "Knowledge about the business process linked to the application", "Graphic design skills", "Database administration"],
        answer: 1
    },
    {
        question: "In the MVC implementation steps, what happens after the controller processes the request?",
        options: ["The browser sends a request", "The result is passed to the appropriate view", "The model is updated", "The view renders the result"],
        answer: 1
    },
    {
        question: "What is the final step in MVC implementation?",
        options: ["Browser sends request", "Controller processes request", "Model processes data", "View renders result into a form suitable for user interaction"],
        answer: 3
    }
];

// Expose the questions to the global window object as hciModule2Questions
if (typeof window !== 'undefined') {
    window.hciModule2Questions = hciModule2Questions;
    console.log('HCI Module 2 questions loaded:', hciModule2Questions.length);
}

// Support CommonJS (Node) require if used in tests or tooling
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hciModule2Questions;
}