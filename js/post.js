$(function(){
  $('img').each(function(e){
    var src = $(e).attr('src');
    $(e).hover(function(){
      $(this).attr('src', src.replace('.gif', '_anim.gif'));
    }, function(){
      $(this).attr('src', src);
    });
  });
});