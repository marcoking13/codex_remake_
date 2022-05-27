

const CreateQuizTabs = (container) => {
  for(var i = 0; i < topics.length;i++){
    console.log(topics[i].label);
    var sidebarTab = $("<div>").addClass("side-bar-tab side-bar-tab-right");
    sidebarTab.attr("data",topics[i].value);

    sidebarTab.on("click",(e)=>{

        CreateQuiz($(e.target).attr("data"));
    });

    var title = $("<p>").text(topics[i].label).addClass("side-text side-bar-title").attr("data",topics[i].value);
    sidebarTab.append(title);
    $("."+container).append(sidebarTab);
  }
}


const CreateQuiz = (value) => {

  RemoveActiveContent();

  var quiz = QuizConfig[value];

  var quizHeading = $("<h1>").text(value).addClass("quiz-title")
  quizHeading.appendTo(".quiz-container");

  for(var i = 0; i <=  9; i++){

    CreateQuestion(quiz[i],i);
  }
}

const CreateQuestion = (questionObj,index) => {

  var row = $("<div>").addClass("row quiz-row quiz-row-"+index)
  row.appendTo(".quiz-container");
  var colSpace = $("<div>").addClass("col-2");
  colSpace.appendTo(row);
  var content = $("<div>").addClass("col-8 quiz-content-"+index)
  content.appendTo(row);
  var question = $("<h3>").text(questionObj.question).addClass("quiz-heading");
  question.appendTo(content);
  var choiceContainer = $("<div>").addClass("choices-container choices-"+index)
  choiceContainer.appendTo(".quiz-content-"+index);
  for(var i = 0; i < questionObj.choices.length; i++){

    CreateChoices(questionObj.choices[i],i,choiceContainer);
  }
}


const CreateChoices = (choice,index,choiceContainer) => {

  var choices = $("<div>").addClass("choice-container choice"+index).data("index",index)
  choices.appendTo(choiceContainer);
  var choiceText = $("<p>").addClass("choice-text").text(choice).data("index",index)
  choiceText.appendTo(choices);
}



const CreateQuizSideBar = () => {
  var sidebarNav = $("<nav>").addClass("sidebar active-sidebar sidebar-left");
  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");
  var sidebarHeading = $("<p>").addClass("sidebar-heading").text("Quizzes");

  $(sidebarNav).appendTo(".side-container-left");
  $(sidebarHeadingContainer).appendTo(sidebarNav);
  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  CreateQuizTabs("sidebar-left");



}
