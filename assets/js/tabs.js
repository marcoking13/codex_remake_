const AppendInitialTab = (value,zip) => {

    var searchtabContainer = $("#myTabs");

    searchtabContainer.addClass("visible");

    didPageRestyle = true;

    AppendTab(value,zip);

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
      RemoveActive("side-container-right",value);

      $(".search-tab").each(function(){
          $(this).removeClass("active-tab");
      });

      $('.search-tab').each(function() {
        k++;

        var data = $(this).attr("data");

        if(data == value){

          $(this).addClass("active-tab");
          AddActiveContent(value);
          AddActive("side-container-right",value);
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

const CheckTabOverload = () => {

  var tabsArr = $(".tabs-container").children();

  if(tabsArr.length >= 10){

    var warning = confirm("You have too many tabs! If you create another the first one will be deleted is that ok?");

    if(warning){
      var deletedData = $(tabsArr[0]).attr("data");

      DeleteContent(deletedData);

      return false;

    }
    else{

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
