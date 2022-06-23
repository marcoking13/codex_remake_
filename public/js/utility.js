
var isQuizTabOpen = false;
var isMeetupTabOpen = false;


//
// const ReturnTomorrowDate =() =>{
//   var currentDate = new Date();
//   currentDate.setDate(currentDate.getDate() + 1);
//   console.log(currentDate);
//   return currentDate;
// }


// const DecodeCookie = () =>{
//
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//      let c = ca[i];
//      while (c.charAt(0) == ' ') {
//        c = c.substring(1);
//      }
//      if (c.indexOf(name) == 0) {
//     console.log( c.substring(name.length, c.length));
//      }
//  }
// }
//
// const SaveSideBarVariablesInCookie = () =>{
//   const d = new Date();
//  d.setTime(d.getTime() + (2*24*60*60*1000));
//  let expires = d.toUTCString();
//   document.cookie = `isMeeupTabOpen=${isMeetupTabOpen}; expires=${expires};path=/`;
//   console.log(document.cookie);
//   DecodeCookie();
// }



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
