
var didShowArrows = false;
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


const AttachFeaturedArrows = () => {

  const quizArrow = $("<div>");
  const meetupArrow = $("<div>");
  const quizButton = $("<img>");
  const meetupButton = $("<img>");
  const meetupText = $("<p>");
  const quizText= $("<p>");

  didShowArrows = true;

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
    ActiveSideBar("sidebar-left","Quizzes");
  });

  meetupArrow.on("click",(e)=>{
    ActiveSideBar("sidebar-right","Meetups");
  });


  $("body").append(quizArrow);
  $("body").append(meetupArrow);

  $(quizArrow).append(quizButton);
  $(meetupArrow).append(meetupButton);
  $(quizArrow).append(quizText);
  $(meetupArrow).append(meetupText);

}


const ActiveSideBar = (className, heading) =>{
  var sidebar = $("."+className);
  sidebar.addClass("active-sidebar");

  if($(sidebar).find('.sidebar-container-heading').length == 0){

    var headingContainer = $("<div>").addClass("sidebar-container-heading");

    var headingText = $("<p>").addClass("sidebar-heading");
    headingText.text(heading);

    headingContainer.append(headingText);
    sidebar.append(headingContainer);

  }

}


const PageRestyle = () => {

  var title = $(".title");
  title.removeClass("title")
  title.addClass("upside-title");

  var navbar = $(".navbar");
  navbar.addClass("upside-navbar upside-nav-animation");

}


// -------------------------------------Tab Functions --------------------------

const AppendInitialTab = (value,id) => {

    var searchtabContainer = $("#myTabs");
    searchtabContainer.addClass("visible");

    didPageRestyle = true;

    AppendTab(value);

}


const TabHandler = (value) =>{

      var k =0;

      RemoveActiveContainer("codepen_container",value);
      RemoveActiveContainer("youtube_video_container",value);

      $(".search-tab").each(function(){
          $(this).removeClass("active");
      });

      $('.search-tab').each(function() {
        k++;

        var data = $(this).attr("data");

        if(data == value){
          $(this).addClass("active");
          AddActiveContainer("youtube_video_container",value);
          AddActiveContainer("codepen_container",value);
          return false;

        }else if(k >= $(".search-tab").length){
          AppendTab(value);
        }

    });

}


const RemoveActiveContainer = (container,value)=>{

  $("."+container).children().each(function(){

    if(value !== $(this).attr("data")){
        $(this).removeClass("active-container");
    }

  });

}


const AddActiveContainer = (container,value)=>{

  $("."+container).children().each(function(){

    if(value == $(this).attr("data")){
        console.log($(this));
      $(this).addClass("active-container");
      return false;
    }

  });

}

const AppendTab = (value,id)=>{
  var tab = $("<div>").addClass("col-1 active search-tab");
  tab.attr("data",value);
  tab.text(value);

  tab.on("click",(e)=>{
    TabHandler($(e.target).attr("data"));
  });

  $("#myTabs").append(tab);

  TutorialAndCode(value);

}


//---------------------------------------API Functions ------------------------------------

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

  RemoveActiveContainer("codepen_container",term);

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
  AddActiveContainer("codepen_container",term);

}


const AttachIFrame = (id,value)=>{

  RemoveActiveContainer("youtube_video_container",value);

  const embedLink = "https://www.youtube.com/embed/";

  var iFrameElement = $("<iframe>");
  iFrameElement.addClass("youtube_video content_collapse "+value);
  iFrameElement.attr("src",embedLink+id);
  iFrameElement.attr("data",value);
  iFrameElement.attr("frameborder",0);
  iFrameElement.attr("id",id);

  const videoContainer = $(".youtube_video_container");
  videoContainer.append(iFrameElement);

  AddActiveContainer("youtube_video_container",value);

}


const TutorialAndCode = (term) => {


  const api_key = "AIzaSyDWVGrLs5wYNVBqCvlqM2IBmkr9Xs7ZYVs";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";
  const youtubeURL = youtubeEndpoint + "search?&q=" + term + '%20tutorial%20programming' + "&part=snippet&chart=mostPopular&videoCategoryId=27&type=video&relevanceLanguage=en&maxResults=11&key=" + api_key;

  $.ajax({
    url:youtubeURL,
  }).then((response)=>{

    var videos = response.items;

    const randomCounter = Math.floor(Math.random() * videos.length - 1);

    videoID = videos[randomCounter].id.videoId;

    AttachIFrame(videoID,term);

  });

    AttachCodePen(term);

}


//-------------------------------------Event Handler Functions------------------------------------

$(".content-container").click((e)=>{
  var sidebarRight = $(".sidebar-right");

  if(sidebarRight.hasClass("active-sidebar")){
    sidebarRight.removeClass("active-sidebar");
    sidebarRight.addClass("nonactive-sidebar-transition");
  }

  var sidebarLeft= $(".sidebar-left");

  if(sidebarLeft.hasClass("active-sidebar")){
    sidebarLeft.removeClass("active-sidebar");
    sidebarLeft.addClass("nonactive-sidebar-transition");
 }

  if($('.sidebar').find('.sidebar-container-heading').length !== 0){
    var heading = $(".sidebar-container-heading");
    heading.empty();
    heading.remove();
  }

});


$(".submit-button").click((event)=>{

  if(!didPageRestyle){
    PageRestyle();
    AppendInitialTab(GetInputValues().topic);
    AttachFeaturedArrows();
    didPageRestyle = true;
  }else{
    TabHandler(GetInputValues().topic);
  }

});


$(".sidebar_button_left").click((event)=>{

  var sidebarLeft = $(".sidebar-left");
  sidebarLeft.addClass("active-sidebar");

});
