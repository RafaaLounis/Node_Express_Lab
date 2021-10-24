const express =require('express');//appeller expresse
const app = express();//executer express

app.set('views','./views');
app.set('view engine','ejs');
app.use('/public',express.static('public'));


app.get('/', (req , res)=>{
    res.render('index.ejs');
    
})
app.get('/accueil', (req , res)=>{
    res.render('accueil.ejs');
    
})


const PORT = 3000;
app.listen(PORT,  ()=>{
    console.log('Afficher sur le Port 3000!');
});