/*$(document).ready(function(){

    $(".menuItem").click(function(){
        var mp = $(this);
        var position = mp.position();
        var color = mp.attr("color");
        
        $(".desplacer").css({
            "background":color
        }).animate({
            left:position.left+ "px"
        })
    });
});*/


const ball = document.querySelector('.desplacer');
const nav = document.querySelector('item');
const home1 = document.querySelector('menuItem1');
const home2 = document.querySelector('menuItem2');
const home3 = document.querySelector('menuItem3');
const home4 = document.querySelector('menuItem4');



function item(n) {
        if(n == 0 + 'px') {
            
            
            let t = n;
            ball.style.left = 0 +'px';
           
            
           
            
        }
        if (n == 100 + 'px') {
            
            
            let t = n;
            ball.style.left = 100 +'px';
         
           
           
            
        }
        if (n == 200 + 'px') {
            
            ball.style.left = 200+'px';
           
           
            

        }
        if (n == 300 + 'px') {
            
            ball.style.left = 300+'px';
            
           
            
        }
    }