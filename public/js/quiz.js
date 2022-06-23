var selectedAnswers = [];
var score = 0;
var correctAnswers = [];

const CreateQuizTabs = (container) => {

  for(var i = 0; i < topics.length;i++){

    var sidebarTab = $("<div>").addClass("side-bar-tab side-bar-tab-right");

    sidebarTab.attr("data",topics[i].value);

    sidebarTab.on("click",(e)=>{

        if($(".side-container-left").children().hasClass("active-sidebar")){

          CreateQuiz($(e.target).attr("data"));

        }

    });

    var title = $("<p>").text(topics[i].label).addClass("side-text side-bar-title").attr("data",topics[i].value);

    sidebarTab.append(title);

    $("."+container).append(sidebarTab);

  }

}


const Cleanup = ()=>{
  RemoveActiveContent();
  StopAllIFrames();
  RemoveAllActiveTabs();
}

const CreateQuestions = (quiz) =>{

  for(var i = 0; i <=  9; i++){

    CreateQuestion(quiz[i],i);

  }
  
}


const CreateSubmit = (quiz,value) =>{
  var submit = $("<button>").addClass("quiz_submit_button margin-top-5 btn width-90 margin-left-5 ").text("Submit Here");

  submit.appendTo(".quiz-container");

  submit.click((e)=>{

      SubmitQuiz(quiz,value);

  });
}

const CreateQuiz = (value) => {

  Cleanup();

  var quizHeading = $("<h1>").text(value).addClass("quiz-title light-green-color  text-center").appendTo(".quiz-container");

  var quiz = QuizConfig[value];

  CreateQuestions(quiz);

  CreateSubmit(quiz,value);

}

const CollectUserAnswers = (div) => {

  var index = 0;

   $(div).children().each(function(){

      index++;

      var choice = $(this);

      if($(this).hasClass("active_choice")){

        selectedAnswers.push({answer:choice.attr("index"),element:$(this)});

        return false;

      }else if(index >= $(div).children().length){

        selectedAnswers.push({answer:5,element:$(this)});

        return false;

      }

  });


}


const IterateToChoicesElements = (div) => {

  if($(div).hasClass("quiz-content")){

      var quizContent = ($(div));

      quizContent.children().each(function(){

        if($(this).hasClass("choices-container")){

            CollectUserAnswers(this);

        }


    });
  }

}

const IterateThroughQuizElements = ()=> {

  $(".quiz-container").children().each(function(){

    if($(this).hasClass("quiz-row")){

       var quizRow =  $(this);
       quizRow.children().each(function(){

         IterateToChoicesElements(this);

       });

    }

  });

}

const CreateCorrectAnswerKey =  (quiz) => {


    for(var i = 0; i < 10; i ++){

        var correctIndex = quiz[i].correctIndex;

        correctAnswers.push(correctIndex);

    }


}

const CompareUserandKeyAnswers = () => {



  for(var i = 0; i < selectedAnswers.length;i++){

    if(correctAnswers[i] == selectedAnswers[i].answer){

      selectedAnswers[i].element.addClass("correct light-green-background white_text");

      score++;

    }else{

      selectedAnswers[i].element.addClass("incorrect red-background white_text");

    }

  }

}

const SubmitQuiz = (quiz,quizValue) =>{


  selectedAnswers = [];
  correctAnswers = [];
  score = 0;

  CreateCorrectAnswerKey(quiz);
  IterateThroughQuizElements();
  CompareUserandKeyAnswers();
  DisplayScore(score,quizValue)

}

const DisplayScore = (score,value) => {


  var scoreBox = $("<div>").addClass("score_box text-center light-green-color");
  var scoreContainer = $("<div>").addClass("score_container absolute margin-top-5 width-50 margin-left-25 padding-5 black-background green-border-2px");
  var resetButton = $("<button>").addClass("btn btn-danger score_button width-50 margin-left-25").text("Restart")

  resetButton.click((e)=>{

    CreateQuiz(value);

  });

  scoreBox.text(score + "/"+10);

  scoreContainer.appendTo(".quiz-container");

  scoreBox.appendTo(scoreContainer);

  resetButton.appendTo(scoreBox);

}

const CreateQuestion = (questionObj,index) => {

  var row = $("<div>").addClass("row quiz-row margin-top-2_5 quiz-row-"+index)

  row.appendTo(".quiz-container");

  var colSpace = $("<div>").addClass("col-2");

  colSpace.appendTo(row);

  var content = $("<div>").addClass("col-8 quiz-content quiz-content-"+index)

  content.appendTo(row);

  var question = $("<h3>").text(questionObj.question).addClass("question-heading text-center margin-top-5 light-green-color");

  question.appendTo(content);

  var choiceContainer = $("<div>").addClass("choices-container choices-"+index)

  choiceContainer.appendTo(".quiz-content-"+index);

  for(var i = 0; i < questionObj.choices.length; i++){

    CreateChoices(questionObj.choices[i],i,choiceContainer);

  }

}

const CreateChoices = (choice,index,choiceContainer) => {

  var choices = $("<div>").addClass("choice-container black-background white_text black-border-2px  border_cut_slight choice"+index).attr("index",index)

  choices.appendTo(choiceContainer);

  choices.on("click",(e)=>{

      choiceContainer.children().each(function(){

        $(this).removeClass("active_choice");

      });

      choices.addClass("active_choice");

  });

  var choiceText = $("<p>").addClass("choice-text text-center").text(choice).data("index",index)

  choiceText.appendTo(choices);

}

const CreateQuizSideBar = () => {

  var active = isQuizTabOpen ? "active-sidebar" : "inactive-sidebar-static";

  var sidebarNav = $("<nav>").addClass("sidebar sidebar-left "+active);

  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");

  var sidebarHeading = $("<p>").addClass("sidebar-heading").text("Quizzes");

  $(sidebarNav).appendTo(".side-container-left");

  $(sidebarHeadingContainer).appendTo(sidebarNav);

  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  CreateQuizTabs("sidebar-left");

}
