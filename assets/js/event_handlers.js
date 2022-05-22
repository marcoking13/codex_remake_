
$(".content-container").click((e)=>{
   HideSidebars();
});


$(".submit-button").click((event)=>{

  if(GetInputValues().topic && GetInputValues().address){

    if(!didPageRestyle){

      PageRestyle();
      AppendInitialTab(GetInputValues().topic);
      AttachFeaturedArrows();
      
      didPageRestyle = true;

    }
    else{
      TabHandler(GetInputValues().topic);
    }

  }

});
