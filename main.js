// ヘッダー
$( window ).on( 'scroll', function() {
  if ( 50 < jQuery( this ).scrollTop() ) { 
    $( '.topheader' ).addClass( 'm_fixed' );
  } else {
    $( '.topheader' ).removeClass( 'm_fixed' );
  }
});

// ヘッダー
$( window ).on( 'scroll', function() {
  if ( 210 < jQuery( this ).scrollTop() ) { 
    $( '.searchheader' ).show();
    $('.host').hide();
  } else {
    $( '.searchheader' ).hide();
    $('.host').show();
  }
});

// フッターを最下層までスクロールした時非表示にする
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
