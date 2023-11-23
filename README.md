# 🏗️ Gruas de Puebla (Front-end)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc -->
**Indice**
- [🧑‍💻 Tecnologias ocupadas](#-tecnologias-ocupadas)
- [📁 `src/main.jsx`](#-srcmainjsx)
  - [📦 Importaciones](#-importaciones)
- [📁 `src/App.jsx`](#-srcappjsx)
  - [❓ Descripción](#-descripci%C3%B3n)
  - [🛣️ Renderizado de Rutas](#-renderizado-de-rutas)
  - [💁 Uso de React Router](#-uso-de-react-router)
- [📁 `src/endpoints.js`](#-srcendpointsjs)
  - [❓ Descripción](#-descripci%C3%B3n-1)
- [📁 `src/helpers/helpHttpAsync.js`](#-srchelpershelphttpasyncjs)
  - [❓ Descripción](#-descripci%C3%B3n-2)
- [📁 `src/validationSchemas/login.js`](#-srcvalidationschemasloginjs)
  - [❓ Descripción](#-descripci%C3%B3n-3)
- [📁 `src/validationSchemas/register.js`](#-srcvalidationschemasregisterjs)
  - [❓ Descripción](#-descripci%C3%B3n-4)
- [📁 `src/components/Distances.jsx`](#-srccomponentsdistancesjsx)
  - [❓ Descripción](#-descripci%C3%B3n-5)
- [📁 `src/components/FormularioRecoleccion.jsx`](#-srccomponentsformulariorecoleccionjsx)
  - [💻 Funcionalidad](#-funcionalidad)
  - [📦 Componentes y Funciones Principales](#-componentes-y-funciones-principales)
  - [🌌 Uso de Dependencias Externas](#-uso-de-dependencias-externas)
- [📁 `src/components/FormularioVehiculos.jsx`](#-srccomponentsformulariovehiculosjsx)
  - [❓ Descripción](#-descripci%C3%B3n-6)
- [📁 `src/components/MyMapLeaflet.jsx`](#-srccomponentsmymapleafletjsx)
  - [❓ Descripción](#-descripci%C3%B3n-7)
  - [🏠 Propiedades](#-propiedades)
- [📁 `src/components/SweetAlertModal.jsx`](#-srccomponentssweetalertmodaljsx)
  - [❓ Descripción](#-descripci%C3%B3n-8)
- [📁 `src/components/SweetAlertToast.jsx`](#-srccomponentssweetalerttoastjsx)
  - [❓ Descripción](#-descripci%C3%B3n-9)
- [📁 `src/pages/LoginPage.jsx`](#-srcpagesloginpagejsx)
  - [❓ Descripción](#-descripci%C3%B3n-10)
- [📁 `src/pages/Page404.jsx`](#-srcpagespage404jsx)
  - [❓ Descripción](#-descripci%C3%B3n-11)
- [📁 `src/pages/public/LayoutPagePublic.jsx`](#-srcpagespubliclayoutpagepublicjsx)
  - [📦 Componente `LayoutPagePublic`](#-componente-layoutpagepublic)
- [📁 `src/pages/public/HomePagePublic.jsx`](#-srcpagespublichomepagepublicjsx)
  - [🏛 Estructura del Componente](#-estructura-del-componente)
  - [📃 Secciones de la Página](#-secciones-de-la-p%C3%A1gina)
  - [🖼️ Uso de Imágenes y Contenido](#-uso-de-im%C3%A1genes-y-contenido)
  - [🖇️ Estructura de las Secciones](#-estructura-de-las-secciones)
  - [📦 Componentes y Estilos](#-componentes-y-estilos)
  - [📦 Componente Funcional](#-componente-funcional)
  - [📒 Nota](#-nota)
  - [🚀 Modificaciones o Mejoras](#-modificaciones-o-mejoras)
- [📁 `src/pages/public/FooterPagePublic.jsx`](#-srcpagespublicfooterpagepublicjsx)
  - [❓ Descripción](#-descripci%C3%B3n-12)
- [📁 `src/pages/public/FaqPagePublic.jsx`](#-srcpagespublicfaqpagepublicjsx)
  - [❓ Descripción](#-descripci%C3%B3n-13)
- [📁 `src/pages/public/ContactoPagePublic.jsx`](#-srcpagespubliccontactopagepublicjsx)
  - [❓ Descripción](#-descripci%C3%B3n-14)
- [📁 `src/pages/public/ConsultaMatriculaPagePublic.jsx`](#-srcpagespublicconsultamatriculapagepublicjsx)
  - [❓ Descripción](#-descripci%C3%B3n-15)
  - [💻 Funcionalidades Principales](#-funcionalidades-principales)
- [📁 `src/pages/public/AcercaPagePublic.jsx`](#-srcpagespublicacercapagepublicjsx)
  - [❓ Descripción](#-descripci%C3%B3n-16)
- [📁 `src/pages/private/LayoutPagePrivate.jsx`](#-srcpagesprivatelayoutpageprivatejsx)
  - [❓ Descripción](#-descripci%C3%B3n-17)
- [📁 `src/pages/private/HomePagePrivate.jsx`](#-srcpagesprivatehomepageprivatejsx)
  - [❓ Descripción](#-descripci%C3%B3n-18)
- [📁 `src/pages/private/FormularioPagePrivate.jsx`](#-srcpagesprivateformulariopageprivatejsx)
  - [❓ Descripción](#-descripci%C3%B3n-19)
- [📁 `src/pages/private/Dashboard.jsx`](#-srcpagesprivatedashboardjsx)
  - [📦 Componente `Dashboard`](#-componente-dashboard)
  - [🚀 Desarrollo Futuro](#-desarrollo-futuro)
  - [📒 Nota](#-nota-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🧑‍💻 Tecnologias ocupadas

| Tecnología/Librería      | Versión  | Descripción                                                                               |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------- |
| React                    | ^18.2.0  | Biblioteca principal para la construcción de interfaces de usuario.                       |
| React-DOM                | ^18.2.0  | Librería de enlace para React y el DOM.                                                   |
| React Router DOM         | ^6.17.0  | Librería para el enrutamiento dentro de aplicaciones React.                               |
| AOS                      | ^2.3.1   | Librería para animaciones al hacer scroll.                                                |
| Datatables.net-plugins   | ^1.13.6  | Plugins adicionales para la manipulación de tablas en Datatables.                         |
| Formik                   | ^2.4.5   | Librería para gestionar formularios en React.                                             |
| jQuery                   | ^3.7.1   | Biblioteca para simplificar la manipulación del DOM y realizar peticiones AJAX.           |
| Leaflet                  | ^1.9.4   | Librería para mapas interactivos.                                                         |
| Leaflet-routing-machine  | ^3.2.12  | Extensión de Leaflet para enrutamiento de mapas.                                          |
| SweetAlert2              | ^11.7.32 | Librería para crear ventanas modales personalizadas.                                      |
| Yup                      | ^1.3.2   | Librería para validación de esquemas.                                                     |
| ESLint                   | ^8.45.0  | Herramienta para el análisis estático del código para identificar patrones problemáticos. |
| eslint-plugin-react      | ^7.32.2  | Plugin de ESLint para reglas específicas de React.                                        |
| @types/react             | ^18.2.15 | Definiciones de tipos TypeScript para React.                                              |
| @types/react-dom         | ^18.2.7  | Definiciones de tipos TypeScript para ReactDOM.                                           |
| vite                     | ^4.4.5   | Herramienta de construcción rápida y ligera para aplicaciones web modernas.               |
| @vitejs/plugin-react-swc | ^3.3.2   | Plugin para Vite que proporciona soporte para React con SWC (Compilador de JavaScript).   |
| prop-types               | ^15.8.1  | Librería para validar las propiedades de los componentes React.                           |

---

## 📁 `src/main.jsx`

- Este archivo es el punto de entrada principal de la aplicación React. Se encarga de renderizar el componente principal App en el elemento con ID root del documento HTML.

### 📦 Importaciones

- `React`: Importa la biblioteca principal de React para trabajar con componentes.
- `ReactDOM`: Importa el módulo de ReactDOM para renderizar componentes en el DOM.
- `App`: Importa el componente principal de la aplicación desde el archivo `App.jsx`.
- `bootstrap.min.personalized.css`: Importa el archivo CSS personalizado para estilos específicos.
- `bootstrap.bundle.min.js`: Importa el archivo JavaScript de Bootstrap para funcionalidades específicas.

---

## 📁 `src/App.jsx`

Este archivo representa el componente principal de la aplicación React. Define las rutas de la aplicación utilizando React Router, importa páginas y componentes necesarios, y utiliza `BrowserRouter` para la navegación.

### ❓ Descripción

- `App()`: Función principal que representa el componente principal de la aplicación.
- `useEffect()`: Utilizado para inicializar AOS, una biblioteca para animaciones al cargar la página.
- `BrowserRouter`: Componente de React Router que provee la navegación a través de la aplicación.
- `Routes`: Componente que define las diferentes rutas y sus correspondientes componentes a ser renderizados.

### 🛣️ Renderizado de Rutas

El componente `Routes` contiene una serie de `Route` que definen las diferentes páginas de la aplicación y sus respectivas rutas:

- Páginas Públicas:

  - `HomePagePublic`
  - `LoginPage`
  - `RegisterPage`
  - `ContactoPagePublic`
  - `AcercaPagePublic`
  - `FaqPagePublic`
  - `ConsultaMatriculaPagePublic`

- Páginas Privadas:

  - `HomePagePrivate`
  - `FormularioPagePrivate`
  - `DashboardPagePrivate`

- Página 404 (`Page404`): Ruta para mostrar una página de error cuando ninguna otra ruta coincide.

### 💁 Uso de React Router

El uso de `Route` dentro de `BrowserRouter` establece las rutas y sus componentes correspondientes para renderizar en función de la URL actual del navegador.

Este archivo `App.jsx` actúa como el componente principal que controla la navegación y renderización de componentes basados en las URL accedidas en la aplicación React.

---

## 📁 `src/endpoints.js`

Este archivo contiene la definición de diferentes endpoints (URLs) utilizados para realizar peticiones a una API en el contexto de la aplicación.

### ❓ Descripción

- `BASE_URL`: Variable que almacena la URL base de la API, probablemente obtenida de variables de entorno o configuraciones de Vite.

- `URL_LOGIN`: Endpoint para realizar la autenticación de usuarios.
- `URL_REGISTER`: Endpoint para registrar nuevos usuarios.
- `URL_CORRALONES_LISTA`: Endpoint para obtener una lista de corralones activos.
- `URL_SINIESTROS_REGISTRAR`: Endpoint para registrar siniestros.
- `URL_GRUASCORRALON_ID`: Endpoint para obtener información sobre grúas de un corralón específico.
- `URL_VEHICULOSTRANSPORTADOS_UBICAR`: Endpoint para ubicar vehículos transportados.
- `URL_REGISTRO_SINIESTRO_COMPLETO`: Endpoint para registrar un siniestro completo.

Estos endpoints representan diferentes operaciones que la aplicación puede realizar hacia la API, como autenticación, registro, consultas y operaciones relacionadas con siniestros, grúas, corralones y vehículos transportados.

---

## 📁 `src/helpers/helpHttpAsync.js`

Este archivo contiene una función (`helpHttpAsync`) que proporciona métodos para realizar peticiones HTTP asincrónicas utilizando `fetch` en aplicaciones JavaScript/React.

### ❓ Descripción

El archivo `helpHttpAsync.js` proporciona una función `helpHttpAsync` que actúa como un cliente HTTP asíncrono. Esta función ofrece métodos para realizar peticiones HTTP como GET, POST, PUT y DELETE utilizando `fetch`.

- `customFetch`: Función interna para realizar la petición HTTP usando `fetch`. Maneja las opciones de la solicitud, como el método, las cabeceras y el cuerpo (si corresponde), y devuelve los datos en formato JSON o lanza un error si la solicitud no es exitosa.

- `get`, `post`, `put`, `del`: Métodos expuestos para realizar peticiones HTTP con los métodos GET, POST, PUT y DELETE, respectivamente. Cada método toma una URL y opciones adicionales para la solicitud y utiliza la función `customFetch` internamente para ejecutar la petición correspondiente.

---

## 📁 `src/validationSchemas/login.js`

Este archivo proporciona un esquema de validación utilizando la librería Yup para validar los campos de un formulario de inicio de sesión.

### ❓ Descripción

El objeto `loginValidationSchema` define un esquema de validación utilizando Yup que especifica las reglas de validación para dos campos:

- **`email`**: Se espera que sea una cadena de texto que represente un correo electrónico válido. El método `email()` de Yup valida si el valor ingresado es un correo electrónico válido, y el método `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'El correo electrónico es obligatorio' en caso de que esté vacío.
- **`password`**: Se espera que sea una cadena de texto. El método `required()` de Yup asegura que este campo no esté vacío, mostrando el mensaje de error 'La contraseña es obligatoria' en caso de que esté vacío.

---

## 📁 `src/validationSchemas/register.js`

Este archivo proporciona un esquema de validación utilizando la librería Yup para validar los campos de un formulario de registro de usuario.

### ❓ Descripción

El objeto `registerValidationSchema` define un esquema de validación utilizando Yup que especifica las reglas de validación para varios campos:

- **`email`**: Se espera que sea una cadena de texto que represente un correo electrónico válido. El método `email()` de Yup valida si el valor ingresado es un correo electrónico válido, y el método `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'El correo electrónico es obligatorio' en caso de que esté vacío.

- **`password`**: Se espera que sea una cadena de texto que cumpla con varias reglas:

  - `min(8)`: La contraseña debe tener al menos 8 caracteres.
  - `max(40)`: La contraseña no debe exceder los 40 caracteres.
  - `matches(/[A-Z]/)`: Debe contener al menos una letra mayúscula.
  - `matches(/[!@#$%^&*(),.?":{}|<>]/)`: Debe contener al menos un carácter especial.
  - `required()`: El campo de contraseña es obligatorio.

- **`confirmPassword`**: Se espera que sea una cadena de texto que coincida con el campo de contraseña (`password`). El método `oneOf([yup.ref('password'), null])` verifica si coincide con el campo de contraseña y `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'Es obligatorio confirmar la contraseña' en caso de que esté vacío o no coincida con la contraseña.

---

## 📁 `src/components/Distances.jsx`

Este archivo exporta una función llamada `calcularDistancia`, la cual utiliza la librería Leaflet y Leaflet Routing Machine para calcular la distancia y el tiempo estimado entre dos coordenadas geográficas.

### ❓ Descripción

La función `calcularDistancia` toma dos coordenadas geográficas (`coordenadaInicio` y `coordenadaFin`) y utiliza Leaflet y Leaflet Routing Machine para calcular la distancia y el tiempo estimado entre estas dos ubicaciones.

- Utiliza la librería Leaflet para crear puntos de inicio y fin (`start` y `end`) a partir de las coordenadas proporcionadas.
- Crea un control de enrutamiento (`control`) utilizando Leaflet Routing Machine, configurando waypoints para representar el inicio y el fin del trayecto.
- Al recibir las rutas encontradas (`routesfound`), calcula la distancia en kilómetros y el tiempo estimado en minutos entre las ubicaciones.
- Retorna una promesa que se resuelve con un objeto que contiene la distancia en kilómetros, el tiempo estimado en minutos y las coordenadas del destino.

---

## 📁 `src/components/FormularioRecoleccion.jsx`

Este archivo representa un componente React denominado `FormularioRecoleccion`, el cual se encarga de mostrar un formulario y un mapa para obtener la ubicación geográfica y visualizar información relacionada con ella.

### 💻 Funcionalidad

El componente `FormularioRecoleccion` tiene las siguientes funciones y características:

- **Obtención de Ubicación Actual**:

  - Utiliza la API de geolocalización del navegador para obtener la ubicación actual del usuario.
  - Si la geolocalización no está disponible o hay algún error al obtenerla, se establecen coordenadas por defecto (latitud y longitud) en Puebla, México.
  - Al obtener las coordenadas, se realiza una consulta inversa a la API de OpenStreetMap (Nominatim) para obtener información detallada sobre la ubicación actual, como código postal, estado, municipio y calle.

- **Interacción con el Mapa**:

  - Muestra un mapa utilizando un componente `MyMapLeaflet` que recibe las coordenadas y permite visualizar la ubicación actual y cambiarla arrastrando el marcador en el mapa.

- **Visualización de la Ubicación**:
  - Muestra los detalles de la ubicación actual obtenida, como el código postal, estado, municipio/alcalde y calle, en campos de solo lectura dentro del formulario.

### 📦 Componentes y Funciones Principales

- **`getMyCurrentCoords()`**: Función para obtener las coordenadas actuales del usuario utilizando la API de geolocalización del navegador y realizando una consulta inversa para obtener información de la ubicación.
- **`onCoordinateChange()`**: Función que se activa cuando hay un cambio en las coordenadas del mapa. Actualiza la ubicación y las coordenadas actuales y envía esa información al formulario de recolección.

- **Renderizado de Interfaz de Usuario**:
  - Muestra un botón para obtener la ubicación actual.
  - Muestra detalles de ubicación en campos de solo lectura (si están disponibles).
  - Muestra un mapa interactivo con la ubicación actual y permite cambiar la ubicación arrastrando el marcador en el mapa.

### 🌌 Uso de Dependencias Externas

- Utiliza el componente `MyMapLeaflet` para mostrar un mapa interactivo.
- Utiliza `helpHttp` para realizar peticiones HTTP, probablemente para la consulta a la API de geolocalización inversa.

---

## 📁 `src/components/FormularioVehiculos.jsx`

Este archivo contiene un componente funcional de React que representa un formulario para capturar datos relacionados con vehículos.

### ❓ Descripción

El componente `FormularioVehiculos` representa un formulario para ingresar información sobre vehículos. Algunos aspectos importantes son:

- **Manejo del envío**: El formulario utiliza un `onSubmit` que captura el evento de envío para procesar la información ingresada por el usuario.

- **Campos de entrada**: El formulario contiene campos para ingresar la placa, color y marca del vehículo. Cada campo tiene etiquetas asociadas (`label`) que describen la información esperada.

- **Validación y envío de datos**: Al enviar el formulario, se capturan los valores de los campos de entrada y se ejecuta la función `formVehiculos` con la información del vehículo. Además, se muestra un mensaje de éxito utilizando el componente `SweetAlertToast` con una alerta de tipo 'success' indicando que los campos parecen estar bien.

---

## 📁 `src/components/MyMapLeaflet.jsx`

Este archivo contiene el componente `MyMapLeaflet`, el cual es un mapa interactivo basado en la biblioteca Leaflet que muestra coordenadas geográficas y permite interactuar con un marcador.

### ❓ Descripción

El componente `MyMapLeaflet` utiliza Leaflet para renderizar un mapa interactivo. Aquí está su funcionalidad principal:

- Utiliza el hook `useEffect` para inicializar el mapa con las coordenadas y el nivel de zoom proporcionados.
- Agrega una capa de mapa desde OpenStreetMap utilizando `L.tileLayer`.
- Añade un marcador al mapa en las coordenadas dadas, permitiendo su arrastre con la opción `draggable: true`.
- Maneja el evento `dragend` del marcador para obtener las nuevas coordenadas cuando el marcador se mueve y ejecuta la función `onCoordinateChange` pasando las nuevas coordenadas.

### 🏠 Propiedades

El componente espera las siguientes propiedades:

- `coordinates`: Un array de números que representa las coordenadas (latitud, longitud) iniciales del marcador en el mapa.
- `zoom`: Un número que representa el nivel de zoom inicial del mapa.
- `onCoordinateChange`: Una función que se ejecuta cuando las coordenadas del marcador cambian, pasando las nuevas coordenadas como argumento.

---

## 📁 `src/components/SweetAlertModal.jsx`

Este archivo exporta un componente funcional llamado `SweetAlertModal` que utiliza SweetAlert2 para mostrar un modal de alerta con diferentes opciones de personalización.

### ❓ Descripción

El componente `SweetAlertModal` es una función asincrónica que recibe ciertos parámetros para personalizar la apariencia del modal de alerta:

- **`title`**: Título que se muestra en el modal de alerta.
- **`textDescription`**: Descripción o mensaje adicional que se muestra en el modal.
- **`icon`**: Ícono que se muestra en el modal, puede ser uno de los íconos proporcionados por SweetAlert2 (por ejemplo, 'success', 'error', 'warning', 'info').
- **`iconColor`**: Color personalizado para el ícono del modal. Por defecto, utiliza el color de advertencia (`var(--bs-warning)`).
- **`confirmButtonColor`**: Color personalizado para el botón de confirmación del modal. Por defecto, utiliza el color primario (`var(--bs-primary)`).
- **`confirmButtonText`**: Texto mostrado en el botón de confirmación del modal.

---

## 📁 `src/components/SweetAlertToast.jsx`

Este archivo contiene un componente `SweetAlertToast` que utiliza SweetAlert2 para mostrar notificaciones tipo Toast.

### ❓ Descripción

La función `SweetAlertToast` crea y muestra una notificación tipo Toast utilizando SweetAlert2. Utiliza las configuraciones proporcionadas en el objeto `Toast` para definir el comportamiento del Toast, como su posición, duración, estilo visual y más.

- `Swal.mixin`: Crea un mixin para configurar las propiedades comunes de los Toasts de SweetAlert2.

  - `toast`: Indica que se trata de una notificación Toast.
  - `position`: Define la posición en la que se mostrará el Toast (`'top-end'` en este caso).
  - `showConfirmButton`: Indica si se muestra o no un botón de confirmación en el Toast.
  - `timer`: Duración del Toast en milisegundos (3000 milisegundos en este caso, es decir, 3 segundos).
  - `timerProgressBar`: Muestra una barra de progreso del tiempo restante del Toast.
  - `didOpen`: Define funciones a ejecutar cuando el Toast se abre, como detener el temporizador al pasar el mouse sobre el Toast y reanudarlo al retirarlo.

- `SweetAlertToast`: Función que recibe parámetros (`icon` y `title`) para mostrar el Toast.
  - `icon`: Ícono a mostrar en el Toast (puede ser `'success'`, `'error'`, `'warning'`, `'info'`, etc.).
  - `title`: Título del Toast que se mostrará.

---

## 📁 `src/pages/LoginPage.jsx`

Este archivo define la lógica y el diseño de la página de inicio de sesión de la aplicación.

### ❓ Descripción

El componente `LoginPage` contiene la lógica para manejar la autenticación del usuario a través de un formulario de inicio de sesión. Aquí se realiza la integración con la lógica de validación definida en `loginValidationSchema` y se utiliza el método `helpHttpAsync().post` para realizar una solicitud HTTP al endpoint de inicio de sesión definido en `URL_LOGIN`.

- `handleSubmit`: Función para manejar el envío del formulario de inicio de sesión. Realiza una solicitud al servidor con los datos de inicio de sesión proporcionados por el usuario. En caso de éxito, muestra una notificación de éxito (`'success'`) con SweetAlert2 y redirige a la página privada. En caso de error, muestra una notificación de error (`'error'`) también con SweetAlert2.

- `formik`: Configuración del formulario utilizando Formik para manejar los valores de los campos (`email` y `password`), las validaciones definidas en `loginValidationSchema` y la ejecución del método `handleSubmit` al enviar el formulario.

- `handleReset`: Función para limpiar el formulario al presionar el botón "Limpiar".

---

## 📁 `src/pages/Page404.jsx`

Este archivo contiene un componente funcional `Page404` utilizado para representar una página personalizada para errores 404 (página no encontrada) en una aplicación web.

### ❓ Descripción

El componente `Page404` representa la página personalizada para el manejo de errores 404. Contiene elementos HTML y clases CSS para mostrar un mensaje de error, indicando al usuario que la página solicitada no está disponible.

- Utiliza React Router (`useNavigate`) para manejar la navegación.
- Muestra un mensaje visual con el código de error "404" y un mensaje indicando que la página no está disponible.
- Proporciona un botón de "Regresar" que, al hacer clic, utiliza `navigate(-1)` para regresar a la página anterior en el historial de navegación.

---

## 📁 `src/pages/public/LayoutPagePublic.jsx`

Este archivo contiene un componente funcional llamado `LayoutPagePublic`, que representa la estructura de diseño para las páginas públicas de una aplicación React. El componente incluye un encabezado de navegación, maneja el desplazamiento al inicio de la página al cambiar de ruta y proporciona un pie de página común.

### 📦 Componente `LayoutPagePublic`

- **`ScrollToTop` Componente Funcional**:

  - Este componente se encarga de realizar un scroll hacia arriba (al inicio de la página) cada vez que hay un cambio de ruta. Utiliza `useLocation` de `react-router-dom` para detectar cambios en la ruta y, mediante `useEffect`, realiza el desplazamiento a la parte superior de la ventana del navegador.

- **Estructura del Layout**:

  - El componente `LayoutPagePublic` contiene una estructura de página que incluye un encabezado de navegación, el cual tiene un logo, elementos de navegación y botones como parte de una barra de navegación Bootstrap.

- **Navegación**:

  - En el encabezado de navegación, se han definido varios elementos de navegación utilizando `NavLink` de `react-router-dom`. Estos elementos están enlazados a rutas específicas (`to="/ruta"`) y se muestran como opciones de menú para las páginas públicas.

- **Botones de Acción**:

  - Además de las opciones de navegación, hay botones como "Iniciar sesión" que también están enlazados a rutas específicas (`to="/ruta"`) y se muestran como botones de acción en la barra de navegación.

- **Uso de `Outlet`**:

  - Utiliza `<Outlet />` para indicar dónde se renderizarán las rutas anidadas bajo esta página en la jerarquía de rutas de React Router. Esto permite que el contenido específico de cada página se muestre dentro de este diseño común.

- **Pie de Página**:
  - Al final, se incluye el componente `FooterPagePublic` para mostrar un pie de página común en las páginas públicas.

---

## 📁 `src/pages/public/HomePagePublic.jsx`

Este archivo contiene el componente `HomePagePublic`, que representa la página principal de la sección pública de una aplicación. Esta página contiene secciones de contenido como información principal, videos, secciones adicionales y noticias.

### 🏛 Estructura del Componente

El componente `HomePagePublic` está compuesto por múltiples secciones definidas a través de elementos HTML y componentes de Bootstrap, mostrando diferentes tipos de contenido.

### 📃 Secciones de la Página

1. **Sección Principal**: Presenta un encabezado principal, texto de descripción y un carrusel con imágenes.
2. **Sección de Video**: Muestra un video incrustado con controles y reproducción automática.
3. **Sección Adicional 1**: Ofrece información adicional con un botón de acción.
4. **Sección de Noticias**: Presenta una sección con tarjetas de noticias simuladas en una cuadrícula.

### 🖼️ Uso de Imágenes y Contenido

- Las imágenes (`img1`, `img2`, `img3`, `img4`) se importan desde la carpeta `assets/images`.
- Se usa un carrusel (`carouselExample`) para mostrar estas imágenes en la sección principal.
- Se incrusta un video desde una URL externa en la sección de video.

### 🖇️ Estructura de las Secciones

- Cada sección está contenida en un `<section>` con clases de Bootstrap para el diseño.
- Se utilizan diferentes clases y etiquetas HTML para organizar y estructurar el contenido en cada sección.

### 📦 Componentes y Estilos

- Utiliza etiquetas de HTML y clases de Bootstrap para definir la estructura y diseño de la página.
- No se hace uso explícito de componentes de React adicionales en este archivo.

### 📦 Componente Funcional

- El componente `HomePagePublic` es un componente funcional de React que devuelve JSX para representar la interfaz de usuario.

### 📒 Nota

- Se muestran tarjetas de noticias simuladas sin contenido real.

### 🚀 Modificaciones o Mejoras

- Se pueden añadir interacciones interactivas, obtener datos dinámicos para las secciones, mejorar la accesibilidad, etc., según las necesidades del proyecto.

---

## 📁 `src/pages/public/FooterPagePublic.jsx`

Este archivo contiene el componente `FooterPagePublic`, el cual representa el pie de página de una página pública en una aplicación web.

### ❓ Descripción

El componente `FooterPagePublic` define la estructura del pie de página de una aplicación web. Actualmente, el contenido del pie de página se encuentra comentado, pero parece incluir secciones que muestran información de enlaces, descripción sobre "¿Qué es GPD (Grúas de Puebla)?", enlaces de redes sociales, entre otros.

---

## 📁 `src/pages/public/FaqPagePublic.jsx`

Este archivo representa la página de preguntas frecuentes (FAQ) para el público en general. Contiene una estructura de secciones que muestran preguntas comunes junto con sus respuestas.

### ❓ Descripción

- **Encabezado de la página**: Se utiliza un encabezado de nivel 1 (`<h1>`) para indicar que se trata de la sección de preguntas frecuentes.

- **Texto introductorio**: Un párrafo (`<p>`) que proporciona una breve descripción o indicación para encontrar las respuestas a las preguntas frecuentes.

- **Lista de preguntas y respuestas**: Utiliza una estructura de columnas (`div` con clases `col-md-6` y `col-lg-4`) para presentar las preguntas y sus respuestas. Cada par de columnas parece representar una pregunta y su respectiva respuesta, con un ícono y texto correspondiente a cada pregunta.

---

## 📁 `src/pages/public/ContactoPagePublic.jsx`

Este archivo representa la página de contacto de una aplicación web. Proporciona un formulario de contacto y contenido adicional en secciones.

### ❓ Descripción

- **Formulario de Contacto**: La página contiene un formulario que incluye campos para nombre, correo electrónico y mensaje. Está estructurado utilizando clases de Bootstrap y parece estar diseñado para recopilar información de contacto de los usuarios.
- **Sección con Imagen**: En la mitad derecha de la página, hay una sección que muestra una imagen (`contact.svg`) relacionada con el contacto. Esta sección utiliza clases de Bootstrap para alinear y mostrar la imagen de forma responsable.

- **Sección Adicional**: Al final de la página, hay una sección con un título y contenido adicional. En este caso, se muestra un título y un párrafo de texto de ejemplo.

---

## 📁 `src/pages/public/ConsultaMatriculaPagePublic.jsx`

Este archivo contiene un componente funcional `ConsultaMatriculaPagePublic` que representa una página para consultar matrículas de vehículos.

### ❓ Descripción

El componente `ConsultaMatriculaPagePublic` muestra un formulario donde los usuarios pueden ingresar una matrícula de vehículo y realizar una búsqueda. Utiliza DataTables (un plugin de jQuery para tablas) para mostrar los resultados de las matrículas encontradas.

### 💻 Funcionalidades Principales

- **Formulario de Búsqueda de Matrícula:**

  - Los usuarios pueden ingresar una matrícula en un campo de entrada y buscarla haciendo clic en el botón "Buscar".
  - Existe un botón "Limpiar" para reiniciar la búsqueda y limpiar los resultados.

- **Visualización de Resultados:**

  - Se muestra una tabla (comentada en el código) que estaría destinada a mostrar los resultados encontrados para la matrícula ingresada por el usuario. Sin embargo, esta sección de la tabla está comentada actualmente.

- **Implementación de DataTables:**

  - Utiliza DataTables con la configuración del idioma español (`language`) para inicializar una tabla (aunque esta sección está comentada en el código).
  - Se destruye la tabla DataTables previamente creada antes de inicializarla de nuevo para evitar errores.

- **Manejo de Resultados:**

  - Si se encuentra una matrícula, se muestra una tabla con detalles del vehículo y su ubicación en el corralón.
  - Si no se encuentran registros, se muestra un mensaje indicando la falta de registros.

- **Lógica de Búsqueda:**
  - Al enviar el formulario, se realiza una solicitud HTTP utilizando `helpHttpAsync` para buscar la matrícula ingresada. Si la búsqueda es exitosa, se actualiza el estado `matricula` con la respuesta obtenida. En caso de error, se muestra una notificación de error utilizando `SweetAlertToast`.

---

## 📁 `src/pages/public/AcercaPagePublic.jsx`

Este archivo contiene un componente funcional de React que muestra información sobre la empresa o equipo en una página pública.

### ❓ Descripción

El componente `AcercaPagePublic` representa una página pública que contiene información sobre la empresa o equipo. Está estructurado en varias secciones que muestran diferentes aspectos:

- **Sección "Acerca de nosotros"**: Presenta información general sobre la empresa o equipo.
- **Otras secciones (Misión, Visión, Nuestro equipo)**: Contienen información detallada sobre la misión, visión y el equipo de la empresa o proyecto.

---

## 📁 `src/pages/private/LayoutPagePrivate.jsx`

Este archivo contiene un componente de React que establece el diseño para una página privada con una barra lateral y un área principal para mostrar contenido dinámico.

### ❓ Descripción

El componente `LayoutPagePrivate` representa una plantilla de diseño para una página privada que incluye:

- **Encabezado**: Contiene un botón para mostrar/ocultar la barra lateral y un avatar o imagen de usuario.
- **Barra lateral (`l-navbar`)**: Muestra un menú de navegación con enlaces a diferentes secciones como Formulario, Dashboard y Cerrar sesión.
- **Contenido principal (`main`)**: Utiliza el componente `Outlet` de React Router para mostrar dinámicamente el contenido de las rutas hijas.

El componente utiliza clases CSS para manejar estilos y efectos visuales, y una función (`handleAside`) para controlar el comportamiento de la barra lateral al hacer clic en el botón de menú.

---

## 📁 `src/pages/private/HomePagePrivate.jsx`

Este archivo contiene un componente funcional de React que representa la página principal de una sección privada de la aplicación.

### ❓ Descripción

El componente `HomePagePrivate` representa la página principal de una sección privada de la aplicación. Contiene elementos HTML y texto de ejemplo que podrían ser reemplazados por contenido real.

---

## 📁 `src/pages/private/FormularioPagePrivate.jsx`

Este archivo contiene un componente funcional de React que representa una página privada con formularios para recolección de datos y envío de información mediante solicitudes HTTP.

### ❓ Descripción

El componente `FormularioPagePrivate` representa una página privada que contiene varios formularios para la recolección de datos relacionados con un registro de siniestro. Algunas características notables son:

- Utiliza estados (`useState`) para almacenar información relevante como coordenadas, datos de formularios, distancias, etc.
- Emplea efectos (`useEffect`) para obtener datos de corralones y calcular distancias.
- Maneja datos provenientes de formularios (`FormularioRecoleccion`, `FormularioVehiculos`, `FormularioAsignacion`) a través de funciones (`lastCoords`, `formRecoleccion`, `formVehiculos`, `formAsignacion`, etc.).
- La función `handleSent` maneja el envío de datos mediante una solicitud HTTP POST a una URL específica (`URL_REGISTRO_SINIESTRO_COMPLETO`).

---

## 📁 `src/pages/private/Dashboard.jsx`

Este archivo contiene un componente de dashboard de prueba para una aplicación web. Aunque actualmente no tiene funcionalidad implementada, está diseñado para demostrar la estructura y la disposición visual de un panel de control. A continuación se presenta una descripción ficticia del componente:

### 📦 Componente `Dashboard`

El componente `Dashboard` simula un panel de control con diferentes secciones y widgets. Aunque la funcionalidad no está implementada, se proporciona un diseño de interfaz de usuario para representar cómo podría lucir un panel de control en una aplicación real.

El dashboard contiene secciones que podrían incluir:

- **Resumen General**: Presenta una visión general de estadísticas importantes, como métricas de ventas, datos de usuarios, etc.
- **Gráficos y Gráficos**: Muestra representaciones visuales de datos a través de gráficos, diagramas o tablas para ilustrar información relevante.
- **Widgets Interactivos**: Podrían incluir elementos interactivos como botones, filtros o controles deslizantes (aunque actualmente son estáticos en esta versión de prueba).
- **Sección de Últimas Actividades**: Simula mostrar las actividades recientes de usuarios, eventos o registros dentro de la aplicación.

### 🚀 Desarrollo Futuro

Este componente está destinado a ser la estructura base para implementar funcionalidades adicionales, lógica y comportamientos interactivos en un verdadero panel de control. En versiones posteriores, se planea integrar lógica de negocio y datos dinámicos para ofrecer una experiencia interactiva y útil para los usuarios.

### 📒 Nota

Actualmente, este componente es un prototipo estático y no realiza ninguna acción o solicitud de datos. Sirve como una plantilla visual para diseñar y planificar la futura funcionalidad del panel de control.
