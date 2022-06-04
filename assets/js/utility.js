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

const DeleteElementLoop = (container,value) => {

    container.children().each(function(){

      if($(this).attr("data") == value){

        $(this).remove();

      }

    });

}
