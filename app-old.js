const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: "Fernando",
        apellido: "Carranza",
        dni: 27362180,
        masculino: true,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
})

.listen(8080);
console.log("Escuchando el Puerto 8080");