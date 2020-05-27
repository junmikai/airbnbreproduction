$(function() {
  $( '.searchheader' ).hide();
});

//トップから50pxスクロールするとヘッダーが固定される
$( window ).on( 'scroll', function() {
  if ( 50 < jQuery( this ).scrollTop() ) { 
    $( '.topheader' ).addClass( 'm_fixed' );
  } else {
    $( '.topheader' ).removeClass( 'm_fixed' );
  }
});

$( window ).on( 'scroll', function() {
  if ( 75 < jQuery( this ).scrollTop() ) { 
    $( '.searchform' ).addClass( 'm_fixed' );
  } else {
    $( '.searchform' ).removeClass( 'm_fixed' );
  }
});

//トップから210pxスクロールするとヘッダーに検索フォームが追加される
$( window ).on( 'scroll', function() {
  if ( 210 < jQuery( this ).scrollTop() ) { 
    $( '.searchheader' ).show();
    $('.host').hide();
  } else {
    $( '.searchheader' ).hide();
    $('.host').show();
  }
});

// フッターを最下層までスクロールした時、非表示にする
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


  $( document ).on( 'scroll', function() {
    if ( 240 > jQuery( this ).scrollTop() ) { 
      $( '.fixedfooter' ).addClass( 'black' );
    } else {
      $( '.fixedfooter' ).removeClass( 'black' );
    }
  });