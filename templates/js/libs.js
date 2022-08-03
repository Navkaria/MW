$('.start-game a').hover(function() {
   $('.start-game-bg').toggleClass('start-game-bg-hover');
   return false;
});
$(document).on("click", ".full-spoiler-title", function() {
   $('#spoiler-' + this.id).slideToggle(300);
   if ($(this).find('img').attr('src').search('spoiler.png') != -1)
       $(this).find('img').attr('src', '/templates/img/spoiler1.png');
   else
       $(this).find('img').attr('src', '/templates/img/spoiler.png');
   return false;
});
