
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

setTimeout( function(){$('.first').show();} , 3500);
setTimeout( function(){$('#aboutMe').show();} , 3800);
setTimeout( function(){$('#skills').show();} , 3800);
setTimeout( function(){$('.homeImg').hide();} , 3500);
