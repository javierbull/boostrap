(function($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function() {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });


  $('.validate-form .input100').each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }


  // =============================================



  // DATE PICKER =======================

  $(function() {
    $("#datepicker").datepicker({
      autoclose: true,
      language: 'es',
      todayHighlight: true,
    }).datepicker('update', new Date());
  });

  $.fn.datepicker.dates['es'] = {
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: "Hoy",
    monthsTitle: "Meses",
    clear: "Borrar",
    weekStart: 1,
    format: "dd/mm/yyyy"
  };




  // FIN DATE PICKER


  // VALIDADOR =================
  // namespace de la aplicación
  var UXAPP = UXAPP || {};

  // paquete de validaciones
  UXAPP.validador = {};

  // método que inicia el validador con restriccion de caracteres
  UXAPP.validador.init = function() {
    // busca los elementos que contengan el atributo regexp definido
    $("input[regexp]").each(function() {
      // por cada elemento encontrado setea un listener del keypress
      $(this).keypress(function(event) {

        if (event.which <= 32)
          return 0;

        // extrae la cadena que define la expresión regular y creo un objeto RegExp
        var regexp = new RegExp("^" + $(this).attr("regexp") + "$", "g");

        // evalua si el contenido del campo se ajusta al patrón REGEXP
        if (!regexp.test($(this).val() + String.fromCharCode(event.which)))
          event.preventDefault();

      });

    });

    // FIN VALIDADOR

  }


  // Arranca el validador al término de la carga del DOM
  $(document).ready(UXAPP.validador.init);

  // SELECTOR PRODUCTO =======================================

  $('#mySelect').on('change', function(e) {
    $('#myTab li a').eq($(this).val()).tab('show');
  });

  // FIN SELECTOR PRODUCTO

  // INCREMENTO - DECREMENTO =================


  $('.qtybutton').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // FIN INCREMENTO - DECREMENTO

  // LABEL FLOAT
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  // FIN LABEL FLOAT

  // Cambiar Logo Nav al hacer scroll

  // $(function() {
  //   $(document).scroll(function() {
  //     if ($(this).scrollTop() > 1) {
  //       $('#logo').attr('src', 'images/icons/cineplanetLogoDark.png');
  //     }
  //     if ($(this).scrollTop() < 1) {
  //       $('#logo').attr('src', 'images/icons/cineplanetLogo.png');
  //     }
  //   });
  // });

  // Fin cambiar Logo al hacer scroll

})(jQuery);
