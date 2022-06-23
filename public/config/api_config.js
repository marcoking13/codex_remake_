

const geoEndpoint = "https://maps.googleapis.com";
const geolocationKey = "AIzaSyCJAQvR6R-V1xdtlCoXg3tvR4tuVTqD1iw"
var geoExtension = "/maps/api/geocode/json?key="+geolocationKey;
const geoURL = geoEndpoint + geoExtension;

var eventKey = 'we7A-sVhxNrg2ivLOO080H5L2Ek4c1JNHDKNeJ0K';
const eventExtension = "&page=5&country=US&fields=next_event,time,group_photos&callback=?";
const eventEndpoint = "https://api.predicthq.com/v1/events/";
const eventURL = eventEndpoint+"key="+eventKey+"&"+eventExtension;


const youtubeKey = "AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE";
const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";

const youtubeExtension = "search?part=snippet&chart=mostPopular&videoCategoryId=27&type=video&relevanceLanguage=en&maxResults=11&key=" + youtubeKey;
const youtubeURL = youtubeEndpoint + youtubeExtension;
