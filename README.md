# Tripleten web_project_around

Este proyecto se trata de un viaje alrededor de los Estados Unidos. Donde
nuestro explorador Jacques Cousteau comparte algunas de sus fotografías de
montañas, parques y lagos, de esta y otras partes del mundo también.

Programación de JavaScript:

Programación orientada a objetos:

Simplificar el código es una parte importante de este trabajo. A través de
POO se transformó la función que crea cartas en una clase que consta con
un constructor con sus parámetros correspondientes para asignar los nuevos
valores (name y link) a las nuevas cartas. Esta clase actúa como una
plantilla o molde con las características de fabrica de cartas.

Se hizo el mismo trabajo de validación de formularios transformando el
código de flujo de funciones en una clase. Alberga un constructor con dos
parámetros; el primero contiene los formularios y el segundo los selectores
con las clases de estos.

Ambas clases son exportadas desde sus módulos e importadas en el archivo
principal index.js que contiene el resto del código.

El módulo utils.js contiene las funciones que se encargan de abrir y cerrar
las ventanas emergentes de los formularios.

Refactorizar fue clave para llevar a cabo este trabajo.

Validación de formularios:

Una buena experiencia de usuario es prioridad para una página web, los
formularios requieren una buena validación, no sólo con el atributo “required”
y las propiedades “minlength” y “maxlength”, sino también a través
de JavaScript. Este lenguaje de programación de alto nivel nos permite validar
los formularios mostrando un mensaje de error cada vez que no se cumpla con
los requisitos en los campos de texto mientras el usuario está
escribiendo en ellos. El botón con el evento “submit” estará desactivado hasta
que el usuario ingrese la información necesaria en las entradas; esto evitará
que se guarden valores no deseados.

La validación de los formularios se llevó a cabo con un conjunto de funciones
conectadas entre sí por un objeto pasado como parámetro de la
función “enableValidation”. Este objeto contiene propiedades que se pasaron
como parámetros a las funciones correspondientes, los valores de estas
propiedades son las clases que se deben seleccionar. Gracias a este objeto,
propiedades, valores y parámetros se crea un importante flujo entre las
funciones que permiten la validación.

Nueva funcionalidad:

Las ventanas emergentes se pueden cerrar al hacer click en el overlay negro
con baja opacidad que actúa como fondo.

Gracias al evento “keydown” y al objeto de evento “evt” al cual se le asignó
como valor de su propiedad “key” una igualdad estricta a la tecla “Escape”,
se puede presionar esta tecla para cerrar las ventanas emergentes.

Interactividad:

Perfil editable, nombre y descripción.

Una serie de seis tarjetas principales. Un array contiene las propiedades
de nombre y enlace correspondientes para cada una de las tarjetas.

El usuario puede agregar sus propias tarjetas personalizadas.

Botón "Me gusta" con evento "toggle".

Las imágenes de las tarjetas pueden ser visualizadas al hacer click en ellas.

Una serie de variables, funciones, métodos y propiedades hacen posible
la interactividad de esta página web.

https://charleandresb.github.io/web_project_around/
