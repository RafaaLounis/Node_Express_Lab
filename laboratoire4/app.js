const express = require('express');
const app = express();
app.set('view engine','ejs');


app.use('/public',express.static('public'));


const Routes = require('./Routes/Routes');

app.use('/Frian',Routes);
app.get('/',(req,res)=>{
    res.render('index')
});


const PORT = 3435;
app.listen(PORT,  ()=>{
    console.log('Afficher sur le Port 3435  !');
});