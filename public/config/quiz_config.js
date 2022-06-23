var QuizConfig = {
  HTML_Quiz: {
    0: {
      question: "What does HTML stand for?",
      choices:[
        "Home Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyper Texture Maker Language",
        "Home Tool Maker Language"
      ],
      correctIndex: 1,
    },
    1:   {
      question: "Choose the correct HTML (<>) element for the largest heading:",
      choices:[
        "<h2>",
        "<h3>",
        "<h1>",
        "<h6>"
      ],
      correctIndex: 2
    },
    2: {
      question: "What is the correct HTML (<>) element for inserting a line break?",
      choices:[
        "<break />",
        "<br/>",
        "<hr>",
        "<br>"
      ],
      correctIndex: 1
    },
    3: {
      question: "Which of these elements are not table elements?",
      choices:[
        "<tabel>",
        "<col>",
        "<row>",
        "<tab>"
      ],
      correctIndex: 3
    },
    4:  {
      question: "How can you make a bulleted list?",
      choices:[
        "<ul><li/></ul>",
        "<li></li>",
        "<list>",
        "<ol><li/></ol>"
      ],
      correctIndex: 0
    },
    5:  {
      question: "An iframe is used to display a web page within a web page.",
      choices:[
        "IFRAME",
        "<embed>",
        "<iframe/>",
        "<iframe>"
      ],
      correctIndex: 2
    },
    6:  {
      question: "HTML comments start with <!-- and end with -->",
      choices:[
        "true",
        "false"
      ],
      correctIndex: 0

    },
    7:  {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      choices:[
        "alt",
        "img",
        "name",
        "blind_text"
      ],
      correctIndex: 0
    },
    8:  {
      question: "Which HTML (<>) element is used to specify a footer for a document or section?",
      choices:[
        "<foot />",
        "<footer />",
        "<head/>",
        "FOOTER"
      ],
      correctIndex: 1
    },
    9:  {
      question: "Which HTML element most defines navigation links?",
      choices:[
        "<link>",
        "<a />",
        "<href>",
        "<a href='link_url'>"
      ],
      correctIndex: 3
      }
    },
    Javascript_Quiz: {
    0: {
      question: "In css, h1 is considered a/an",
      choices:[
        "Biggest Heading",
        "Small Heading",
        "Smallest Heading",
        "No Bold"
      ],
      correctIndex: 0,
    },
    1:   {
      question: "Which HTML attribute is used to define inline styles?",
      choices:[
        "style",
        "this",
        "inline",
        "css"
      ],
      correctIndex: 0,
    },
    2: {
      question: "Which CSS property controls the text size?",
      choices:[
        "size",
        "hyper",
        "font-size",
        "font-family"
      ],
      correctIndex: 2,
    },
    3: {
      question: "In css, font-size is considered a/an",
      choices:[
        "Selector",
        "Property",
        "Style Type",
        "Class"
      ],
      correctIndex: 1,
    },
    4:  {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      choices:[
        "body",
        "head",
        "footer",
        "n/a"
      ],
      correctIndex: 1,
    },
    5:  {
      question: "Which is the correct CSS syntax?",
      choices:[
        ".class:{}",
        "#.class{}",
        ".class{}",
        "#id:{}"
      ],
      correctIndex: 0,
    },
    6:  {
      question: "Which property is used to change the background color?",
      choices:[
        "background_color:{}",
        "background:{}",
        "background:[]",
        "color:{}"
      ],
      correctIndex:1,
    },
    7:  {
      question: "Which property is used to change the font of an element?",
      choices:[
        "font-family",
        "font-type",
        "font",
        "font-size"
      ],
      correctIndex: 0,
    },
    8:  {
      question: "Which property is used to change the left margin of an element?",
      choices:[
        "margin",
        "margin-left",
        "margin-right",
        "padding-left"
      ],
      correctIndex: 1,
    },
    9:  {
      question: "How do you select an element with id demo?",
      choices:[
        "querySelector(#)",
        "querySelector(.)",
        "querySelector(<>)",
        "querySelector.(#)"
      ],
      correctIndex: 0,
      }
    },
    JQuery_Quiz: {
    0: {
      question: "Inside which HTML element (<>) do we put the JavaScript?",
      choices:[
        "<body>",
        "<script>",
        "<head />",
        "<footer />"
      ],
      correctIndex: 0,
    },
    1:   {
      question: "How do you create a function in JavaScript?",
      choices:[
        "function(){}",
        "function = (){}",
        "function()",
        "execute()"
      ],
      correctIndex: 0,
    },
    2: {
      question: "How do you call a function named myFunction?",
      choices:[
        "myfunction()",
        "myFunction()",
        "myfunction(){}",
        "myFunction{}"
      ],
      correctIndex: 1,
    },
    3: {
      question: "How to write an IF statement in JavaScript?",
      choices:[
        "if(){}",
        "else{}",
        "if {}",
        "if else{}"
      ],
      correctIndex: 0,
    },
    4:  {
      question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
      choices:[
        "if(!)",
        "if(!i = 5)",
        "else{}",
        "if else",
      ],
      correctIndex: 1,
    },
    5:  {
      question: "How does a WHILE loop start?",
      choices:[
        "while(){}",
        "while(var i =0; i<4; i++)",
        "while;",
        "while()=>{}"
      ],
      correctIndex: 0,
    },
    6:  {
      question: "How does a FOR loop start?",
      choices:[
        "while()",
        "for()",
        "for(var i;)",
        "for(var i=0; i<10;i++)"
      ],
      correctIndex: 3,
    },
    7:  {
      question: "How do you find the number with the highest value of x and y?",
      choices:[
        "if (x<y){x is smaller }",
        "if(y == x){x is smaller}",
        "while(x){}",
        "N/A"
      ],
      correctIndex: 0,
    },
    8:  {
      question: "How can you add a comment in a JavaScript?",
      choices:[
        "//",
        "/",
        "///",
        "<!-- -->"
      ],
      correctIndex: 0,
    },
    9:  {
      question: "How do you round the number 7.25, to the nearest highest integer?",
      choices:[
        "Mathf.roundToInt",
        "Mathf.Floor",
        "Mathf.Ceiling",
        "Mathf.round"
      ],
      correctIndex: 2,
      }
    },
    ReactJS_Quiz: {
    0: {
      question: "What is a component",
      choices:[
        "A component is a piece of JSX that can be reused over and over",
        "It is a API Call",
        "Allows user to connect to the server",
        "None of the Above"
      ],
      correctIndex: 0,
    },
    1:   {
      question: "What scripting language is React written in?",
      choices:[
        "NPM",
        "JSON",
        "HTML",
        "JSX"
      ],
      correctIndex: 3,
    },
    2: {
      question: "What is a container?",
      choices:[
        "Hold other components",
        "API Call",
        "Both",
        "Neither"
      ],
      correctIndex: 0
    },
    3: {
      question: "How to import React?",
      choices:[
        "require(React)",
        "require('React')",
        "import(React)",
        "import React from "
      ],
      correctIndex: 3,
    },
    4:  {
      question: "JSX is the same as HTML",
      choices:[
        "True",
        "False"
      ],
      correctIndex: 1,
    },
    5:  {
      question: "How to export a component",
      choices:[
        "export component",
        "export default component",
        "export(component)",
        "export.component"
      ],
      correctIndex: 1,
    },
    6:  {
      question: "How to use a component",
      choices:[
      " use component",
        "<Component/>",
        "<Component >",
        "None"
      ],
      correctIndex: 1,
    },
    7:  {
      question: "How to make a state?",
      choices:[
        "state()",
        "this.state = {}",
        "state = {}",
        "createState({})"
      ],
      correctIndex: 1,
    },
    8:  {
      question: "How to change a state?",
      choices:[
        "this.setState()",
        "this.setState = ",
        "setState()",
        "this.state = "
      ],
      correctIndex: 0,
    },
    9:  {
      question: "True or False: Functional components can use state",
      choices:[
        "True",
        "False",

      ],
      correctIndex: 1,
      }
    },
    AJAX_Quiz: {
    0: {
      question: "What makes Ajax unique?",
      choices:[
        "Allows the user to get API Requests",
        "Allows the user to post API requests",
        "Helps user specify the type of API Requests",
        "All of the Above"
      ],
      correctIndex: 3,
    },
    1:   {
      question: "Axios and AJAX are not similar?",
      choices:[
        "False",
        "True",

      ],
      correctIndex: 0,
    },
    2: {
      question: "What app allows AJAX calls to test requests and responses?",
      choices:[
        "Postman",
        "JSON",
        "Poster",
        "Microsoft"
      ],
      correctIndex: 0,
    },
    3: {
      question: "What does the XMLHttpRequest object accomplish in Ajax?",
      choices:[
        "Peforms safe API Connection",
        "Returns the data into XML",
        "Quits the API call",
        "Perform a status check on the app"
      ],
      correctIndex: 1,
    },
    4:  {
      question: "JSON stands for what?",
      choices:[
        "Javascript Object Notation",
        "Java Object Notation",
        "Javascript Operator Notation",
        "Javascript Node"
      ],
      correctIndex: 0,
    },
    5:  {
      question: "What type of data gets returned from AJAX?",
      choices:[
        "XML",
        "HTTP",
        "JSON",
        "All of the Above"
      ],
      correctIndex: 2,
    },
    6:  {
      question: "Which one of these technologies is NOT used in AJAX?",
      choices:[
        "GET",
        "POST",
        "UPDATE",
        "REMOVE"
      ],
      correctIndex: 3,
    },
    7:  {
      question: "AJAX was made popular by who?",
      choices:[
        "Google",
        "MicroSoft",
        "IBM",
        "Apple"
      ],
      correctIndex: 0,

    },
    8:  {
      question: "AJAX is a programming language",
      choices:[
        "False",
        "True",

      ],
      correctIndex: 0,
    },
    9:  {
      question: "What are the advantages of AJAX?",
      choices:[
        "Styles App",
        "Translate app into other programming languages",
        "Calls other apis to return data from other apps",
        "Calls other apis to perform plugin functions"
      ],
      correctIndex: 1,
      }
    },
    NodeJs_Quiz: {
    0: {
      question: "Which of following command starts a REPL session?",
      choices:[
        "NPM Start",
        "NPM Run",
        "NPM Build",
        "NPM start-app"
      ],
      correctIndex: 0,
    },
    1:   {
      question: "Which of the following provides in-built events?",
      choices:[
        "None of the Above",
        "<component onClick = {}/>",
        "addEvent()",
        "component onClick =  {}"
      ],
      correctIndex: 3,
    },
    2: {
      question: "Which of the following is true about Piping streams?",
      choices:[
        "Provides the output of one stram to another stream",
        "Stops the streaming of one to another",
        "Used to merge streams into one for apps",
        "All of the Above"
      ],
      correctIndex: 2,
    },
    3: {
      question: "Which method of fs module is used to delete a file?",
      choices:[
        "Go to Workshops to delete",
        "use DELETE function",
        "None of the Above",
        "All of the Above"
      ],
      correctIndex: 3,
    },
    4:  {
      question: "Which of the following is the correct way to get an absolute path?",
      choices:[
        "Use anchor tags",
        "Use window.assign method",
        "Use React Router",
        "Use HTML tags"
      ],
      correctIndex: 0,
    },
    5:  {
      question: "Which of the following is true about internal binding with respect to domain module?",
      choices:[
        "Binds functions to their class",
        "this will be binded to the parent function to make this stay the same value",
        "Used to pass down props or change state",
        "All of the Above"
      ],
      correctIndex: 0,
    },
    6:  {
      question: "Which of the following module is required to create a react web server?",
      choices:[
        "React",
        "BodyParse",
        "Create-React-App",
        "Replitt"
      ],
      correctIndex: 2,
    },
    7:  {
      question: "How to extrapolate a class",
      choices:[
        "Use ()",
        "Use {}",
        "Use '' ",
        "Use Import"
      ],
      correctIndex: 1,

    },
    8:  {
      question: "Which of the following is true about RESTful webservices?",
      choices:[
        "They are similar to API Driven webservices",
        "They execute asynchronous functions",
        "They return promises",
        "All of the Above"
      ],
      correctIndex: 3,
    },
    9:  {
      question: "What is the use of Underscore Variable in REPL session?",
      choices:[
        "To dictate a space for files",
        "To execute functions",
        "Comment out data",
        "To add to variable"
      ],
      correctIndex: 0,
      }
    },
    MySQL_Quiz: {
    0: {
      question: "MySQL is native to Javascript?",
      choices:[
        "True",
        "False"
      ],
      correctIndex: 1,
    },
    1:   {
      question: "To remove duplicate rows from the result set of a SELECT use the following keyword:",
      choices:[
        "DELETE table_name",
        "REMOVE table_name",
        "DELETE table_name WHERE condition",
        "REMOVE table_name WHERE condition"
      ],
      correctIndex: 2,
    },
    2: {
      question: "Which of the following can add a row to a table?",
      choices:[
        "ADD data WHERE condition",
        "INSERT INTO table_name",
        "INSERT table_name",
        "INSERT table_name IN condition"
      ],
      correctIndex: 1,
    },
    3: {
      question: "Which SQL statement is used to insert a new data in a database?",
      choices:[
        "INSERT INTO (DATA NAME)",
        "ADD (DATA NAME) TO table_name",
        "INSERT INTO DATA ()",
        "INSERT NEW (DATA NAME) TO table_name"
      ],
      correctIndex: 2,
    },
    4:  {
      question: "Which function used to get the current time in mysql?",
      choices:[
        "NEWDATE()",
        "GETDATE()",
        "INSERTDATE()",
        "GETDATE INTO TABLE"
      ],
      correctIndex: 1,
    },
    5:  {
      question: "What of the following is not the function of valid aggregate function?",
      choices:[
        "Calculates a set of Values",
        "All of the Above",
        "Return set of Values",
        "None of the Above"
      ],
      correctIndex: 2,
    },
    6:  {
      question: "What SQL clause is used to restrict the rows returned by a query?",
      choices:[
        "LIMIT",
        "WHEN",
        "WHAT",
        "RESTRICT"
      ],
      correctIndex: 0,
    },
    7:  {
      question: "How many characters are allowed to create a database name?",
      choices:[
        "Unlimited",
        "8000",
        "599",
        "10009"
      ],
      correctIndex: 1,

    },
    8:  {
      question: "MySQL Access security is controlled through?",
        choices:[
          "DPAPI",
          "HTTP",
          "Microsoft",
          "CORS"
        ],
        correctIndex: 1,
      },
    9:  {
      question: "The USE command?",
      choices:[
        "Selects File",
        "Selects Database",
        "Saves File",
        "Quit App"
      ],
      correctIndex: 1,
      }
    },
    MongoDB_Quiz: {
    0: {
      question: "The architecture of a replica set affects the set’s _________ and capability.",
      choices:[
        "Schema",
        "Database",
        "Structure",
        "Data"
      ],
      correctIndex: 0,
    },
    1:   {
      question: "Which of the following format is supported by MongoDB?",
      choices:[
        "JSON",
        "XML",
        "JSX",
        "HTML"
      ],
      correctIndex: 0,
    },
    2: {
      question: "MongoDB Queries can return specific fields of documents which also include user-defined __________ functions.",
      choices:[
        "False",
        "True"
      ],
      correctIndex: 1,
    },
    3: {
      question: "MongoDB is a _________ database that provides high performance, high availability, and easy scalability.",
      choices:[
        "Open Sourced",
        "Closed Sourced",
        "Querying",
        "SQL"
      ],
      correctIndex: 0,
    },
    4:  {
      question: "Dynamic schema in MongoDB makes ____________ easier for applications.",
      choices:[
        "Querying",
        "Adding Data",
        "Changing Data",
        "All of the Above"
      ],
      correctIndex: 3,
    },
    5:  {
      question: "With ________, MongoDB supports a complete backup solution and full deployment monitoring.",
      choices:[
        "Mongod",
        "Mongo",
        "Mongodb",
        "NPM"
      ],
      correctIndex: 0,
    },
    6:  {
      question: "Point out the correct statement:",
      choices:[
        "collections.find()",
        "collections.count()",
        "db.collections.count()",
        "collections.document"
      ],
      correctIndex: 2,
    },
    7:  {
      question: "After starting the mongo shell, your session will use the ________ database by default.",
      choices:[
        "Mongod",
        "Mongo",
        "Mongodb",
        "SQL"
      ],
      correctIndex: 0,

    },
    8:  {
      question: "Which of the following method is used to query documents in collections?",
      choices:[
        "db.collections.findOne()",
        "db.collections.query()",
        "collections.findOne()",
        "collections.findIndexOf()"
      ],
      correctIndex: 2,
    },
    9:  {
      question: "Which of the following method returns true if the cursor has documents?",
      choices:[
        "checkData()",
        "db.collections.checkData()",
        "db.collections.file",
        "db.collections.find()"
      ],
      correctIndex: 3
      }
    }
}
