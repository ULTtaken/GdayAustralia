window.onload=function(){
AOS.init();
var token = '3WTXCMVEEEVT5ZP3A3BB';
var links = 'https://www.eventbriteapi.com/v3/events/search/?token='+token+'&location.address=caulfield';
var headers = new Headers();
var requestOptions = { method: 'GET',
               headers: headers,
               mode: 'cors',
               cache: 'default' };

fetch(links,requestOptions)
.then(function(response) {
  return response.json();
})
.then(function(myBlob) {
   for(var i = 0; i < myBlob.events.length; i++){
   		console.log(myBlob.events[i]);
   }
});
}