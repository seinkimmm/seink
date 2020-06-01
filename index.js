
// var div = $("#aboutMe");
// var home = $("#home");
//
//   var pos = div.position();
//   var homePos = home.position();
//
//   $(window).scroll(function() {
//     var windowpos = $(window).scrollTop();
//     if (windowpos > pos.top-300) {
//       div.show();
//
//     } else {
//        div.addClass("BeforeScroll");
//      }
//     //   // div.removeClass("AfterScroll");
//     // }<i class="fas fa-folder-open"></i>
//   });
$('button').click(function(){
  $(this).find("i").toggleClass("fa-folder-open");
});
setTimeout( function(){$('.homeImg').hide();} , 3500);
setTimeout( function(){$('.topContainer').show();} , 3500);
setTimeout( function(){$('#contact').show();} , 3800);
setTimeout( function(){$('#mid').show();} , 3800);
