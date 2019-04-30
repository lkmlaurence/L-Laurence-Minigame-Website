

jQuery(document).ready(function(){
    var score=0;
    
    function game_over(){
        jQuery('.mole').animate({'top':'100%'},100);
        jQuery('.mole').animate({'top':'100%'},100);
        jQuery('.score').html('GAME OVER');
        jQuery('.score').append('<div class="try_again">Reload the page to try again!</div>');
    }
    
    function start(){
        score=0;
        jQuery('.score').html('Score: ' + score);
        jQuery('.mole').animate({'top':'0%'},5000,function(){
            game_over();
            jQuery('try_again').click(function(){start();});
    });
    }
    
    jQuery('.mole').hover(function(){
        
        jQuery(this).css('background-image','url(hurt.bmp)');
        jQuery(this).stop().animate({'top':'100%'},300,function(){
            
            score++;
            jQuery('.score').html('Score: ' + score);
            jQuery(this).css('background-image','url(tenor.png)');
            jQuery(this).animate({'top':'0%'},5000);
        }); 
        
    });
start();                    
});