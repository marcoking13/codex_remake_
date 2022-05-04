



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


const TutorialAndCode = (term) => {
  const api_key = "AIzaSyBV8DyidI_MUrySRFtaD2K1oWiNOyunuAU";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";
  const youtubeURL = youtubeEndpoint + "search?&q=" + term + '%20tutorial%20programming' + "&part=snippet&chart=mostPopular&videoCategoryId=27&type=video&relevanceLanguage=en&maxResults=11&key=" + api_key;

  $.ajax({
    url:youtubeURL,
  }).then((response)=>{
    console.log(response);

    var videos = response.items;

    const randomCounter = Math.floor(Math.random() * videos.length - 1);

    videoID = videos[randomCounter].id.videoId;
    console.log(videoID);

    AttachIFrame(videoID);
    AttachCodePen();


  });


}

const AttachCodePen = () => {

  const codependEndPoint = "//codepen.io/marcorulesk345/embed/RZvYVZ/?height=300&theme-id=31149&default-tab=html,result&embed-version=2&editable=true";
  const codepenElement = $("<iframe>");
  codepenElement.addClass("codepen_editor");
  codepenElement.attr("scrolling","no");
  codepenElement.attr("title","RZvYVZ");
  codepenElement.attr("src",codependEndPoint);
  codepenElement.attr("frameborder","no");
  codepenElement.attr("allowfullscreen","true");
  codepenElement.attr("height","300px");
  codepenElement.attr("allowtransparency","true");

  const videoContainer = $(".youtube_video_container");

  videoContainer.append(codepenElement);

}

const AttachIFrame = (id)=>{

  const embedLink = "https://www.youtube.com/embed/";

  var iFrameElement = $("<iframe>");
  iFrameElement.addClass("youtube_video");
  iFrameElement.attr("src",embedLink+id);

  console.log(embedLink+id);

  iFrameElement.attr("frameborder",0);
  iFrameElement.attr("id",id);
  const videoContainer = $(".youtube_video_container");

  videoContainer.append(iFrameElement);


}


const PageRestyle = () => {

  var title = $(".title");
  title.removeClass("title")
  title.addClass("upside-title");

  var navbar = $(".navbar");
  navbar.addClass("upside-navbar upside-nav-animation");

}



$(".submit-button").click((event)=>{

  PageRestyle();
  TutorialAndCode(GetInputValues().topic);


});
