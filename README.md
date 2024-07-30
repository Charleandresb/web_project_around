# Tripleten web_project_around

Este proyecto se trata de un viaje alrededor de los Estados Unidos. Donde
el usuario puede compartir algunas de sus fotografías de
montañas, parques y lagos, de esta y otras partes del mundo también.

Programación de JavaScript:

JavaScript asincrono y trabajo con la API:

Se ha establecido la conexión con el servidor, la API que almacena, provee y
recibe la información necesaria para nuestra página web.

Se creó la clase Api, la cual está encargada de hacer todas las peticiones
a través de sus métodos. Se obtienen las cartas iniciales, la información del
usuario, se edita su perfil, tanto el nombre, la descripción y el avatar. El
usuario también puede agregar una nueva carta con su respectivo id y borrarla
a través del mismo con las peticiones correspondientes a la API. La misma
metodología aplica para agregar y quitar "likes".

La asincronía se controla por medio de una palabra en los botones de los
popups con formularios, la cual informa al usuario qué esta sucediendo mientras
el servidor hace llegar la información necesaria. Esto brinda una mejor
experiencia para el usuario al interactuar con la página.

Se agregó un nuevo popup con la clase PopupWithConfirmation para preguntar
al usuario si está seguro de eliminar su carta, ya que será eliminada de la API.
Cada carta creada tiene su propio id en la propiedad owner, al compararlo con el
id del usuario, si estos no son iguales, no aparece el icono de bote de basura
para borrar en la carta; esto nos permite eliminar únicamente las cartas
creadas por el propio usuario y no las de otros usuarios.

Programación orientada a objetos y relaciones entre clases:

Se crearon cinco nuevas clases.

Popup:
Esta es la clase padre encargada de aplicar la herencia a sus clases hijas. Lleva
en su constructor el selector de las className de las ventanas emergentes
guardado en una propiedad. Cuenta con un método "open" que agrega el modificador
que muestra el modal, y uno "close" que lo remueve. También tiene un método
con la lógica para cerrar los popups presionando la tecla "Escape" y uno que
almacena los eventos click de cerrar.

PopupWithForm:
Es una extención de la clase Popup, contiene un método encargado de obtener
los valores de los campos de entrada de los formularios. Aplica el polimorfismo
en sus métodos; "open" para mostrar la información del usuario en el
formulario de perfil, "close" para resetear los formularios, y "setEventListeners"
para las características del evento "submit".

PopupWithImage:
Otra clase hija de Popup. Al igual que PopupWithForm, hereda la propiedad
que guarda el selector de popups. Esta clase tiene sus propios métodos, el
método "open" en particular es el responsable de dar los valores adecuados
a los atributos de imagen y título del modal que muestra las fotos.

Section:
Esta clase se encarga de renderizar los elementos de un array, ejecutar la
función "renderer" por cada uno de ellos y agregarlos al DOM. En este caso en
particular, renderiza el array que contiene las propiedades de las cartas
iniciales de la página; selecciona el contenedor que muestra un grid de cartas.

UserInfo:
Sus propiedades y métodos seleccionan el contenido de texto de los elementos de
nombre y oficio del usuario. A través de la clase PopupWithForm, el usuario puede
modificar el perfil y su información también se mostrará el formulario abierto.

Estas clases interactúan entre si a través de sus instancias en el módulo
principal index.js, utilizando la metodología del acoplamiento bajo. Las clases
Section y userInfo son independientes y reutilizables, capaces de obtener
datos de cualquier objeto, renderizarlos y agregarlos a la página.

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

Se hizo el mismo trabajo de validación de formularios transformando el
código de flujo de funciones en una clase. Alberga un constructor con dos
parámetros; el primero contiene los formularios y el segundo los selectores
con las clases de estos.

Funcionalidad "Cerrar":

Las ventanas emergentes se pueden cerrar al hacer click en el overlay negro
con baja opacidad que actúa como fondo.

Gracias al evento “keydown” y al objeto de evento “evt” al cual se le asignó
como valor de su propiedad “key” una igualdad estricta a la tecla “Escape”,
se puede presionar esta tecla para cerrar las ventanas emergentes.

Interactividad:

Perfil editable, nombre y descripción.

Una serie de seis tarjetas principales. Un array contiene las propiedades
de nombres y links correspondientes para cada una de las tarjetas.

El usuario puede agregar sus propias tarjetas personalizadas.

Botón "Me gusta" con evento "toggle".

Las imágenes de las tarjetas pueden ser visualizadas al hacer click en ellas.

Una serie de variables, funciones, métodos y propiedades hacen posible
la interactividad de esta página web.

https://charleandresb.github.io/web_project_around/
