// Abre o menu dropdown Mais Opções no topo da página
document.getElementById("btnMaisOpcoes").addEventListener("click", function(){
   document.getElementById("boxMenuMaisOpcoes").classList.toggle("show");
});

// fecha o menu dropdown Mais Opções quando clicar fora do box
window.onclick = function (event) {
   if (!event.target.matches('.btnMaisOpcoes')) {
      var dropdowns = document.getElementsByClassName("boxMenuMaisOpcoes");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}



jQuery(function($){
   var alturaCabecalho = $(".cabecalhoSite").height();
   var isMobile = false;

    // Ativa o cabecalho para ficar fixo
    $(window).scroll(function () {                    
      if ($(this).scrollTop() > alturaCabecalho) {
          //$("body").css("padding-top", (alturaCabecalho) + "px");
          $(".cabecalhoSite").addClass("fixed");

      } else {
          //$("body").css("padding-top", "0");
          $(".cabecalhoSite").removeClass("fixed");
      }
   });

   $("#btnMenuMobile").on("click", function(){
      $("#boxMenuMaisOpcoes").addClass("showMenuMobile");
      $(".boxMascaraMenuMobile").addClass("show");
   });
});