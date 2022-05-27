const AppendInitialTab = (value,zip) => {

    var searchtabContainer = $("#myTabs");

    searchtabContainer.addClass("visible");

    didPageRestyle = true;

    AppendTab(value,zip);

}

const RemoveActiveContent = (value) => {
  $(".quiz-container").empty();
  RemoveActive("codepen_container",value,"active-container");
  RemoveActive("youtube_video_container",value,"active-container");
}

const AddActiveContent = (value) => {
  AddActive("codepen_container",value,"active-container");
  AddActive("youtube_video_container",value,"active-container");
}


const TabHandler = (value,zip) =>{

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
          AppendTab(value,zip);
        }

    });

}


const RemoveActive = (container,value,className)=>{


  $("."+container).children().each(function(){

    if(value !== $(this).attr("data")){
       $(this).removeClass(className);
       $(this).addClass("send-to-back");
    }

  });

}


const AddActive = (container,value,className)=>{

  $("."+container).children().each(function(){

    if(value == $(this).attr("data")){
      $(this).addClass(className);
      $(this).removeClass("send-to-back");
      return false;
    }

  });

}

const AppendTab = (value,zip)=>{

  var tab = $("<div>").addClass("col-1 active-tab search-tab");

  tab.attr("data",value).text(value);

  $("#myTabs").append(tab);

  TutorialAndCode(value);
  console.log(value,zip);
  CreateSideBar("right","Meetups",value,LocateMeetups,[value,zip]);

  tab.on("click",(e)=>{
    TabHandler($(e.target).attr("data"),GetInputValues().address);
  });

}
