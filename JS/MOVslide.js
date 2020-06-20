/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
  // Activate Carousel
  $("#slideIndex").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#slideIndex").carousel(0);
   
  });
  $(".item2").click(function(){
    $("#slideIndex").carousel(1);
  });
  $(".item3").click(function(){
    $("#slideIndex").carousel(2);
  });

    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#slideIndex").carousel("prev");
     
  });
  $(".right").click(function(){
    $("#slideIndex").carousel("next");
  });

  
  });