const router = require('./socket.io.routes.js');

function setup(io){
	io.on('connection', (socket) => {
		console.log('socket.io > a new connection');
		socket.on('disconnect', () => console.log('socket.io > a client disconnected'));
	
		router(socket);
	});
}

module.exports = setup;
