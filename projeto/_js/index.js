jQuery(function($){
   $('.btnTipoConsorcio').on('click', function(){
      var controle = $(this).data('controle');
      console.log(controle);

      $.fancybox.open({
         src: controle,
         modal: true,
         arrows: false,
         infobar: false,
         toolbar: false,
         smallBtn: false,
         baseClass: 'modalTpConsorcio'
      });
   });

   $("#btnFecharModal").on("click", function(){
      $.fancybox.close();
   });
})


var formataValorMoeda = function(valor) {
   var valorAux = parseInt(valor);
   var numero = valorAux.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

var slider = document.getElementById("rangeValorCred");
var output = document.getElementById("valorCred");
output.innerHTML = formataValorMoeda(slider.value);
slider.oninput = function() {
  output.innerHTML = formataValorMoeda(this.value);
}