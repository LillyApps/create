var CLIENT_ID = '3c52889feb714456b62ba61fe7add54b';

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

fetchInstagramPhotosWithTag('flytteesker', 'parseAndRenderInstagramResponse');