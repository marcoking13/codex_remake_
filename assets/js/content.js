

const AttachFeaturedArrows = () =>{

   CreateArrow("left",isQuizTabOpen,"Quizzes");
   CreateArrow("right",isMeetupTabOpen,"Meetups");

}


const CreateArrow = (side,isQuizArrow,text) => {

    const arrowContainer =  $("<div>");
    const arrowButton =  $("<img>");
    const arrowText = $("<p>");

    arrowText.addClass("side_bar_text");
    arrowText.text(text);
    arrowContainer.addClass(`arrow ${side}_arrow`);
    arrowButton.addClass(`sidebar_button sidebar_button_${side}`);
    arrowButton.attr("src","./assets/img/arrow.png");

    $("body").append(arrowContainer);

    $(arrowContainer).append(arrowButton);
    $(arrowContainer).append(arrowText);

    arrowContainer.on("click",(e)=>{

      ShowSidebar(side);

      if(isQuizArrow){

        isQuizTabOpen = true;

      }else{

        isMeetupTabOpen = true;

      }

    });

  }


const GeoLocation = async (zip) =>{

  var geolocationKey = "AIzaSyCJAQvR6R-V1xdtlCoXg3tvR4tuVTqD1iw";

  const geolocation = await $.get({url:"https://maps.googleapis.com/maps/api/geocode/json?address="+zip+"&key="+geolocationKey});

  return geolocation;

}

const LocateMeetups = async (topic,zip) =>{

  var eventKey = 'segqeo3y0quEC2OUIHHT1oUTEay_8AFgCBrgNyKI';

  var coords = await GeoLocation(zip);

  if(coords.results.length <= 0){

    return null;

  }else{

    var geo = coords.results[0].geometry.location;

    var lat = geo.lat;
    var lng = geo.lng;

    const meetups = await $.ajax({

      url:"https://api.predicthq.com/v1/events/?q="+topic +"&within=100km@"+lat+","+lng+"&catagory=programming&page=5&country=US&fields=next_event,time,group_photos&callback=?",
      headers: {
         'Authorization':'Bearer '+eventKey,
         'Accept':'application/json'
     },
      method:"GET"

    });

    if(meetups.results.length < 1 ){

      return null;

    }else{

      return meetups;

    }

  }

}


const AttachCodePen = (term) => {

  RemoveActive("codepen_container",term);

  const codependEndPoint = "//codepen.io/marcorulesk345/embed/RZvYVZ/?height=300&theme-id=31149&default-tab=html,result&embed-version=2&editable=true";

  const codepenElement = $("<iframe>");

  codepenElement.addClass("codepen_editor width-100 green-border-2px  height-100 content_collapse "+term);
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

  AddActive("codepen_container",term,"active_content_codepen");

}


const AttachIFrame = (id,value)=>{

  RemoveActive("youtube_video_container",value);

  const embedLink = "https://www.youtube.com/embed/";

  var iFrameElement = $("<iframe>");

  iFrameElement.addClass("youtube_video absolute width-100 no-padding no-margin content_collapse "+value);
  iFrameElement.attr("src",embedLink+id);
  iFrameElement.attr("data",value);
  iFrameElement.attr("frameborder",0);
  iFrameElement.attr("id",id);

  const videoContainer = $(".youtube_video_container");

  videoContainer.append(iFrameElement);

  AddActive("youtube_video_container",value);

}


const TutorialAndCode = (term) => {

  const api_key = "AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";
  const youtubeURL = youtubeEndpoint + "search?&q=" + term + '%20tutorial%20programming' + "&part=snippet&chart=mostPopular&videoCategoryId=27&type=video&relevanceLanguage=en&maxResults=11&key=" + api_key;

  $.ajax({
    url:youtubeURL,
  }).then((response)=>{

    var videos = response.items;

    const randomCounter = Math.floor(Math.random() * videos.length - 1);

    videoID = videos[randomCounter].id.videoId;

    AttachIFrame(videoID,term);

    AttachCodePen(term);

  });

}


const RemoveActiveContent = (value) => {

  $(".quiz-container").empty();

  RemoveActive("codepen_container",value,"active-container");
  RemoveActive("youtube_video_container",value,"active-container");

}

const AddActiveContent = (value) => {

  AddActive("codepen_container",value,"active-container");
  AddActive("youtube_video_container",value,"active-container");

}

const DeleteContent = (value) => {

  var tabContainer = $(".tabs-container");
  var youtubeContainer = $(".youtube_video_container");
  var codepenContainer = $(".codepen_container");
  var meetupSidebar = $(".side-container-right");

  DeleteElementLoop(tabContainer,value);
  DeleteElementLoop(youtubeContainer,value);
  DeleteElementLoop(codepenContainer,value);
  DeleteElementLoop(meetupSidebar,value);

}

const StopAllIFrames = () => {

  $(".youtube_video_container").children().each(function() {

    if($(this).prop("nodeName") == "IFRAME"){

        var src= $(this).attr('src');
        $(this).attr('src',src);

      }

  });

}
