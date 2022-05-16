



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

  $(".youtube_video_container").empty();
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




  });


}

const AttachFeaturedArrows = () => {
  const quizArrow = $("<div>");
  const meetupArrow = $("<div>");
  const quizButton = $("<img>");
  const meetupButton = $("<img>");
  const meetupText = $("<p>");
  const quizText= $("<p>");


  meetupButton.addClass("sidebar_button sidebar_button_right");
  quizText.addClass("side_bar_text");
  meetupText.addClass("side_bar_text");
  quizText.text("Quizzes");
  meetupText.text("Events Near You");
  quizButton.addClass("sidebar_button sidebar_button_left");
  quizButton.attr("src","./assets/img/arrow.png");
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

})



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


const AttachCodePen = (term) => {

  const codependEndPoint = "//codepen.io/marcorulesk345/embed/RZvYVZ/?height=300&theme-id=31149&default-tab=html,result&embed-version=2&editable=true";

  const codepenElement = $("<iframe>");
  codepenElement.addClass("codepen_editor");
  codepenElement.attr("data",term)
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
  $(".youtube_video").addClass("collapse");

  var iFrameElement = $("<iframe>");
  iFrameElement.addClass("youtube_video");
  iFrameElement.attr("src",embedLink+id);
  iFrameElement.attr("data",id);
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

function AppendTab(value){
  var tab = $("<div>").addClass("col-1 active search-tab");
  tab.attr("data",value);

  tab.on("click",(e)=>{

    $('.search-tab').each(function() {
        $(this).removeClass("active");

    });

    $(e.target).addClass("active");
    TutorialAndCode(value);

  });

  tab.text(value);
  $("#myTabs").append(tab);
}


const MakeSearchTabsVisible = (value) =>{

  var searchtabContainer = $("#myTabs");
    var k =0;


  if(searchtabContainer.children().length <= 0){
      searchtabContainer.addClass("visible");
      AppendTab(value);
    }
    else{

      $('.search-tab').each(function() {
        $(this).removeClass("active");

        k++;
        var data = $(this).attr("data");

        if(data == value){
          $(this).addClass("active");
          return false;
        }else if(k >= searchtabContainer.children().length){
          AppendTab(value);

        }

    });
}


}

$(".submit-button").click((event)=>{

  PageRestyle();
  MakeSearchTabsVisible(GetInputValues().topic);
  AttachFeaturedArrows();
  TutorialAndCode(GetInputValues().topic);
  LocateMeetups(GetInputValues().topic);

});


$(".sidebar_button_left").click((event)=>{

  var sidebarLeft = $(".sidebar-left");
  sidebarLeft.addClass("active-sidebar");

});












const LocateMeetups = (topic) =>{
  var lat;
  var lng;
  var eventKey = 'Uy_K5Ae8J84pL3MdPRJKrKMmQ-SmtkYWXZhIta4U';
  var geolocationKey = "AIzaSyCJAQvR6R-V1xdtlCoXg3tvR4tuVTqD1iw";
$.get({url:"https://maps.googleapis.com/maps/api/geocode/json?address="+zip+"&key="+geolocationKey}).then((res)=>{

  var coords = res.results[0].geometry.location;
  var lat = coords.lat;
  var lng = coords.lng;
  console.log(lat,lng);

  $.ajax({
    url:"https://api.predicthq.com/v1/events/?q="+topic +"&within=100km@"+lat+","+lng+"&catagory=programming&page=5&country=US&fields=next_event,time,group_photos&callback=?",
    headers: {
       'Authorization':'Bearer '+eventKey,
       'Accept':'application/json'
   },
    method:"GET"

  }).done((res)=>{
      console.log("Go");
      console.log(res);

    });
}
