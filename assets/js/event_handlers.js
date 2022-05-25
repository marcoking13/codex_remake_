
$(".content-container").click((e)=>{
   HideSidebars();
});


$(".submit-button").click((event)=>{

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
