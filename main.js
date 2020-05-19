// メニューヘッダーを最下層までスクロールした時非表示にする

$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); 
  var winh = $(window).innerHeight(); 
  var bottom = doch - winh; 
  if (bottom <= $(window).scrollTop()) {
    $(".hidingfooter").slideUp();
  }else {
    $('.hidingfooter').slideDown();
  }
  });
