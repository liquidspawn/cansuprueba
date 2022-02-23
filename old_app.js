const http = require('http');



http.createServer(( req, res ) => {
    res.write('hola perras');
    res.end();


})


.listen( 8081 );

console.log( 'escuachar el puerto ',8081 );
