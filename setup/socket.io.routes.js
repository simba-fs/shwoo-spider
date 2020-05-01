function router(socket){
	socket.on('test', (msg) => {
		console.log('socket.io.router > ping', msg);
		socket.emit('pong');
	});
}

module.exports = router; 
