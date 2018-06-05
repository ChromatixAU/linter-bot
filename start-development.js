require( 'babel-polyfill' );
require( 'dotenv' ).config();

const fs = require('fs')
const path = require( 'path' );

const mainPlugin = require( './src' );

const cert = fs.readFileSync( 'development.private-key.pem', 'utf8' );

process.env['PATH'] = process.env['PATH'] + ':' + path.join( __dirname, 'bin' );

// Probot setup
const createProbot = require( 'probot' );
const probot = createProbot( {
	id: 8936,
	secret: 'development',
	cert: cert,
	port: process.env.PORT || 5757,
	webhookProxy: 'https://smee.io/rpFoxbfDjkw5Srji',
} );

probot.load( mainPlugin );
probot.start();
