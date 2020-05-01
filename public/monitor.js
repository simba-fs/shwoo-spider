const socket = io();

socket.on('pong', () => console.log('Pong !!'));
