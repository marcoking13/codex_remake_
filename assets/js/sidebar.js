const CreateSideBar = (side,heading,value,api_function,args)=>{
  console.log(args);

  RemoveActiveSidebars(value);

  var sidebarNav = $("<nav>").addClass("sidebar sidebar-"+side).attr("data",value);
  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");
  var sidebarHeading = $("<p>").addClass("sidebar-heading").text(heading);

  $(sidebarNav).appendTo(".side-container-"+side);
  $(sidebarHeadingContainer).appendTo(sidebarNav);
  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  CreateSidebarContent(api_function,args);
  AddActiveSidebars(value);

}
// const PopulateMeetupContent = (topic,description,time,place,link){
//
// }
// const PopulateQuiz = (topic,webLink,appLink){
//
// }
// const IterateSidebarTabs = (heading,icon){
//
// }

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



const CreateSidebarContent = async (functionExecuted,args)=>{

   console.log(args);
   var results = await functionExecuted(args[0],args[1]);
   if(results){



     var content = [];

     for(var i = 0; i <results.results.length; i++){
        var splitDescription = results.results[i].description.slice(0, 200);
        console.log(splitDescription)


       content.push(
         {
           title:results.results[i].title,
           description:splitDescription,
           icon:"",
           link:results.results[i].id,
           time:results.results[i].start + " To "+results.results[i].end,
           place:results.results[i].timezone,
         }
       )
     }

     content.map((content_tab)=>{
       console.log(content_tab)
       var dummyDiv = $("<div>").addClass("side-bar-tab ");
       var title = $("<p>").text(content_tab.title).addClass("side-text side-bar-title");
       dummyDiv.append(title);

       var random = Math.floor(Math.random() * 4 + 1);
       var icon = $("<img>").attr("src",`./assets/img/dummy_icon${random}.png`).addClass("icon-meetup");
       dummyDiv.append(icon);
       if(content_tab.description){
         var description = $("<p>").text(content_tab.description).addClass("side-text side-bar-description");
         dummyDiv.append(description);
       }
       if(content_tab.place && content_tab.time){
         var place_time = $("<div>").addClass("place_time");
         var place = $("<p>").text(content_tab.place).addClass(" side-text side-bar-time");
         var time = $("<p>").text(content_tab.time).addClass("side-text side-bar-place");
         place_time.append(time);
         place_time.append(place);
         dummyDiv.append(place_time);
     }
       $(".sidebar").append(dummyDiv);
     });

   }else {
     var dummyDiv = $("<div>").addClass("side-bar-tab ").text("No Results");
     $(".sidebar").append(dummyDiv);
   }


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
