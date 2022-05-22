const AppendInitialTab = (value,id) => {

    var searchtabContainer = $("#myTabs");

    searchtabContainer.addClass("visible");

    didPageRestyle = true;

    AppendTab(value);

}

const RemoveActiveContent = (value) => {
  RemoveActive("codepen_container",value,"active-container");
  RemoveActive("youtube_video_container",value,"active-container");
}

const AddActiveContent = (value) => {
  AddActive("codepen_container",value,"active-container");
  AddActive("youtube_video_container",value,"active-container");
}


const TabHandler = (value) =>{

      var k =0;

      RemoveActiveContent(value);
      RemoveActiveSidebars(value);

      $(".search-tab").each(function(){
          $(this).removeClass("active-tab");
      });

      $('.search-tab').each(function() {
        k++;

        var data = $(this).attr("data");

        if(data == value){

          $(this).addClass("active-tab");

          AddActiveContent(value);
          AddActiveSidebars(value);

          return false;

        }else if(k >= $(".search-tab").length){
          AppendTab(value);
        }

    });

}


const RemoveActive = (container,value,className)=>{

  $("."+container).children().each(function(){

    if(value !== $(this).attr("data")){
       $(this).removeClass(className);
    }

  });

}


const AddActive = (container,value,className)=>{

  $("."+container).children().each(function(){

    if(value == $(this).attr("data")){
      $(this).addClass(className);
      return false;
    }

  });

}

const AppendTab = (value)=>{

  var tab = $("<div>").addClass("col-1 active-tab search-tab");

  tab.attr("data",value).text(value);

  $("#myTabs").append(tab);

  TutorialAndCode(value);
  CreateSideBar("left","Quizzes",value);
  CreateSideBar("right","Meetups",value);

  tab.on("click",(e)=>{
    TabHandler($(e.target).attr("data"));
  });

}