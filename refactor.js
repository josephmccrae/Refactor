$(document).ready(function() {
    
    //prompt for number//
    var num = prompt("Please enter a number from 1 to 100", '');     
    var g = +num;
     
    //count through and append// 
    var counter = function(g) {
    if(g <=100 && g >=1 && g % 1 == 0) {  
      for (var i = 1; i <= g; i++) {
          if (i % 15 == 0) {
            $('#main').append('<span id="fizzBuzz" class="numbers"><p class="numTxt">FIZZ BUZZ</p></span>');
          } else if (i % 3 == 0) {
            $('#main').append('<span id="buzz" class="numbers"><p class="numTxt">Buzz</p></span>');
          } else if (i % 5 == 0) {
            $('#main').append('<span id="fizz" class="numbers"><p class="numTxt">Fizz</p></span>');
          } else {
            $('#main').append('<span id="reg" class="numbers"><p class="numTxt">' + i + "</p></span>");
          } 
        $('.numbers').hide();  
        }
      } else {
        alert("Please enter a WHOLE between 1 and 100"); 
      }
    };  
     
    //call count and append function//
    counter(g);
    
    //fade in number tiles//
    $(function() {
      setInterval(function () {
      $('.numbers').each(function (i) {

      $(this).delay((i++) * 50).fadeTo(50, 1); 
      });
        }, 100);
    }); 
    
    var refresh = function() {
        $(document).keypress(function (enter) {
            if (enter.keyCode == 13) {        
            location.reload();
        } 
      })
    }
   
    refresh();

 });


                     


        

    
  
