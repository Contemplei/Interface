var contempleiOpenModal = {
   controle: null,
   botaoAbrir: null,
   botaoFechar: null,
   
   acoes: function(that){
      that.botaoAbrir.onClick = function() {
         var parent = that.controle.parentNode;
         var wrapper = document.createElement('div');
         wrapper.setAttribute('id', 'contempleiModal');
         parent.replaceChild(wrapper, that.controle);
         wrapper.appendChild(that.controle);

         that.controle.style.display = 'block';
      }

      that.botaoFechar.onClick = function() {
         that.controle.style.display = 'none';
      }

      // quando clicar em qualquer lugar fora do controle, fecha ele
      window.onclick = function(event) {
         if (event.target == modal) {
            that.controle.style.display = "none";
         }
       }
   },

   init: function(idBotao, classControle, classBotaoFechar) {
      this.botaoAbrir = document.getElementById(idBotao);
      this.controle = document.getElementsByClassName(classControle)[0];
      this.botaoFechar = document.getElementsByClassName(classBotaoFechar)[0];

      this.acoes(this);
   }
}