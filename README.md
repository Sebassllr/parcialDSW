# pareja
Codigo Base para el Examen Parcial de Desarrollo de Software en la Web

## Enunciado
Usted ha sido contratado para reemplazar a un ingeniero que renunció intempestivamente 
a su labor dejando el trabajo sin terminar.

Su trabajo es terminar un juego de “busque la pareja” en la Web con las siguientes 
funcionalidades:

Al comenzar el juego, pone aleatoriamente 20 cartas en 5 columnas y 4 filas. 
De estas 20 cartas hay 10 que son iguales a las otras 10 (Ver imagen).

![imagen]( https://raw.githubusercontent.com/dswudem/pareja/master/doc/mockup.png "Asi debe quedar su aplicación")

Cada carta diferente es una imagen que se pone con el estilo visibility: hidden 
para que no se vea cuál carta es.

Cuando el usuario hace click en una carta, la muestra cambiando el estilo por 
visibility:visible. 

Si al hacer click en una segunda carta, esta es igual a la anterior, deja ambas 
mostradas. Si no es igual, la muestra por un segundo y luego la vuelve a dejar oculta.

Cada vez que acierta una pareja, aumenta el puntaje y lo muestra al usuario.

Usted debe entregar un repositorio en GitHub con la aplicación funcionando y se 
le calificarán los siguientes aspectos:

1.	Que el repositorio en GitHub entregado tenga tanto el código original como 
la versión creada por usted (20%)
2.	Que tenga comentarios en el código explicando que hace cada funcion (20%)
2.	Que la aplicación se vea como en la imagen de referencia (20%)
3.	Qué tenga la funcionalidad de dar vuelta a las cartas (10%)
4.	Que tenga la funcionalidad de volver a ocultar las cartas si no tuvo un acierto (10%)
5.	Que deje las cartas visibles cuando hay un acierto (10%)
6.	Que muestre un contador de aciertos al usuario y aumente con cada acierto (10%)

Puntos extra por obtener lo siguiente:
1.	Que el repositorio entregado sea clonado del repositorio original que se entrega (10%)
2.	Que las cartas se repartan aleatoriamente (10%)
3.	Usar animaciones para el movimiento de las cartas (10%)

Si la nota obtenida es mayor a 5.0, el exceso se sumará a las notas del segundo seguimiento.

Al finalizar debe enviar un correo a wdvelasquez@udem.edu.co con el Asunto *Solucion 
Examen Parcial*

Dentro del correo debe incluir su nombre completo para poderle identificar y la dirección 
del repositorio en GitHub donde puso la solución