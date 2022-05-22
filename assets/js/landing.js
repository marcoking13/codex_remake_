var didPageRestyle = false;

// Intial Startup Of the Page Functions
const GetInputValues = () => {

  var inputAddress = $(".input-address");
  var inputTopic = $(".input-topic");

  if(inputTopic.val() && inputAddress.val()){

    var inputVal = {
      address: inputAddress.val(),
      topic: inputTopic.val()
    }

    return inputVal;
  }

  if(!inputTopic.val()){
    inputTopic.addClass("wrong_border");
    inputTopic.attr("placeholder","Please enter an address");

  }
  if(!inputAddress.val()){
    inputAddress.addClass("wrong_border");
    inputAddress.attr("placeholder","Please enter an address");
  }

}



const PageRestyle = () => {

  var title = $(".title");

  title.removeClass("title")
  title.addClass("upside-title");

  var navbar = $(".navbar");

  navbar.addClass("upside-navbar upside-nav-animation");

}
