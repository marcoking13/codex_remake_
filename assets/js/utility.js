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

      $(this).removeClass("invisible negative-max-index");
      $(this).addClass("visible max-index");
    

      return false;

    }

  });

}

const DeleteElementLoop = (container,value) => {

    container.children().each(function(){

      if($(this).attr("data") == value){

        $(this).remove();

      }

    });

}
