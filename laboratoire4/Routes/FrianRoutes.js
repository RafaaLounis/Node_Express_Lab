const express = require('express');
const router = express.Router();


router.get('/accueil',(req,res)=>{
    res.render('accueil',{userName: 'rafaa', pageTitle:'Accueil'});
});

router.get('/accueil/:nom',(req,res)=>{
    const nom = req.params.nom; //recuperation du nom
    res.render('accueil.ejs',{userName: nom, pageTitle: "Accueil"});
});

router.get('/chocolat/',(req,res)=>{
     //recuperation du nom
    res.render('chocolat',{choco:listechoco, pageTitle: "chocolat"});
});


module.exports = router;

let listechoco = [{brand : 'kitkat',price:10.45,compagnie:'cadbury'},
                        {brand:'Mars',price:10.45,compagnie:'Hershey'},
                        {brand:'Coffe Crisp',price:10.45,compagnie:'Laura Secord'},
                        {brand:'wunderbar',price:10.45,compagnie:'General Food'},
                        {brand:'Skittles',price:10.45,compagnie:'Canadian chocolate'}];