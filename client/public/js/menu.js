document.querySelector( "#tab-main" ).addEventListener( "click", function(_) {
  Array.from( document.querySelectorAll( '[id^="content-"]' ) ).forEach( x => x.setAttribute( "hidden", true ) );
  document.querySelector( "#content-main" ).removeAttribute( "hidden" );
});

document.querySelector( "#tab-about" ).addEventListener( "click", function(_) {
  Array.from( document.querySelectorAll( '[id^="content-"]' ) ).forEach( x => x.setAttribute( "hidden", true ) );
  document.querySelector( "#content-about" ).removeAttribute( "hidden" );
});

document.querySelector( "#tab-scoreboard" ).addEventListener( "click", function(_) {
  Array.from( document.querySelectorAll( '[id^="content-"]' ) ).forEach( x => x.setAttribute( "hidden", true ) );
  document.querySelector( "#content-scoreboard" ).removeAttribute( "hidden" );
});

document.querySelector( "#tab-auth" ).addEventListener( "click", function(_) {
  Array.from( document.querySelectorAll( '[id^="content-"]' ) ).forEach( x => x.setAttribute( "hidden", true ) );
  document.querySelector( "#content-auth" ).removeAttribute( "hidden" );
});

Array.from( document.querySelectorAll( '[id^="content-"]' ) ).forEach( x => x.setAttribute( "hidden", true ) );
document.querySelector( "#content-main" ).removeAttribute( "hidden" );
