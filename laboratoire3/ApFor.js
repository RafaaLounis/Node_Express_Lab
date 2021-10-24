const express =require('express');
const app = express();

app.set('views','./views');
app.set('view engine','ejs');
app.use('/public',express.static('public'));


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/siteRafaa/',(req,res)=>{
    res.render('siteRafaa');
});
app.get('/siteboostrap1/',(req,res)=>{
    res.render('siteboostrap1');
});
app.get('/siteboostrap2/',(req,res)=>{
    res.render('siteboostrap2');
});
app.get('/album1/',(req,res)=>{
    res.render('album1');
});
app.get('/Oeuvre/',(req,res)=>{
    res.render('Oeuvre');
});
app.get('/SiteRafaa/',(req,res)=>{
    res.render('SiteRafaa');
});
app.get('/acceuil1/',(req,res)=>{
    res.render('acceuil1');
});



const PORT = 3435;
app.listen(PORT,  ()=>{
    console.log('Afficher sur le Port 3435!');
});