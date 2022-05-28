




const CreateQuizTabs = (container) => {

  for(var i = 0; i < topics.length;i++){

    var sidebarTab = $("<div>").addClass("side-bar-tab side-bar-tab-right");
    sidebarTab.attr("data",topics[i].value);

    sidebarTab.on("click",(e)=>{
      console.log($(".side-container-left").children().hasClass("active-sidebar"));
        if($(".side-container-left").children().hasClass("active-sidebar")){

          CreateQuiz($(e.target).attr("data"));
        }

    });

    var title = $("<p>").text(topics[i].label).addClass("side-text side-bar-title").attr("data",topics[i].value);
    sidebarTab.append(title);

    $("."+container).append(sidebarTab);

  }

}




const CreateQuiz = (value) => {

  RemoveActiveContent();
  StopAllIFrames();



  var quiz = QuizConfig[value];

  var quizHeading = $("<h1>").text(value).addClass("quiz-title")
  quizHeading.appendTo(".quiz-container");

  for(var i = 0; i <=  9; i++){

    CreateQuestion(quiz[i],i);

  }

  var submit = $("<button>").addClass("quiz_submit_button btn btn-secondary width-50 margin-left-25").text("Submit Here");
  submit.appendTo(".quiz-container");
  submit.click((e)=>{

      SubmitQuiz(quiz,value);

  });


}



const SubmitQuiz = (quiz,quizValue) =>{

  var correctAnswers = [];
  var selectedAnswers = [];
  var score = 0;


  for(var i = 0; i < 10; i ++){

      var correctIndex = quiz[i].correctIndex;

      correctAnswers.push(correctIndex);

  }




  $(".quiz-container").children().each(function(){
      console.log($(this));
    if($(this).hasClass("quiz-row")){
       var quizRow =  $(this);
       quizRow.children().each(function(){
           console.log($(this));
         if($(this).hasClass("quiz-content")){
           var quizContent = ($(this));
           quizContent.children().each(function(){
               console.log($(this));
             if($(this).hasClass("choices-container")){
               var choicesContainer = $(this);
               var index = 0;
               choicesContainer.children().each(function(){
                    index++;
                   console.log($(this));
                 if($(this).hasClass("active_choice")){
                   var choice = $(this);
                  console.log(selectedAnswers);
                   selectedAnswers.push({answer:choice.attr("index"),element:$(this)});
                   return false;
                 }else if(index >= choicesContainer.children().length){
                   selectedAnswers.push({answer:null,element:$(this)});

                   return false;
                 }
                 console.log(selectedAnswers);
               })
             }
           })
         }
       })
    }
  });

  for(var i = 0; i < selectedAnswers.length;i++){
    console.log(correctAnswers[i], selectedAnswers[i])
    if(correctAnswers[i] == selectedAnswers[i].answer){
      console.log(selectedAnswers[i].element);
      selectedAnswers[i].element.addClass("correct");
      score++;
    }else{
        selectedAnswers[i].element.addClass("incorrect");
    }

  }

  DisplayScore(score,quizValue)



}


const DisplayScore = (score,value) => {


  var scoreBox = $("<div>").addClass("score_box");
  var scoreContainer = $("<div>").addClass("score_container");
  var resetButton = $("<button>").addClass("btn btn-danger score_button").text("Restart")
  resetButton.click((e)=>{
    CreateQuiz(value);
  });


  scoreBox.text(score + "/"+10);
  scoreContainer.appendTo(".quiz-container");
  scoreBox.appendTo(scoreContainer);
  resetButton.appendTo(scoreBox);

}




const CreateQuestion = (questionObj,index) => {

  var row = $("<div>").addClass("row quiz-row quiz-row-"+index)
  row.appendTo(".quiz-container");

  var colSpace = $("<div>").addClass("col-2");
  colSpace.appendTo(row);

  var content = $("<div>").addClass("col-8 quiz-content quiz-content-"+index)
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

  var choices = $("<div>").addClass("choice-container choice"+index).attr("index",index)
  choices.appendTo(choiceContainer);
  choices.on("click",(e)=>{

      choiceContainer.children().each(function(){

        $(this).removeClass("active_choice");
      })
      choices.addClass("active_choice");

  });

  var choiceText = $("<p>").addClass("choice-text").text(choice).data("index",index)
  choiceText.appendTo(choices);

}

const CreateQuizSideBar = () => {


  var active = isQuizTabOpen ? "active-sidebar" : "inactive-sidebar";

  var sidebarNav = $("<nav>").addClass("sidebar sidebar-left "+active);

  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");
  var sidebarHeading = $("<p>").addClass("sidebar-heading").text("Quizzes");

  $(sidebarNav).appendTo(".side-container-left");
  $(sidebarHeadingContainer).appendTo(sidebarNav);
  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  CreateQuizTabs("sidebar-left");



}
