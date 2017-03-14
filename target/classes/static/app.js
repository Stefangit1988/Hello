var stompClient = null;
var nickname  = null;

$('#do-chat').submit(function(evt) {
			evt.preventDefault();
			sendMessage()
		});

function sendMessage() {
       if(!$message.val()==""){
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $message.val(), 'sender': nickname.val()}));}
     $("#message").val("");
    }


function enterRoom(){
    connect();
    nickname = $('#nickname');
    $('.chat-signin').hide();
    $('.chat-wrapper').show();
}

function showGreeting(message, sender, date) {
var $messageLine = $('<tr><td class="received">' + date
				+ '</td><td class="user label label-info">' + sender
				+ '</td><td class="message badge">' + message
				+ '</td></tr>');
    $chatWindow.append($messageLine);
}

function leaveRoom() {
        disconnect();
        $chatWindow.empty()
		$('.chat-wrapper').hide();
		$('.chat-signin').show();
	}

function connect(){
    var socket = new SockJS('/gs-guide-websocket');
       stompClient = Stomp.over(socket);
       stompClient.connect({}, function (frame) {
           console.log('Connected: ' + frame);
           stompClient.subscribe('/topic/greetings', function (greeting) {
               showGreeting(JSON.parse(greeting.body).content, JSON.parse(greeting.body).sender,JSON.parse(greeting.body).date);
           });
       });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $chatWindow = $('#response');
    $message = $('#message');
    $("#greetings").html("");
    $('.chat-wrapper').hide();
    $( "#enterRoom" ).click(function() {enterRoom(); });
    $('#leave-room').click(function(){leaveRoom();  });
    $( "#do-chat" ).submit(function() {sendMessage()})
});