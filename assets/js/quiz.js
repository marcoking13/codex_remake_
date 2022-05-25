

const CreateQuizTabs = (container) => {
  for(var i = 0; i < topics.length;i++){
    console.log(topics[i].label);
    var sidebarTab = $("<div>").addClass("side-bar-tab side-bar-tab-right");
    var title = $("<p>").text(topics[i].label).addClass("side-text side-bar-title");
    sidebarTab.append(title);
    $("."+container).append(sidebarTab);
  }
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
