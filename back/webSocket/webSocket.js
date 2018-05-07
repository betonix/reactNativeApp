
exports.assignWebsocket = function (websocket) {
	
	  websocket.on('connection', (socket) => {
		  
	  console.log('A client just joined on', socket.id);

	  socket.on('joinRoom', (data) => {
		// Save the message document in the `messages` collection.
		rooms[data] = ( typeof rooms[data] != 'undefined' && rooms[data] instanceof Array ) ? rooms[data] : []
		rooms[data].push({id:socket.id})
		socket.join("room-"+data);

	  });

	  socket.on('message', (data) => {
		// Save the message document in the `messages` collection.
		websocket.sockets.in('room-resta1').emit('message', websocket.sockets.adapter.rooms);
		
	  });

	  socket.on('disconnect', function() {

		socket.leave(socket.rooms);

	  });

	});
}