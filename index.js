// import json-server
const jsonServer = require('json-server')

// create a server for media player app
const mediaPlayerServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Returns Middlewares used by JSON server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use middleware and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

// to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log("Media Player Server Started...");
})