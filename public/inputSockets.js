      var socket = io();
    socket.on('chat', function(msg){
      $('#uploadStatus').append($('<li>').text(msg));
  });

$(document).ready(function(){
  /*$('#submit').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });*/
  $('#prdSubmit').click(function(){
    var JSONText = '';
    var prdID = $('#prdID').val();
    var prdName = $('#prdName').val();
    var prdDesc = $('#prdDesc').val();
    var prdFtr = $('#prdFtr').val();
    var prdPrice = $('#prdPrice').val();
    var prdImg = $('#prdImg').val();
    
    var JSONObject;
    
    JSONText = '{ "prdID":"' + prdID + 
    '" , "prdName":"' + prdName + 
    '" , "prdDesc":"' + prdDesc + 
    '" , "prdFtr":"' + prdFtr + 
    '" , "prdPrice":"' + prdPrice + 
    '" , "prdImg":"' + prdImg + '"}';
     $('#uploadStatus').append($('<li>').text(JSONText));
     
     JSONObject = JSON.parse(JSONText);

    //$('#uploadStatus').append($('<li>').text(JSONText));

     socket.emit('submitProduct', JSONObject);
    //clear();
  });
});

  
  function clear()
  {
    $('#prdID').val('');
    $('#prdName').val('');
    $('#prdDesc').val('');
    $('#prdFtr').val('');
    $('#prdPrice').val('$0.00');
    $('#prdImg').val('');
  }
  