$(function() {
  $( '.form-container' ).hide();
});

//トップから50pxスクロールするとヘッダーが固定される
$( window ).on( 'scroll', function() {
  if ( 50 < jQuery( this ).scrollTop() ) { 
    $( '.fixed_header-container' ).show();
  } else {
    $( '.fixed_header-container' ).hide();
  }


  if ( 1000 < $( this ).scrollTop() ) { 
    $( '.fixed_header-container' ).show();
  } else {
    $( '.fixed_header-container' ).hide();
  }
  
});

$( window ).on( 'scroll', function() {
  if ( 75 < jQuery( this ).scrollTop() ) { 
    $( '.fixedform-container' ).addClass( 'm_fixed' );
  } else {
    $( '.fixedform-container' ).removeClass( 'm_fixed' );
  }
});

//トップから210pxスクロールするとヘッダーに検索フォームが追加される
$( window ).on( 'scroll', function() {
  if ( 210 < jQuery( this ).scrollTop() ) { 
    $( '.form-container' ).show();
    $('.hide').hide();
  } else {
    $( '.form-container' ).hide();
    $('.hide').show();
  }
});

// フッターを最下層までスクロールした時、非表示にする
$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); 
  var winh = $(window).innerHeight(); 
  var bottom = doch - winh; 
  if (bottom <= $(window).scrollTop()) {
    $(".hidefooter-container").slideUp();
  }else {
    $('.hidefooter-container').slideDown();
  }
  });


  $( document ).on( 'scroll', function() {
    if ( 350 > jQuery( this ).scrollTop() ) { 
      $( '.fixed-footer' ).addClass( 'black' );
    } else {
      $( '.fixed-footer' ).removeClass( 'black' );
    }
  });

  //トップから50pxスクロールするとヘッダーが固定される
$( window ).on( 'scroll', function() {
  if ( 1000 > jQuery( this ).scrollTop() ) { 
    
  }
});