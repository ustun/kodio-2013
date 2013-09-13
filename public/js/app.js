$(document).ready(function(){
  
  var t1 = "fcbafbe\100xbq\056vb".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}),
      t2 = "fbpvny\100xbq\056vb".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  
  $("#lnk-spo").html(t1).click(function(e){
    e.preventDefault();
    window.location.href="mailto:" + t1 + "?subject=sponsorship";
  });

  $("#lnk-cnt").html(t2).click(function(e){
    e.preventDefault();
    window.location.href="mailto:" + t2 + "?subject=contact";
  });
  
  $("#nav-eml").click(function(e){
    e.preventDefault();
    window.location.href="mailto:" + t2 + "?subject=contact";
  });
  
  $(".speaker a, .logos a, .block-footer a").attr("target", "_blank");
});


