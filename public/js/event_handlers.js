

$(".content-container").click((e)=>{

        HideSidebar("right",false);
        HideSidebar("left",true);


});


$(".submit-button").click((event)=>{
   event.preventDefault();

  if(GetInputValues().topic && GetInputValues().address){

    if(!didPageRestyle){

      CreateQuizSideBar();
      PageRestyle();

      AppendInitialTab(GetInputValues().topic,GetInputValues().address);
      AttachFeaturedArrows();

      didPageRestyle = true;

    }
    else{

      TabHandler(GetInputValues().topic,GetInputValues().address);

    }

  }

});
