$( window ).on( 'scroll', function() {
  if ( 50 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    $( '.topheader' ).addClass( 'm_fixed' );
  } else {
    $( '.topheader' ).removeClass( 'm_fixed' );
  }
});

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
