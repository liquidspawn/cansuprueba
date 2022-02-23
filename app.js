require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );

app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'we print your dreams',
        titulo:'Cansuprint'
    });
  });



  app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'we print your dreams',
        titulo:'Cansuprint'
    });
  });


  app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre: 'we print your dreams',
        titulo:'Cansuprint'
    });
  });





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })