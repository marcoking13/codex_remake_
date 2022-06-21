

const CreateSideBar = (side,heading,value,content_creation,args)=>{

  RemoveActive("side-container-right",value);
  var active = isMeetupTabOpen ? "active-sidebar" : "inactive-sidebar-static";
  var sidebarNav = $("<nav>").addClass("sidebar sidebar-"+side + " "+active).attr("data",value);
  var sidebarHeadingContainer = $("<div>").addClass("sidebar-container-heading");
  var sidebarHeading = $("<p>").addClass("sidebar-heading").text(heading);

  $(sidebarNav).appendTo(".side-container-"+side);
  $(sidebarHeadingContainer).appendTo(sidebarNav);
  $(sidebarHeading).appendTo(sidebarHeadingContainer);

  CreateSidebarContent(content_creation,args,value);

}

const CreateSidebarContent = async (functionExecuted,args,value)=>{

   var results = await functionExecuted(args[0],args[1]);
    var sideBarData = $(`[data=${value}].sidebar-right`);

   if(results){

     var content = [];

     for(var i = 0; i <results.results.length; i++){


        var splitDescription;
        if(results.results[i].description.length <= 0){

          splitDescription = results.results[i].labels;
        }else{
          splitDescription = results.results[i].description.slice(0,200);
        }

         content.push(
           {

             title:results.results[i].title,
             description:splitDescription,
             icon:"",
             link:results.results[i].id,
             time:results.results[i].start + " To "+results.results[i].end,
             place:results.results[i].timezone,

           });

       }

     content.map((content_tab)=>{

       var sidebarTab = $("<div>").addClass("side-bar-tab side-bar-tab-right");
       var title = $("<p>").text(content_tab.title).addClass("side-text side-bar-title");

       sidebarTab.append(title);

       var random = Math.floor(Math.random() * 17 + 1);
       var icon = $("<img>").attr("src",`./assets/img/codex_icon (${random}).png`).addClass("icon-meetup");
       sidebarTab.append(icon);

       if(content_tab.description){

         var description = $("<p>").text(content_tab.description).addClass("side-text monospace-font text-center side-bar-description");
         sidebarTab.append(description);

       }

       if(content_tab.place && content_tab.time){

         var place_time = $("<div>").addClass("place_time");
         var place = $("<p>").text(content_tab.place).addClass(" side-text side-bar-time");
         var time = $("<p>").text(content_tab.time).addClass("side-text side-bar-place");

         place_time.append(time);
         place_time.append(place);
         sidebarTab.append(place_time);

     }



         sideBarData.append(sidebarTab);


     });

   }else{

    var noResults = $("<div>").addClass("side-bar-tab side-bar-tab-right").text("No Results");

     sideBarData.append(noResults);

   }

}


const ShowSidebar = (side) =>{

  var sideNav = $(".sidebar-"+side);

  sideNav.removeClass("inactive-sidebar");
  sideNav.addClass("active-sidebar");

}


const HideSidebar = (side,isMeetup) =>{

    var sidebar= $(".sidebar-"+side);
    if(isMeetup){
      isMeetupTabOpen = false;
    }else{
      isQuizTabOpen = false;
    }

    sidebar.removeClass("active-sidebar");
    sidebar.addClass("inactive-sidebar");

}
