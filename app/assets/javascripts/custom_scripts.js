$(document).ready(function(){
  setTimeout(function(){
    $('#notice-wrapper').fadeOut("slow", function() {
      $(this).remove();
    })
  }, 2500);
});

var tedmetrics = {};
tedmetrics.report = function(eventName){
  var event = {event: { name: eventName }};
  var request = new XMLHttpRequest();
  request.open("POST", "http://tedmetrics.herokuapp.com/api/events", true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(event));
};
