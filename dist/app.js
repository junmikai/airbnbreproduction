$(function() {
  $( '.search-header' ).hide();
});

//トップから50pxスクロールするとヘッダーが固定される
$( window ).on( 'scroll', function() {
  if ( 50 < jQuery( this ).scrollTop() ) { 
    $( '.fixedheader' ).show();
  } else {
    $( '.fixedheader' ).hide();
  }


  if ( 1000 < $( this ).scrollTop() ) { 
    $( '.fixedheader' ).show();
  } else {
    $( '.fixedheader' ).hide();
  }
  
});

$( window ).on( 'scroll', function() {
  if ( 75 < jQuery( this ).scrollTop() ) { 
    $( '.search-form' ).addClass( 'm_fixed' );
  } else {
    $( '.search-form' ).removeClass( 'm_fixed' );
  }
});

//トップから210pxスクロールするとヘッダーに検索フォームが追加される
$( window ).on( 'scroll', function() {
  if ( 210 < jQuery( this ).scrollTop() ) { 
    $( '.search-header' ).show();
    $('.host').hide();
  } else {
    $( '.search-header' ).hide();
    $('.host').show();
  }
});

// フッターを最下層までスクロールした時、非表示にする
$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); 
  var winh = $(window).innerHeight(); 
  var bottom = doch - winh; 
  if (bottom <= $(window).scrollTop()) {
    $(".hiding-footer").slideUp();
  }else {
    $('.hiding-footer').slideDown();
  }
  });


  $( document ).on( 'scroll', function() {
    if ( 240 > jQuery( this ).scrollTop() ) { 
      $( '.fixedfooter' ).addClass( 'black' );
    } else {
      $( '.fixedfooter' ).removeClass( 'black' );
    }
  });

  //トップから50pxスクロールするとヘッダーが固定される
$( window ).on( 'scroll', function() {
  if ( 1000 > jQuery( this ).scrollTop() ) { 
    
  }
});