# Proyecto_core_javascript

Proyecto final del módulo de core javascript subido íntegramente tal y como se entregó. Proyecto realizado sólo con conocimientos de javascript, sin conocimientros previos de HTML y CSS, por 
lo que el resultado es muy mejorable.


INSTRUCCIONES DEL JUEGO

Para arrancar el juego, descargar todos los archivos y abrir el archivo "index.html" en un navegador.

Se trata de un juego en el que debemos encontrar la pareja de cada palabra en inglés-castellano. Las parejas se ordenan de forma aleatoria cada vez que se inicia un juego, se sube de nivel o se resetea un nivel.

Este juego tiene varios niveles de dificultad. Por defecto se empieza por el nivel 1 y se debe conseguir un registro mínimo para poder seguir y desbloquear los niveles superiores.

Los niveles de dificultad son: Mayor número de parejas y menor tiempo para realizar el juego.

Niveles de dificultad;
	- Nivel 1: 4 parejas y 30 segundos para completar el juego. Para pasar al nivel 2 el contador tiene que quedar por encima de los 20 segundos.
	- Nivel 2: 5 parejas y 25 segundos para completar el juego. Para pasar al nivel 3 el contador tiene que quedar por encima de los 13 segundos.
	- Nivel 3: 6 parejas y 20 segundos para completar el juego. Para ser el Master of Universe el contador se tiene que quedar por encima de los 6 segundos.

Para poder empezar a jugar se debe pulsar el boton "start", de esta manera se inicia una cuenta atrás y los botones de emparejamiento se desbloquearán(antes de empezar están bloqueados). A partir de este momento podemos empezar a hacer click en las parejas oportunas.

Al hacer click en una palabra, esta se deshabilita para evitar ser clickado de nuevo y para facilitar al jugador ver qué palabra ha sido seleccionada.

Para comprobar si la pareja es correcta hay que hacer click en el boton de check cada vez, si no no se realiza la comprobación.

Cuando el emparejamiento es correcto, las palabra "Bien" aparecerá escrita en la pantalla y los botones correctamente emparejados se deshabilitaran.

Si un emparejamiento está mal, la palabra "Mal" aparecerá escrita en la pantalla y todos los botones que estaban deshabilitados de emparejamientos correctos anteriores se volverán a habilitar indicando que se debe empezar de nuevo con los emparejamientos.

Si se quiere empezar de nuevo un juego que ya ha sido empezado hay 2 opciones: Haciendo click en el boton "reset" o haciendo click en el boton del nivel. 

Al hacer click en el boton "reset", la pantalla se reseteará con los parámetros del nivel en el que estemos. Es decir, si estamos en el nivel 3 y hacemos click en "reset", se resetea a los parámetros del nivel 3 de dificultad. De igual forma, al hacer click en el boton de un nivel, se reseteara la pastalla según los parámetros de ese nivel.

Si conseguimos la marca mínima para pasar de nivel, en la pastalla aparecerá un mensaje felicitándonos por el logro, qué nivel hemos desbloqueado y el cronómetro se pausará indicándonos el tiempo que hemos conseguido.

Si no conseguimos la marca mínima para pasar de nivel, igualmente el cronómetro se parará indicándonos el tiempo que hemos conseguido y un mensaje de que tenemos que mejorar nuestra marca para pasar de nivel.


FALLOS CONOCIDOS Y COMENTARIOS:

A veces los botones de las parejas se pueden solapar entre ellos ya que se reordenan de forma aleatoria. Si eso pasa basta con clickar en "reset" para cambiar el reordenamiento.

Lo ideal sería no tener que pulsar el boton de check para hacer la comprobación de cada pareja pero no he encontrado una forma de solventarlo.
