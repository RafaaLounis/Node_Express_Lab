const express = require('express');
const router = express.Router();

var mysql = require('mysql');// on na pas besoin de le deplacer dans rout 
var connexion= mysql.createConnection({// on na pas besoin de le deplacer dans rout 
    host:"localhost",
    user:"root",
    password:"",
    database:"ecole"

});


obj={};

router.get('/ecole',function(req,res){

    connexion.query("SELECT * FROM etudiant" , function (err,result){
        if (err) {
            throw err;}
            else{
                obj={print: result};
                console.log(obj)
                res.render('ViewsSQL',obj);
            }

    } );
});
// router.get('/',(req,res)=>{
//     res.render('index')
// });

module.exports= router; 