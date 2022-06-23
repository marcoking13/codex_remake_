var didPageRestyle = false;

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

  title.removeClass("title  text-center cursive-font margin-top-10 width-100")
  title.addClass("upside-title absolute light-green-color cursive-font z-99");

  var navbar = $(".navbar");

  navbar.addClass("upside-navbar upside-nav-animation");

}
