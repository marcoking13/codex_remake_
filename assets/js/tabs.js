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

const DeleteContent = (value) => {

  var tabContainer = $(".tabs-container");
  var youtubeContainer = $(".youtube_video_container");
  var codepenContainer = $(".codepen_container");
  var meetupSidebar = $(".side-container-right");

  DeleteElementLoop(tabContainer,value);
  DeleteElementLoop(youtubeContainer,value);
  DeleteElementLoop(codepenContainer,value);
  DeleteElementLoop(meetupSidebar,value);

}

const DeleteElementLoop = (container,value) => {

    container.children().each(function(){

      if($(this).attr("data") == value){

        $(this).remove();

      }

    });

}

const ReturnActiveTabData = () => {
  $(".tabs-container").each(function(){
      if($(this).hasClass("active-tab")){
        return $(this).attr("data");
      }
  });
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
          if(isMeetupTabOpen){

            ShowSidebar("right");
          }else{

            HideSidebar("right");
          }
          return false;

        }else if(k >= $(".search-tab").length){
          AppendTab(value,zip);
        }

    });

}

const StopAllIFrames = () => {

  $(".youtube_video_container").children().each(function() {

    if($(this).prop("nodeName") == "IFRAME"){

        var src= $(this).attr('src');
        $(this).attr('src',src);

      }

  });

}

const RemoveActive = (container,value)=>{


  $("."+container).children().each(function(){



       $(this).removeClass("visible");
       $(this).addClass("invisible");
       $(this).addClass("send-to-back");


  });

}

const AddActive = (container,value)=>{

  $("."+container).children().each(function(){

    if(value == $(this).attr("data")){


      $(this).removeClass("invisible");
      $(this).addClass("visible");
      $(this).removeClass("send-to-back");

      return false;

    }

  });

}

const CheckTabOverload = () => {

  var tabsArr = $(".tabs-container").children();

  if(tabsArr.length >= 10){

    var warning = confirm("You have too many tabs! If you create another the first one will be deleted is that ok?");

    if(warning){
      var deletedData = $(tabsArr[0]).attr("data");

      DeleteContent(deletedData);

      return false;

    }else{

      return true;

    }
  }

}

const AppendTab = (value,zip)=>{

  if(!CheckTabOverload()){

    var tab = $("<div>").addClass("col-1 active-tab search-tab");

    tab.attr("data",value).text(value);

    $("#myTabs").append(tab);

    TutorialAndCode(value);

    CreateSideBar("right","Meetups",value,LocateMeetups,[value,zip]);

    tab.on("click",(e)=>{
      console.log($(e.target).attr("data"));
      TabHandler($(e.target).attr("data"),GetInputValues().address);
    });

  }

}
