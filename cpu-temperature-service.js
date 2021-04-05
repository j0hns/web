var static = require('node-static');
var http = require('http');
var cpu_temperature = require('./cpu-temperature-module');

var file = new (static.Server)(__dirname);

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(3002);


// var temp_c = getCpuTemperature();

//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write("{\"cpu_temp_celsius\":" + temp_c + "}");
//     response.end();


io.sockets.on('connection', function (socket) {

    setInterval(function () {
        socket.emit('cpu_temp', cpu_temperature.getCpuTemperature());
    }, 1000);
});


process.on('SIGINT', function () { //on ctrl+c
    process.exit(); //exit completely
});