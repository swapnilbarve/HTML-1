console.log('working');

$(document).ready(function(){
  $('button').dblclick(function(){
    $('p').toggle(1000);
  });
});