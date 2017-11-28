'use strict';

import * as Hapi from "hapi";

// Create a server with a host and port
const server = new Hapi.Server();

server.connection( { port: 3000, host: '0.0.0.0' } );

server.route({ method: 'GET', path: '/', handler: function (request, reply) { return reply('ok'); } });

server.route([
    { method: 'GET', path: '/1', handler: function (request, reply) { return reply('Super lord Edwin tztztztzs!!!'); } },
    { method: 'GET', path: '/2', handler: function (request, reply) { return reply('ok'); } }
]);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        //process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();