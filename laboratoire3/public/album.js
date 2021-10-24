$(function() {
    //exo1
    $('img').hide();
    $('img').show(1000);
    

//exo2
$("#im1").click(function(){
                
    $(this).hide();
    });
//exo3
$(".choix").hover(function(){
                
        $(this).css('opacity','1')
        },
      function(){
                
        $(this).css('opacity','0.5')             
     
    });           
     

// exo4
    
$("#im2").click(function(){
    var nameG = $(this).attr('src'); 
    var nameP = $('#im1').attr('src');             

    $("#im1").hide();
    $('#im1').attr('src', nameG);
    $('#im2').attr('src', nameP);
    $("#im1").fadeIn(1000,'swing');
    });
    // exo 5
    
    $("#im3").on({
  
      mouseenter:function(){
        
            $("#im1").animate({
            
            height: '150px',
            width: '150px',
                });   
            },

        click : function(){
              var nameG = $(this).attr('src'); 
              var nameP = $('#im1').attr('src');             
          
              $("#im1").hide();
              $('#im1').attr('src', nameG);
              $('#im3').attr('src', nameP);
              $("#im1").fadeIn(500,'swing');
              $("#im1").animate({
                      
                      height: '400px',
                      width: '600px',
                    });   
                 
                } 
    });
    
        // exo 6    
                
$("#bouton").click(function(){
    var tampon = $('#im1').attr('src'); 
    $('#im1').attr('src', $('#im2').attr('src'));
    $('#im2').attr('src', $('#im3').attr('src'));
    $('#im3').attr('src', $('#im4').attr('src'));
    $('#im4').attr('src',tampon);
        
    });    

    // exo7
    
       $("#im4").click(function(){
       
       $(".choix").animate({left: '197px'});
               
       $("#im1").hide("slow", function(){
            var nameG = $('#im1').attr('src'); 
            var nameP = $('#im4').attr('src');  
            $('#im4').attr('src', nameG);
            $('#im1').attr('src', nameP);
        
            });  
        
       $("#im1").show ("slow", function(){
           $(".choix").animate({left: '0px'});
        });
    });

   
}); 