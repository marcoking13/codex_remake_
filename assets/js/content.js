
const AttachFeaturedArrows = () => {

  const quizArrow = $("<div>");
  const meetupArrow = $("<div>");
  const quizButton = $("<img>");
  const meetupButton = $("<img>");
  const meetupText = $("<p>");
  const quizText= $("<p>");

  quizText.addClass("side_bar_text");
  meetupText.addClass("side_bar_text");

  quizText.text("Quizzes");
  meetupText.text("Events Near You");

  quizButton.addClass("sidebar_button sidebar_button_left");
  quizButton.attr("src","./assets/img/arrow.png");

  meetupButton.addClass("sidebar_button sidebar_button_right");
  meetupButton.attr("src","./assets/img/arrow.png");

  quizArrow.addClass("arrow left_arrow");
  meetupArrow.addClass("arrow right_arrow");

  quizArrow.on("click",(e)=>{
    ShowSidebar("side-container-left");
  });

  meetupArrow.on("click",(e)=>{
    ShowSidebar("side-container-right");
  });


  $("body").append(quizArrow);
  $("body").append(meetupArrow);

  $(quizArrow).append(quizButton);
  $(meetupArrow).append(meetupButton);
  $(quizArrow).append(quizText);
  $(meetupArrow).append(meetupText);

}


const LocateMeetups = (topic,zip) =>{

  var lat;
  var lng;

  var eventKey = 'y-wEZDmlum8o7KR0ebPVlXKMi0UGd5ecW4lhGhua';
  var geolocationKey = "AIzaSyCJAQvR6R-V1xdtlCoXg3tvR4tuVTqD1iw";

  $.get({url:"https://maps.googleapis.com/maps/api/geocode/json?address="+zip+"&key="+geolocationKey}).then((res)=>{

  var coords = res.results[0].geometry.location;
  var lat = coords.lat;
  var lng = coords.lng;

  $.ajax({
    url:"https://api.predicthq.com/v1/events/?q="+topic +"&within=100km@"+lat+","+lng+"&catagory=programming&page=5&country=US&fields=next_event,time,group_photos&callback=?",
    headers: {
       'Authorization':'Bearer '+eventKey,
       'Accept':'application/json'
   },
    method:"GET"

  }).done((res,err)=>{
       var sidebar = $(".sidebar-right");

    });

 });

}


const AttachCodePen = (term) => {

  RemoveActive("codepen_container",term);

  const codependEndPoint = "//codepen.io/marcorulesk345/embed/RZvYVZ/?height=300&theme-id=31149&default-tab=html,result&embed-version=2&editable=true";

  const codepenElement = $("<iframe>");

  codepenElement.addClass("codepen_editor content_collapse "+term);
  codepenElement.attr("data",term);
  codepenElement.attr("scrolling","no");
  codepenElement.attr("title","RZvYVZ");
  codepenElement.attr("src",codependEndPoint);
  codepenElement.attr("frameborder","no");
  codepenElement.attr("allowfullscreen","true");
  codepenElement.attr("height","300px");
  codepenElement.attr("allowtransparency","true");

  const codepenContainer = $(".codepen_container");

  codepenContainer.append(codepenElement);

  AddActive("codepen_container",term);

}


const AttachIFrame = (id,value)=>{

  RemoveActive("youtube_video_container",value);

  const embedLink = "https://www.youtube.com/embed/";
  var iFrameElement = $("<iframe>");

  iFrameElement.addClass("youtube_video content_collapse "+value);
  iFrameElement.attr("src",embedLink+id);
  iFrameElement.attr("data",value);
  iFrameElement.attr("frameborder",0);
  iFrameElement.attr("id",id);

  const videoContainer = $(".youtube_video_container");
  videoContainer.append(iFrameElement);

  AddActive("youtube_video_container",value);

}


const TutorialAndCode = (term) => {

  const api_key = "AIzaSyBB2z7cwnnSHU4tkRfAYtmuMWFTmUJ_Wn0";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";
  const youtubeURL = youtubeEndpoint + "search?&q=" + term + '%20tutorial%20programming' + "&part=snippet&chart=mostPopular&videoCategoryId=27&type=video&relevanceLanguage=en&maxResults=11&key=" + api_key;

  // $.ajax({
  //   url:youtubeURL,
  // }).then((response)=>{
  //
  //   var videos = response.items;
  //
  //   const randomCounter = Math.floor(Math.random() * videos.length - 1);
  //
  //   videoID = videos[randomCounter].id.videoId;
  //
  //   AttachIFrame(videoID,term);
  //
  // });

    AttachCodePen(term);

}
