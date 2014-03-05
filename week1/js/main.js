var CLIENT_ID = '3c52889feb714456b62ba61fe7add54b';
var TAG = 'flytteesker';

function hideSpinner() {
  document.getElementsByClassName('icon-spinner')[0].classList.add('hidden');
}

function showPlay() {
  document.getElementsByClassName('icon-play')[0].classList.remove('hidden');
}

function parseAndRenderInstagramResponse(response) {
  addPhotosToDOM(response.data);
}

function addPhotosToDOM(photos) {
  var photosEl = document.getElementById('photos');
  
  for (var photoIdx in photos)
  {
    var photo = photos[photoIdx];
    
    var imgEl = document.createElement('img');
    imgEl.src = photo.images.low_resolution.url;
    photosEl.appendChild(imgEl);   
  }
  
  hideSpinner();
  showPlay();
}

function fetchInstagramPhotos(url) {

   var script = document.createElement('script');
   script.src = url;
   document.body.appendChild(script);
}

function fetchInstagramPhotosWithTag(tag, callbackFunction) {
  var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent/?count=100&client_id='+ CLIENT_ID + '&callback=' + callbackFunction;
  fetchInstagramPhotos(url);
}

function playSound() {
  console.log("play");
}

function pauseSound() {
  console.log("pause");
}

function togglePlayer() {
  document.getElementsByClassName('icon-play')[0].classList.toggle('hidden');
  document.getElementsByClassName('icon-pause')[0].classList.toggle('hidden');
  
  if(document.getElementsByClassName('icon-play')[0].classList.contains('hidden')) {
    playSound(); 
  } else {
    pauseSound();
  }
}

fetchInstagramPhotosWithTag(TAG, 'parseAndRenderInstagramResponse');
document.getElementById('player').onclick=togglePlayer;


