const CreateSideBar = (side,heading,value)=>{

  RemoveActiveSidebars(value);

  var sidebarNav = $("<nav>").addClass("sidebar sidebar-"+side).attr("data",value);
  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");
  var sidebarHeading = $("<p>").addClass("sidebar-heading").text(heading);

  $(sidebarNav).appendTo(".side-container-"+side);
  $(sidebarHeadingContainer).appendTo(sidebarNav);
  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  for (var i = 0; i<=8; i++){
    var dummyDiv = $("<div>").addClass("side-bar-tab "+value).attr("data",value).text(value);
    $(sidebarNav).append(dummyDiv);
  }

  AddActiveSidebars(value);

}

const AddActiveSidebars = (value) =>{
  AddActive("side-container-left",value,"active-sidebar");
  AddActive("side-container-right",value,"active-sidebar");
}

const RemoveActiveSidebars = (value) =>{
  RemoveActive("side-container-left",value,"active-sidebar");
  RemoveActive("side-container-right",value,"active-sidebar");
}

const ShowSidebar = (className) =>{

  var sidebar = $("."+className);

  sidebar.removeClass("no-opacity");
  sidebar.addClass("full-opacity");

}

const HideSidebars = () =>{

  var sidebarRight = $(".side-container-right");
  var sidebarLeft= $(".side-container-left");

  if(sidebarRight.hasClass("full-opacity")){
    sidebarRight.removeClass("full-opacity");
    sidebarRight.addClass("no-opacity");
  }

  if(sidebarLeft.hasClass("full-opacity")){
    sidebarLeft.removeClass("full-opacity");
    sidebarLeft.addClass("no-opacity");
 }

}
