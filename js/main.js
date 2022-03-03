(function(){
    'use strict';

    document.addEventListener('DOMContentLoaded', function(){
        var map = L.map('mapa').setView([-8.111395, -79.029197], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-8.111395, -79.029197]).addTo(map)
            .bindPopup('GdlWebcamp 2020.<br> Easily customizable.') //mesaje que quieras
            .openPopup();

        // Campos Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos de pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarMail);

        function validarCampos(){
            if(this.value == ''){
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'Este campo es  obligatorio';
                this.style.border = '1px solid red';
            }else{
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc'
            }

        }
        function validarMail(){
            if(this.value.indexOf('@') > -1){
                errorDiv.style.display='none';
            }else{
                errorDiv.style.display='block';
                errorDiv.innerHTML ='Debe tener al menos una @'
            }
        }
           
    

        function calcularMontos(event){
            event.preventDefault();
            if (regalo.value === ''){
                alert('Debes elegir un Refalo');
                regalo.focus();
            }else{
                var boletoDia = parseInt(pase_dia.value, 10) || 0,
                    boleto2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas= parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletoDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                var listadoProductos = [];
                if(boletoDia >=1){
                    listadoProductos.push(boletoDia + ' Pase por día');
                }
                if(boleto2Dias >=1){
                    listadoProductos.push(boleto2Dias + ' Pases por 2 días');
                }
                if(boletoCompleto >=1){
                    listadoProductos.push(boletoCompleto + ' Pases Completos');
                }
                if(cantCamisas >=1){
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >=1){
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                

                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for(var i=0; i<listadoProductos.length;i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br>';
                }

                suma.innerHTML = '$ ' + totalPagar.toFixed(2);

            }
        }

        function mostrarDias(){
            var boletoDia = parseInt(pase_dia.value, 10) || 0,
                boleto2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];

                if(boletoDia > 0){
                    diasElegidos.push('viernes');
                }
                if(boleto2Dias > 0){
                    diasElegidos.push('viernes','sabado');
                }
                if(boletocompleto > 0){
                    diasElegidos.push('viernes','sabado','domingo');
                }
                for(var i=0; i<diasElegidos.length; i++){
                    document.getElementById(diasElegidos[i]).style.display='block';

                }
        }




    });//DOM CONTENT LOADED
})();