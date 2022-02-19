# Desarrollo Front-End (Nivel 2) ED.2021 >> Laboratorio >> Actividad final

**HTML & CSS**

- [x] Se quiere introducir **información relativa a la persona**, como son su nombre (con una longitud máxima de 30 caracteres), apellidos (con una longitud máxima de 60 caracteres), dirección (con una longitud de 60).

- [x] Se quiere recoger información sobre el **tipo de contrato** que se quiere realizar, pudiéndose elegir una de tres opciones: 
  - nueva contratación (que aparecerá marcada por defecto), 
  - portabilidad y 
  - cambio de contrato. 

  Además, habrá dos desplegables donde se podrá elegir 
  - la compañía actual que se tiene: (Movistar, Orange, Vodafone, Yoigo y No Tengo Ninguna Compañía) y
  - a la que se quiere portar (Movistar, Orange, Vodafone y Yoigo).

- [x] Se quiere recoger la información sobre los **datos bancarios** asociados a la contratación, a saber: 
  - País (aparece marcado ES y no puede ser modificado por el usuario), 
  - Control de IBAN (dos dígitos numéricos), 
  - Entidad (cuatro dígitos numéricos), 
  - Sucursal (cuatro dígitos numéricos), 
  - DC (dos dígitos numéricos) y 
  - Cuenta (diez dígitos numéricos).

- [x] Se dispone la posibilidad de recoger **datos estadísticos**. Así, se van a obtener información sobre 
  - cómo se conoció la compañía (con cuatro opciones, mediante checkboxes), y 
  - una valoración sobre la compañía, que se implementará con un elemento que permite seleccionar un rango entre 1 y 4. 
  - Además, se recogerá la información sobre la fecha en la que se realiza la petición (por defecto está fijada a 01/01/2019).
  

**JAVASCRIPT**

- [x] Aparte de un botón para poder enviar el formulario, y otro para poder resetear los valores, la página web dispondrá de otros tres **botones**, que realizarán unas funciones determinadas:
  - El botón “Mostrar Valoración” indicará en pantalla el valor que el usuario ha seleccionado en el elemento rango.
  - El botón “Mostrar Cuenta” indicará en pantalla la cuenta bancaria introducida por el usuario.
  - El botón “Mostrar Día Semana” indicará qué día de la semana (Lunes a Domingo) corresponde la fecha introducida.

- [x] El campo **código postal** ha de ser capaz de validar los códigos postales de las provincias españolas, para realizar la comprobación la herramienta deberá leer los dos primeros números del código postal introducido.
La herramienta deberá:
    1) **Verificar que el código postal se corresponde con la provincia adecuada**, una vez que se validen los datos introducidos.
    2) Implementar un **sistema de alertas** que advierta mediante un mensaje que se han introducido datos erróneos y que solicite que se vuelvan a insertar los datos. 
    Ejemplos de alertas:
        - el nombre erróneo que no corresponde a ninguna provincia
        - números en lugar de letras
        - si el campo está vacío
    3) Indicar con un **mensaje en pantalla** (no con una alerta) el resultado de la búsqueda. El mensaje será:
        - de color rojo en el caso de que la validación sea errónea y 
        - de color verde cuando sea correcta.
    4) Validar que en el campo "código postal" realmente se han introducido **cinco números, que no hay letras y que no está vacío**.

Nota

Los nombres de provincias deben ir sin tildes y sin eñes para evitar problemas con la validación. Aunque se utilice la codificación UTF-8 (que incluye tildes y eñes) es posible que a la hora de validar estos caracteres se encuentren con fallos inesperados dependiendo del IDE utilizado



