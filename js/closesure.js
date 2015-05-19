// son variable dentro de la funcion encapsuladas, que no son accesadas desde afuera 
var Contdor  = (function() { 
   var _contadorPrivado = 0; 

   function _cambiarValor(valor){ 
     _contadorPrivado += valor;
   };

   return {
      incrementar : function(){
          _cambiarValor(1);
      },
      decrementar: function() {
         _cambiarValor(-1);
      },
     valor: function(){
        return _contadorPrivado;
     }   
   }
})();

/*
   function aumentarFuente(size){
	 return function(){
		document.body.style.fontSize = size + 'px';
	 }
   }

*/