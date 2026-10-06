$(function(){
  for(let i = 0; i < 4; i++){
    $('.glitch .text span').eq(0).clone().prependTo('.glitch .text');
  }
});